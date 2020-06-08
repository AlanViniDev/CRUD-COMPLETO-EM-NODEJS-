exports.view = function (req, res) {
    const __dirname = "./";
   // res.sendFile (__dirname + "/home.html");
   res.sendFile('view/home.html' , { root : __dirname});
};

exports.module = this.view;