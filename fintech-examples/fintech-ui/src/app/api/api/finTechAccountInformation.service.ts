/**
 * Open Banking Gateway FinTech Example API
 * This is a sample API that show how develop FinTech use case that invoke banking APIs.  #### User Agent This Api assumes that the PsuUserAgent is a modern browsers that * automatically detects the \"302 Found\" response code and proceeds with the associated location url, * stores httpOnly cookies sent with the redirect under the given domain and path as defined by [RFC 6265](https://tools.ietf.org/html/rfc6265).  This Api also assumes any other PsuUserAgent like a native mobile or a desktop application can simulate this same behavior of a modern browser with respect to 30X and Cookies.  #### SessionCookies and XSRF After a PSU is authenticated with the FinTech environment (either through the simple login interface defined here, or through an identity provider), the FinTechApi will establish a session with the FinTechUI. This is done by the mean of using a cookie called SessionCookie. This SessionCookie is protected by a corresponding XSRF-TOKEN. * The request that sets a SessionCookie also carries a corresponding X-XSRF-TOKEN in the response header. * It is the responsibility of the FinTechUI to parse this X-XSRF-TOKEN and send it back to the FinTechApi with each subsequen request.  #### Redirecting to the ConsentAuthorisationApi Any response of the FinTechApi that redirects the PSU to the ConsentAuthorisationApi makes sure following happens: * that the exisitng SessionCookie is deleted, as there is no explicite login. * that a RedirectCookie is set, so the user can be authenticated again when sent back to the FinTechApi. * The url that sends the user back to the FinTechApi must carry a redirecState parameter that matches the corresponding redirect cookie.  While redirecting the user to the ConsentAuthorisationApi, there is no certainty upon how long the consent session will take. For this reason, it is better to set a separated RedirectSessionCookie that has a life set to the expected max dureation of the consent authorisation session.  #### Reloading the FinTechUI Reloading the FinTechUI, we will also loose the XSRF parameter that is used to validate the SessionCookie. This is why we set RedirectCookie (that this time has a very short life span). The url reloading the FinTechUI must carry a redirectState parameter that will be used to invoke the /afterReload endpoint of the FinTechApi. Thus leading to a new SessionCookie and corresponding XSRF parameter.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { AccountList } from '../model/accountList';
import { TransactionsResponse } from '../model/transactionsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class FinTechAccountInformationService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Provides list of available accounts for the given bank
     * Read the identifiers of the available payment accounts.  If required by the bank, PSU consent will be obtained before returning the list of bank accounts.  Returns all identifiers of the accounts, to which an account access has been granted to by the PSU. In addition, relevant information about the accounts and hyperlinks to corresponding account information resources are provided if a related consent has been already granted.
     * @param bankId
     * @param xRequestID Unique ID that identifies this request through common workflow. Must be contained in HTTP Response as well.
     * @param X_XSRF_TOKEN XSRF parameter used to validate a SessionCookie.
     * @param fintechRedirectURLOK
     * @param fintechRedirectURLNOK
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public aisAccountsGET(bankId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, observe?: 'body', reportProgress?: boolean): Observable<AccountList>;
    public aisAccountsGET(bankId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AccountList>>;
    public aisAccountsGET(bankId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AccountList>>;
    public aisAccountsGET(bankId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (bankId === null || bankId === undefined) {
            throw new Error('Required parameter bankId was null or undefined when calling aisAccountsGET.');
        }
        if (xRequestID === null || xRequestID === undefined) {
            throw new Error('Required parameter xRequestID was null or undefined when calling aisAccountsGET.');
        }
        if (X_XSRF_TOKEN === null || X_XSRF_TOKEN === undefined) {
            throw new Error('Required parameter X_XSRF_TOKEN was null or undefined when calling aisAccountsGET.');
        }
        if (fintechRedirectURLOK === null || fintechRedirectURLOK === undefined) {
            throw new Error('Required parameter fintechRedirectURLOK was null or undefined when calling aisAccountsGET.');
        }
        if (fintechRedirectURLNOK === null || fintechRedirectURLNOK === undefined) {
            throw new Error('Required parameter fintechRedirectURLNOK was null or undefined when calling aisAccountsGET.');
        }

        let headers = this.defaultHeaders;
        if (xRequestID !== undefined && xRequestID !== null) {
            headers = headers.set('X-Request-ID', String(xRequestID));
        }
        if (X_XSRF_TOKEN !== undefined && X_XSRF_TOKEN !== null) {
            headers = headers.set('X-XSRF-TOKEN', String(X_XSRF_TOKEN));
        }
        if (fintechRedirectURLOK !== undefined && fintechRedirectURLOK !== null) {
            headers = headers.set('Fintech-Redirect-URL-OK', String(fintechRedirectURLOK));
        }
        if (fintechRedirectURLNOK !== undefined && fintechRedirectURLNOK !== null) {
            headers = headers.set('Fintech-Redirect-URL-NOK', String(fintechRedirectURLNOK));
        }

        // authentication (sessionCookie) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<AccountList>(`${this.configuration.basePath}/v1/ais/banks/${encodeURIComponent(String(bankId))}/accounts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the list of transactions of the given account
     * Returns the list of transactions of the given account.
     * @param bankId
     * @param accountId
     * @param xRequestID Unique ID that identifies this request through common workflow. Must be contained in HTTP Response as well.
     * @param X_XSRF_TOKEN XSRF parameter used to validate a SessionCookie.
     * @param fintechRedirectURLOK
     * @param fintechRedirectURLNOK
     * @param dateFrom Conditional: Starting date (inclusive the date dateFrom) of the transaction list, mandated if no delta access is required.  For booked transactions, the relevant date is the booking date.  For pending transactions, the relevant date is the entry date, which may not be transparent neither in this API nor other channels of the ASPSP.
     * @param dateTo End date (inclusive the data dateTo) of the transaction list, default is \&quot;now\&quot; if not given.  Might be ignored if a delta function is used.  For booked transactions, the relevant date is the booking date.  For pending transactions, the relevant date is the entry date, which may not be transparent neither in this API nor other channels of the ASPSP.
     * @param entryReferenceFrom This data attribute is indicating that the AISP is in favour to get all transactions after the transaction with identification entryReferenceFrom alternatively to the above defined period. This is a implementation of a delta access. If this data element is contained, the entries \&quot;dateFrom\&quot; and \&quot;dateTo\&quot; might be ignored by the ASPSP if a delta report is supported.  Optional if supported by API provider.
     * @param bookingStatus Permitted codes are   * \&quot;booked\&quot;,   * \&quot;pending\&quot; and   * \&quot;both\&quot; To support the \&quot;pending\&quot; and \&quot;both\&quot; feature is optional for the ASPSP, Error code if not supported in the online banking frontend Default is \&quot;booked\&quot;
     * @param deltaList This data attribute is indicating that the AISP is in favour to get all transactions after the last report access for this PSU on the addressed account. This is another implementation of a delta access-report.  This delta indicator might be rejected by the ASPSP if this function is not supported.  Optional if supported by API provider
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public aisTransactionsGET(bankId: string, accountId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, dateFrom?: string, dateTo?: string, entryReferenceFrom?: string, bookingStatus?: 'booked' | 'pending' | 'both', deltaList?: boolean, observe?: 'body', reportProgress?: boolean): Observable<TransactionsResponse>;
    public aisTransactionsGET(bankId: string, accountId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, dateFrom?: string, dateTo?: string, entryReferenceFrom?: string, bookingStatus?: 'booked' | 'pending' | 'both', deltaList?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TransactionsResponse>>;
    public aisTransactionsGET(bankId: string, accountId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, dateFrom?: string, dateTo?: string, entryReferenceFrom?: string, bookingStatus?: 'booked' | 'pending' | 'both', deltaList?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TransactionsResponse>>;
    public aisTransactionsGET(bankId: string, accountId: string, xRequestID: string, X_XSRF_TOKEN: string, fintechRedirectURLOK: string, fintechRedirectURLNOK: string, dateFrom?: string, dateTo?: string, entryReferenceFrom?: string, bookingStatus?: 'booked' | 'pending' | 'both', deltaList?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (bankId === null || bankId === undefined) {
            throw new Error('Required parameter bankId was null or undefined when calling aisTransactionsGET.');
        }
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling aisTransactionsGET.');
        }
        if (xRequestID === null || xRequestID === undefined) {
            throw new Error('Required parameter xRequestID was null or undefined when calling aisTransactionsGET.');
        }
        if (X_XSRF_TOKEN === null || X_XSRF_TOKEN === undefined) {
            throw new Error('Required parameter X_XSRF_TOKEN was null or undefined when calling aisTransactionsGET.');
        }
        if (fintechRedirectURLOK === null || fintechRedirectURLOK === undefined) {
            throw new Error('Required parameter fintechRedirectURLOK was null or undefined when calling aisTransactionsGET.');
        }
        if (fintechRedirectURLNOK === null || fintechRedirectURLNOK === undefined) {
            throw new Error('Required parameter fintechRedirectURLNOK was null or undefined when calling aisTransactionsGET.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (dateFrom !== undefined && dateFrom !== null) {
            queryParameters = queryParameters.set('dateFrom', <any>dateFrom);
        }
        if (dateTo !== undefined && dateTo !== null) {
            queryParameters = queryParameters.set('dateTo', <any>dateTo);
        }
        if (entryReferenceFrom !== undefined && entryReferenceFrom !== null) {
            queryParameters = queryParameters.set('entryReferenceFrom', <any>entryReferenceFrom);
        }
        if (bookingStatus !== undefined && bookingStatus !== null) {
            queryParameters = queryParameters.set('bookingStatus', <any>bookingStatus);
        }
        if (deltaList !== undefined && deltaList !== null) {
            queryParameters = queryParameters.set('deltaList', <any>deltaList);
        }

        let headers = this.defaultHeaders;
        if (xRequestID !== undefined && xRequestID !== null) {
            headers = headers.set('X-Request-ID', String(xRequestID));
        }
        if (X_XSRF_TOKEN !== undefined && X_XSRF_TOKEN !== null) {
            headers = headers.set('X-XSRF-TOKEN', String(X_XSRF_TOKEN));
        }
        if (fintechRedirectURLOK !== undefined && fintechRedirectURLOK !== null) {
            headers = headers.set('Fintech-Redirect-URL-OK', String(fintechRedirectURLOK));
        }
        if (fintechRedirectURLNOK !== undefined && fintechRedirectURLNOK !== null) {
            headers = headers.set('Fintech-Redirect-URL-NOK', String(fintechRedirectURLNOK));
        }

        // authentication (sessionCookie) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<TransactionsResponse>(`${this.configuration.basePath}/v1/ais/banks/${encodeURIComponent(String(bankId))}/accounts/${encodeURIComponent(String(accountId))}/transactions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
