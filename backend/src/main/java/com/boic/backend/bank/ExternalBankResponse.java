package com.boic.backend.bank;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@RequiredArgsConstructor
public class ExternalBankResponse {

    private String typ;

    @JsonProperty("CDBank")
    private String cdBank;

    @JsonProperty("CDHeadBank")
    private String cdHeadBank;

    @JsonProperty("NrBank")
    private String nrBank;

    @JsonProperty("BICStatus")
    private String bicStatus;

    @JsonProperty("NmBankShort")
    private String nmBankShort;

    @JsonProperty("AdrBank")
    private String adrBank;

    @JsonProperty("CdControl")
    private String cdControl;

    @JsonProperty("DtControl")
    private String dtControl;

    @JsonProperty("CdBankSuccessor")
    private String cdBankSuccessor;

    @JsonProperty("DTBegin")
    private String dtBegin;

    @JsonProperty("DtEnd")
    private String dtEnd;

}
