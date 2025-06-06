package com.boic.backend.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public void registerUser(@RequestBody @Valid AuthLogin authRegister) {
        authService.registerUser(authRegister.getUsername(), authRegister.getPassword());
    }
    @PostMapping("/login")
    public AuthResponse login(@RequestBody @Valid AuthLogin authLogin) {
        return authService.login(authLogin.getUsername(), authLogin.getPassword());
    }
}
