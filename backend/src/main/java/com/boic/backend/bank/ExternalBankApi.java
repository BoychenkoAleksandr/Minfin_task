package com.boic.backend.bank;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "bank")
public interface ExternalBankApi {
    @GetMapping
    List<ExternalBankResponse> getBanks();
}
