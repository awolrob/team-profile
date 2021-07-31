// export function to generate entire page
module.exports = (myTeamData) => {

  if (!myTeamData.engineer) {
    myTeamData.engineer = [];
  }
  if (!myTeamData.intern) {
    myTeamData.intern = [];
  }
  
  console.log(myTeamData, "myTeamData");
  console.log("==================");
  console.log(myTeamData.manager, "myTeamData manager");
  console.log(myTeamData.engineer.length, "myTeamData engineer");
  console.log(myTeamData.intern.length, "myTeamData intern");
  console.log("==================");
  console.log(myTeamData.manager.getRole());

  return `
  
  Manager: ${myTeamData.manager.name} 
  
  Engineer: ${myTeamData.engineer[0].name} 
  
  Intern: ${myTeamData.intern[0].name}
  
  `;
};