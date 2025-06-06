package com.boic.backend.auth;

import com.boic.backend.configuration.CustomUserDetailsService;
import com.boic.backend.configuration.JwtTokenUtil;

import com.boic.backend.configuration.CustomUserDetails;
import com.boic.backend.exception.LoginException;
import com.boic.backend.exception.RegisterException;
import com.boic.backend.user.User;
import com.boic.backend.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final UserService userService;
    private final JwtTokenUtil jwtTokenUtil;
    private final CustomUserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    public void registerUser(String username, String password) {
        if (userService.findByUsernameIgnoreCase(username) != null) {
            throw new RegisterException("Пользователь с таким логином уже существует");
        }

        User user = new User();
        user.setPassword(passwordEncoder.encode(password));
        user.setUsername(username);

        userService.persist(user);
    }

    public AuthResponse login(String username, String password) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            username,
                            password
                    )
            );

            CustomUserDetails customUserDetails = userDetailsService.loadUserByUsername(username);

            AuthResponse response = new AuthResponse();
            response.setToken(jwtTokenUtil.generateToken(customUserDetails));
            response.setUserId(customUserDetails.getId());
            response.setUsername(customUserDetails.getUsername());

            return response;
        } catch (Exception e) {
            throw new LoginException("Неправильный логин или пароль");
        }
    }
}
