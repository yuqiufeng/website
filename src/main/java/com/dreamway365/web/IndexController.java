package com.dreamway365.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by qiufeng on 2017/6/2.
 */
@Controller
public class IndexController {

    @RequestMapping("index")
    String index(@RequestParam(name = "hash",required = false,defaultValue = "0") String hash, ModelMap modelMap) {
        modelMap.addAttribute("locationHash",hash);
        return "index";
    }

}
