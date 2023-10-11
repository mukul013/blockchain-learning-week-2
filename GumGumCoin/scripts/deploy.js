

async function main(){

  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:" , deployer.address)

  const token = await ethers.deployContract("GumGumCoin");
  console.log("Token Address : " , await token.getAddress())


}

main().then( () => ProcessingInstruction.exit(0)).catch( (error) => {
  console.error(error);
  process.exit(1);
});