package com.boic.backend.bank;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BankService {
    private final ExternalBankApi externalApi;
    public Page<ExternalBankResponse> getBanks(Pageable pageable) {
        List<ExternalBankResponse> responses = externalApi.getBanks();

        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), responses.size());

        List<ExternalBankResponse> pageContent = responses.subList(start, end);
        return new PageImpl<>(pageContent, pageable, responses.size());
    }
}
