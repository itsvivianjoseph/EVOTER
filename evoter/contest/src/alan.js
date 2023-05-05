var alanBtnInstance = alanBtn({
    key: "e44cbcb284044601af4cf2a75341725b2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: function (commandData) {
            if (commandData.command == "logging") {
              window.location.href = "admin_login.ejs";
            }
        },
        rootEl: document.getElementById("alan-btn"),
      });