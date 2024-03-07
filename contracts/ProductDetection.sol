// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract ProductDetection {
    address public immutable i_owner;
    uint256 public productId = 0;
    address[] public  manufacturerList;

    struct Manufacturer {
        bool exists;
        string name;
        string website;
        address wallet_address;
    }

    struct ProductOwnerData {
        address curOwner;
        uint256 ownerShipUpdateTimeStamp;
    }

    struct Product {
        bool exists;
        bytes32 productHash; // unique productid
        string name;
        string model;
        uint256 price;
        address manufacturer;
        address curOwner;
        uint256 manufacturedTimestamp;
        string expiryDate;
        ProductOwnerData[] owners;
    }

    mapping(address => Manufacturer) public manufacturers;
    mapping(bytes32 => Product) public products;
    mapping(address => bytes32[]) public productsList;
    

    event ManufacturerCreated(string name, address _address);
    event ProductCreated(bytes32 productHash, address manufacturer);
    event OwnerShipUpdated(bytes32 productHash, address newOwner);

    constructor() {
        i_owner = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == i_owner,
            "Only owner can create new manufacturer."
        );
        _;
    }
    modifier checkForAlreadyExist(address _address) {
        require(!manufacturers[_address].exists, "Manufacturer already exists");
        _;
    }
    modifier onlymanufacturer() {
        require(
            manufacturers[msg.sender].exists,
            "Only manufacturer is able to create products."
        );
        _;
    }

    function createManufacturer(
        string calldata _name,
        string calldata _website,
        address _address
    ) public onlyOwner checkForAlreadyExist(_address) {
        // what is the use of indexed and when to use it

        manufacturers[_address] = Manufacturer(true, _name, _website, _address); // gas efficient you have to write in correct order
        manufacturerList.push(_address);
        emit ManufacturerCreated(_name, _address);
    }

    function createProduct(
        string calldata _name,
        string calldata _model,
        uint256 _price,
        string calldata _expiryDate
    ) public onlymanufacturer {
        bytes32 productHash = keccak256(
            abi.encodePacked(productId, msg.sender, block.timestamp)
        ); // msg.sender is manufacturer
        Product storage p = products[productHash];
        p.exists = true;
        p.productHash = productHash;
        p.name = _name;
        p.model = _model;
        p.price = _price;
        p.manufacturer = msg.sender;
        p.curOwner = msg.sender;
        p.manufacturedTimestamp = block.timestamp;
        p.expiryDate = _expiryDate;

        ProductOwnerData memory data = ProductOwnerData(
            msg.sender,
            p.manufacturedTimestamp
        );
        p.owners.push(data);

        productsList[msg.sender].push(productHash);
        productId++;
        emit ProductCreated(productHash, msg.sender);
    }

    function ownershipUpdate(bytes32 _productHash, address _address) public {
        Product storage p = products[_productHash];
        require(
            p.curOwner == msg.sender,
            "Only owner of this product update ownership."
        );
        p.curOwner = _address;
        ProductOwnerData memory data = ProductOwnerData(
            _address,
            block.timestamp
        );
        p.owners.push(data);
        emit OwnerShipUpdated(_productHash, _address);
    }

    function checkProduct(bytes32 _productHash)
        public
        view
        returns (Product memory)
    {
        return products[_productHash];
    }

    function checkManufacturer(address _address)
        public
        view
        returns (Manufacturer memory)
    {
        return manufacturers[_address];
    }

    function getAllManufacturers() public view returns (address[] memory) {
    return manufacturerList;
    }

    function getAllProductsOfManufacturer(address _address) public view returns(bytes32[] memory){
        return productsList[_address];
    }


}

// What we going to do in smart contract

    // owner,manufactures,product,client(ye lai register gadde ki jarurat nai thi)
    // only owner wiil able to create manufacturer
    // only manufacturer will able to create product
    // manufacturer can able to update the ownership and it is saved in array
    // client will able to see the product detais through product id which is in the form of hash
    // client is also able to check manufacturer to check manufacturer is fake or not.
    // i also want the list of the manufacturers.
    // list of the manufacturers

// IN create manufactuerer section
// manufacturers[_address] = Manufacturer({exists: true, name: _name, website: _website, wallet_address: _address});

// manufacturers[_address] = Manufacturer(true, _name, _website, _address); do this if you dont want to do futher operation on it like modfication
// IT is gas efficent if you want to modify the existing the instance of the Manufacturer struct value because it doexn't create new instance
// Manufacturer storage m = manufacturers[_address];
// m.exists = true;
// m.name = _name;
// m.wallet_address = _address;
// m.website = _website;