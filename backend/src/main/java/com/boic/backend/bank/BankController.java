package com.boic.backend.bank;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BankController {
    private final BankService service;
    @GetMapping("/banks")
    public Page<ExternalBankResponse> getBanks(Pageable pageable) {
        return service.getBanks(pageable);
    }
}
