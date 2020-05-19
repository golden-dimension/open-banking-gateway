package de.adorsys.opba.protocol.xs2a.service.xs2a.dto;

import de.adorsys.opba.protocol.api.dto.codes.FieldCode;
import de.adorsys.opba.protocol.api.dto.codes.TypeCode;
import de.adorsys.opba.protocol.bpmnshared.dto.DtoMapper;
import de.adorsys.opba.protocol.xs2a.context.Xs2aContext;
import de.adorsys.opba.protocol.xs2a.service.xs2a.annotations.ContextCode;
import de.adorsys.opba.protocol.xs2a.service.xs2a.annotations.FrontendCode;
import de.adorsys.opba.protocol.xs2a.service.xs2a.annotations.ValidationInfo;
import de.adorsys.xs2a.adapter.service.RequestHeaders;
import lombok.Data;
import org.mapstruct.Mapper;

import javax.validation.constraints.NotBlank;
import java.util.HashMap;
import java.util.Map;

import static de.adorsys.opba.protocol.xs2a.constant.GlobalConst.SPRING_KEYWORD;
import static de.adorsys.opba.protocol.xs2a.constant.GlobalConst.XS2A_MAPPERS_PACKAGE;
import static de.adorsys.xs2a.adapter.service.RequestHeaders.PSU_ID;
import static de.adorsys.xs2a.adapter.service.RequestHeaders.X_GTW_ASPSP_ID;
import static de.adorsys.xs2a.adapter.service.RequestHeaders.X_REQUEST_ID;

/**
 * Standard headers to call XS2A-adapter (used for almost all requests).
 */
@Data
public class Xs2aStandardHeaders {

    /**
     * PSU ID - PSU login in ASPSP API.
     */
    @NotBlank(message = "{no.ctx.psuId}")
    @ValidationInfo(ui = @FrontendCode(TypeCode.STRING), ctx = @ContextCode(FieldCode.PSU_ID))
    private String psuId;

    /**
     * ASPSP ID - bank ID to be used with Xs2a adapter.
     */
    @NotBlank(message = "{no.aspsp.id}")
    private String aspspId;

    /**
     * X-Request-ID - request ID used for tracing.
     */
    @NotBlank // can't be provided manually
    private String requestId;

    public RequestHeaders toHeaders() {
        Map<String, String> allValues = new HashMap<>();

        allValues.put(PSU_ID, psuId);
        allValues.put(X_REQUEST_ID, requestId);
        allValues.put(X_GTW_ASPSP_ID, aspspId);

        return RequestHeaders.fromMap(allValues);
    }

    @Mapper(componentModel = SPRING_KEYWORD, implementationPackage = XS2A_MAPPERS_PACKAGE)
    public interface FromCtx extends DtoMapper<Xs2aContext, Xs2aStandardHeaders> {
        Xs2aStandardHeaders map(Xs2aContext ctx);
    }
}
