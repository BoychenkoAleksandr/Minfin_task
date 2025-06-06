package com.boic.backend.auth;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class AuthLogin {
    @NotNull
    private String username;
    @NotNull
    private String password;
}
