package com.boic.backend.auth;

import lombok.Data;

@Data
public class AuthResponse {
    private String token;
    private Long userId;
    private String username;
}
