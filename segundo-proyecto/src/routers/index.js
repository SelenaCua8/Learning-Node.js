import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index.ejs", {title: "First Website With Node"})); // OBEJTO DE JAVASCRIPT

router.get("/about", (req, res) => res.render("about.ejs", {title: "About Me"}));

router.get("/contact", (req, res) => res.render("contact.ejs", {title: "Contact Page"}));

export default router;
