package com.arup.scm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/home")
    public String getHome(Model model) {
        System.out.println("Home page handler");

        // sending data to template
        model.addAttribute("name", "SubString");
        model.addAttribute("google", "https://www.google.com/");

        return "home";
    }

    // about route
    @GetMapping("/about")
    public String aboutPage() {
        System.out.println("About page loding....");
        return "about";
    }

    // service route
    @GetMapping("/services")
    public String servicesPage() {
        System.out.println("Services page loding...");
        return "services";
    }

    // contact route
    @GetMapping("/contact")
    public String contactPage() {
        System.out.println("Contact page loding...");
        return "contact";
    }

    // contact route
    @GetMapping("/login")
    public String loginPage() {
        System.out.println("Login page loding...");
        return "login";
    }

    // contact route
    @GetMapping("/register")
    public String registerPage() {
        System.out.println("Signup page loding...");
        return "register";
    }

}
