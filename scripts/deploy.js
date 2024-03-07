const hre = require("hardhat");

async function main() {

  const productDetectionFactory = await hre.ethers.getContractFactory("ProductDetection");
  console.log("deploying...");
  const productDetection = await productDetectionFactory.deploy();
  await productDetection.waitForDeployment();

  console.log(`The Deployed contract address is ${productDetection.target}`); //0xaFEA797315576F4fe58499C7d2608Ac269d4cD04

  // now i have to verify here 
  console.log(hre.network.config.chainId);
  if(hre.network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY){
    console.log(`waiting for 6 confirmation.`);
    await productDetection.deploymentTransaction().wait(6);
    await verify(productDetection.target,[]);
  }
}

async function verify(contractAddress,args){
  console.log(`verifying contract address..`);
  try {
    await hre.run(`verify:verify`,{
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes(`already verified`)) {
      console.log(`Already verified`);
    }else{
      console.log(error);
    }
  }
}
main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})
