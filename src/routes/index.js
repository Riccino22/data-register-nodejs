module.exports = (app) => {

    let entries = [];
    app.locals.entries = entries;



    const multer = require("multer");

    const upload = multer({
        dest : "./uploads/",
        fileFilter(req, file, next) {
            const isPhoto = file.mimetype.startsWith('image/');
            if (isPhoto) {
              next(null, true);
            } else {
              next({ message: "El tipo de archivo no es válido" }, false);
            }
          }
    });

  


    app.get("/", (req, res) => {
        res.render("index", {
            
        });
    });
  
    app.get("/new", (req, res) => {
        res.render("new");
    })

    app.post("/new", upload.single("avatar"), (req, res)=>{
    
        let newEntry = {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            CI: req.body.CI,
            tlf: req.body.tlf,
            birth: {
                day: req.body.day,
                month: req.body.month,
                year: req.body.year
            },
            avatar: req.file.path,
        };    
    
   
        entries.push(newEntry);
        res.redirect("/");
    


    });
}


 
