//instantiate  github
const github = new Github();
//instantiate ui
const ui = new Ui();

//User input
const searchUser = document.getElementById("searchUser");

//event listener for the input
searchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;
  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos)
      }
    });
  } else {
    //clear profiles
    ui.clearProfile();
  }
});
