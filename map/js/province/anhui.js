/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('安徽', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":340100,"name":"合肥市","center":[117.283042,31.86119],"centroid":[117.360447,31.762594],"childrenNum":9,"level":"city","parent":{"adcode":340000},"subFeatureIndex":0,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@TGZabBP_j}TkZiAgIILmIafYh@h^`clYZiH]dU~uRCZFP\\P@VUZAXHPGZqIGNQXBDZxZ|QL^XLNZP[vSLBLTJdBXhJZI`WXJPTFHhlPN\\Gfm^OR`J`TJdX`FNG`J\\fdF\\pPzl`bHpRx^TjGbPVKV^dFhG^LhCdTFdCb[XAhVYlYJXXSH[CQVUEAVLP^FNZKNNDG^JNCNLRlBCUXHBdGHIdFFcRU@FPSFelAXPfIbRV]LGVPTWrLjLRn\\L\\Tk^]D_N[CeDB`ETgPCXOJM`ePlZBfRPlLlbaXCTQRTFAT]AFdddQ°al[J[RYS_ASXUN[D_NYCaQINUJoFATg@kYBRSOQBQWU@eOk]±YaR[VgV[FOLCbaRY`bV^lREpR[ZmKUFfZJV@nXl^`]TY[aQ[gT]OUA_RmRsFSRDHCdDnUdBSBMQWMWJWEILaHSAU]LIIgMQF[GOgmBQQ]YCcQIe\\ErDFGCKKLSRFJMSQWsF[PIXPRGJ[WYSCSUBSjW@[KQWMq@ISPoXUZETgHiNSbYAUKcUaQKqO@ZUP]DQEIRcLa]L]PQ_QM[IMQcYSWk]gBgUMO¡gCINOH[`@OS_QYDUhcLYRHLOGSl@LEB_McTcBsJ[U[GWBSXeB{GMHUnkFMXGFMRA\\Y`PJnGTfK^PPBXMHH@jXFJYS`LVRYZHPCBRXHRSNX@lWPH^RIAM[K«DcCcOMU{e}gA[P]OUG[BiMWeM@[YY"]],"encodeOffsets":[[[119842,32007]]]}},{"type":"Feature","properties":{"adcode":340200,"name":"芜湖市","center":[118.376451,31.326319],"centroid":[118.13997,31.160935],"childrenNum":7,"level":"city","parent":{"adcode":340000},"subFeatureIndex":1,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@SgBoGCRcfGZN^]hibDh[JiEKW]DQLaMAZOhKVKjPJ@XWRI`mVaryÉOW]SQ@CTDjJXUVATKDAUWDoVDJi\\AJ{OaBIPYFcKUSkIBcRmLQSF[SHqb@pOQ_LSEIƣWKIJBTMPATXDNNoZDXgUWBa\\cDSEcgD]KgHcEU]ULaOiH]SQwGo_akOy[ocE[eIH_EMW_Ic_S_IPQn]HeM[kOGgSEIOXWJ_IYWgcASIAKTK\\u`Q\\EGcbMXNPK^FRNKr]@MTUN`CVdFF`PHN\\EPTBVPFQT@l¢^^`tdrThBfMVWTPOtUX@pN^TZIhAb[YgJUXGN[KZc\\OP]hEhD^KDWOiDQTaOIm@agemLc]REMWcDUdgO[UT_o{FG^A\\_Ij_jWrOhgRAHaNAQSiyMWDSVb^dtTZPV@\\KtVVC^YXCRPaVELe^BNd\\H^RJIbFPPKKXX^hJRCXldAH^OZaMUU@Zc^JRUGWzYB^HTdVBROT[FGVZTALRVYHQKNZWJHNTINLEbl\\C^[ZhEIZhhDXTAZSlZTXnPGEaLOjBn`\\dhjMNBPPNC`NZXX`PbL_rSF[XWt]VIXaRJ`PRDjI\\"]],"encodeOffsets":[[[121505,32056]]]}},{"type":"Feature","properties":{"adcode":340300,"name":"蚌埠市","center":[117.363228,32.939667],"centroid":[117.330324,33.107951],"childrenNum":7,"level":"city","parent":{"adcode":340000},"subFeatureIndex":2,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@nIFMNJbGLY^CZQfEHIKQ¢NFRGAQvcCO\\@tcOVIbkVBAUJ@N]\\EUQFIjPPMbVSNFR^jMZCDSfBFI\\ANVXNdhZnVVTG`PHRpBLTXEtHVVNExAhIN^TGtA\\GPLZlbHJNAVYVLXNrbLAzF\\dWjcPU\\MZWpFhYXC\\PPt`tH`RdVHfITR`~VN^CZ]nEPjLNJNWGEPWEK_WhW^ErjTLnWZTjSPAj\\JXePYEMRL^\\L^Z|BVLObTjAdmUMFLNdBFJoCQECbUHQRULIPYBMlXJ@La^oCWBERRfOT~^ZhFpNZ[DKGkCDO\\UGGSoAWIIiOQkH_EA[]IcJOSTcCcRE\\YJSdqLUTQD[Ki_WD[PqKUXkNoAMFSjmrUs^iJq@U^¡LgJAWUamiK{Ie]FWOCWPETSUmOKeXDJ[@YRk]SiXDlOXWEMYEKUUABUxKNOGo½ROF[cSA_HYEiP_^]LeOu@Q[gGQFid[JIECyJ@PsZgBiIOMS@[\\]cKF[[ESTa@q]]A]HO|YjOZUBQIcQJEKkD@NQEALYGA[MSMgDWMg"]],"encodeOffsets":[[[119538,33719]]]}},{"type":"Feature","properties":{"adcode":340400,"name":"淮南市","center":[117.018329,32.647574],"centroid":[116.773391,32.47172],"childrenNum":7,"level":"city","parent":{"adcode":340000},"subFeatureIndex":3,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@hVhAl^TXdZNR\\JN`RORK^b^dKJQRF^CVO@YrPRLVbLdBVaZMTGjShYFWVOpJTr@XNLR@\\iXATTVDZTXI\\QHWOOJE\\XtTRINQEKTLLDEHqC[FJfdRZDR^ARhnHPE\\NRJhKJV^TBbGJKXFXIXNNRTAAFRPHF\\_hE|iEVU^BPlTLj`VSN[BEJeACTYDiN]EQTMaUONiOEJVR[FM^I@BVUAalUJPsd[@DPudBRQHME¡LRGJeFYR]DKZaHMIENmJ}RkD³FƱÃhKU@qIGMeBKhgRUBgAMO_HW`GbJp]KkROKICQPUAyIYD_VEC_SOBQ`avEFHZAHehIT{LKGMFY`EA] HfKROLkkS@AmYu_JGaKSIXUKOIYF_n_Z}FkJkISLiYc[O^YBOOSLkXWFcIcPebgIUPsK]rO`Ave°mVCHOCU@PW^BjXtFnO"]],"encodeOffsets":[[[119574,32678]]]}},{"type":"Feature","properties":{"adcode":340500,"name":"马鞍山市","center":[118.507906,31.689362],"centroid":[118.369758,31.637138],"childrenNum":6,"level":"city","parent":{"adcode":340000},"subFeatureIndex":4,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@CZU@DjNZQRH`WDJPCZSXsN[CIQW@MRMfMTbTs`KIa@MQBWWqIDSMCXmBSGUHaB[RHTIXHRPIbZDRP@bZUNCROHoBCTSJLHKT]BQQSNOEOScGGL]aMLIG_VO@bNBXKLSIYHOXkBHbf[D_NQPBVJVgJYRqRYXaBUVUJJ\\AZVVE^VBHNAnXN_\\P`QTwYQS]GcWWm@W]KsaUgeaDaOIWUOoP_GWDW]m[CoWEUPcB±nqhYHSK[m[KQKiXqOSHU^KQUJaOeBWfkTEEOV@dQEEJcHGAcWGDVkAKQDMIMH]MCLMMY]EKOBUVFRU\\DTGWWZIZkCWpYMMWCBSNOASJIXLƤFJKTR`oPa@Gr\\TTEKRQnAdlJVTdLZEJObA|PBIj[CIpUXCBVLCBSVUIWCiDSR@^TPXzÊbqnUJ_XQ@WOILiLUPgBYbNRK^CLXjF\\ICgja^gM]HYdeDQpHhATt@TJZAT\\NB\\nVxRZVFJQE[HE\\L`@|RdbHCf|GpJfN`LluLSEALTZTEj@"],["@@QYvKFfi@"]],"encodeOffsets":[[[121740,32276]],[[121719,32276]]]}},{"type":"Feature","properties":{"adcode":340600,"name":"淮北市","center":[116.794664,33.971707],"centroid":[116.74441,33.720047],"childrenNum":4,"level":"city","parent":{"adcode":340000},"subFeatureIndex":5,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@\\YAO|@EmxKF]`U@UJ@RaAYKCIYnmDYzGTaPC@OUAPcaGK]FMG[TKJWK_DaXYjC^JVRhDVHZALMpElFZGnopCVU\\KQOiJaUuHIMOFYA]Z_JF\\IjcREhHR\\v@fPLTCPQHFLOTVDHZJBTd^EBL^XQNJ\\GNLRIJ@TOTeBUR@RqLBJ\\V]\\VZJ@VRvkC_MudQ^IjPZH\\CVH^NBvMVHXAA|VFMDRbCMTCdRbAfDpN`BFZpLX`MVRZO^@ROHYG[LhvEJJRSNDXGFgDDLC`\\XX^cAuFAVgPKA[_]QoRIYYGIMW\\D\\YSLQGGKLiIeMTYHBHDMHWIEHgCOI[NUKaP[FmEmFAYHQp_FM^GD[SULeOYJs_G_N]R_J]@QME[FMWBMOEPWCGS_DGOaJUO[COY_AGHWIOUBYR]m"],["@@MBLfT`NHH`MHJdMLWKHUIUOOYLA\\[SKcNB_UDoXG[YDXMDG]VchJHTPCTXRK@V"]],"encodeOffsets":[[[119188,34594]],[[119841,34987]]]}},{"type":"Feature","properties":{"adcode":340700,"name":"铜陵市","center":[117.816576,30.929935],"centroid":[117.566978,30.888245],"childrenNum":4,"level":"city","parent":{"adcode":340000},"subFeatureIndex":6,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@K]KG@]MUH]KMUAYNcEBkY[C[LTTµAGobUN_`MRJHOTFHSCcGUOKQC]LgLI²vjXpJxBJGpOzGh@`NPV\\~Î|ÎjrJrEanDl`RGJUO[XQCQpFD]ZANRZFv\\H^vhXHfDZLh`PCV_vv\\VhPVcdCNXQFd^nKhfbn@PJSbCRPjCX]LgCgFO^[PYdLM\\WHIVZha\\gBYJ]SoMW@sVOPSUXeNgAqSsc]_]k¡S@ERUOSAFOM[OGE_cEDUM_SV@Nq^LQM]EOLWMaNHd[F_RYOMWKK]{RwYCYWAMRJHYrOHWGYBUVO@O[YEQD}vcVG^YjkZ_dg]"],["@@MU_UeMAIXWOWMA@Q`@ZKfVK`XJT`NBJPCdIJYDSO"],["@@b^S\\UBICcLWOCO^[tG"]],"encodeOffsets":[[[119968,31819]],[[120113,31219]],[[119768,31364]]]}},{"type":"Feature","properties":{"adcode":340800,"name":"安庆市","center":[117.043551,30.50883],"centroid":[116.451502,30.574825],"childrenNum":10,"level":"city","parent":{"adcode":340000},"subFeatureIndex":7,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@YCYDCVQZcHBE^gYYPYDUS]IGIi\\K^bdPFnDdJhZ|XTDKRLNXDKXXZLnNAP^V@DZZ@XQNHRSPNB\\GRCbKJAXsH]\\DPXPdKJDENRPRhRBPZPBFT[NJTbX@^XOtFTdLBKHpBS¶SKD\\Z\\AldFZMVBLNG^NV@^LHL^g@eZJbKnJJBhYjSli~O`aAYbSHaVSBOWcWc}SsMKEkkCEQqceK]F]KIUBS[E[_SEccUJaAQO_F[G[aiJKPcFWMMNq^Q@CMcYEMiJMMGUa]YB@^HRAXJ`Vl\\dMZDrIdFNEPSDIOe[WeMAIP]WWCSSmFK`afgAaHgR]UEUWMiKMaSQs]MccMk[eGgNEf]\\QDY[PWGAOuY]i@MIyZABeTsDYBIMSF]GaYcKKUcG[gCwSQQUGCS][@Y^YDcM[VCAQ]MEUa@]KSRc@SOMmUkDYIQTOFSnSBQXMJeMQVcJCHTjGRYTAZSGQPUJaXIJY^SSQWqFYMSBMjQJ[tIOOMFSGWcQA_eVmjmCSUQBKdQbLhCnSHGHqLWdK^SJY^Edc@YOYBWLcXeVMFaI]BgIS@QXiCSUaFyOWH[PKfolsRqCFqPhBlAfUvPAhNjVVj`bPZ¦ptbZD@`HVPN^LtLBt^T\\^VLp@hKaxFrbtd~PtxxdN`DbQpSfMr"],["@@KJKhD^LRVPdHDGTSEGPQI_NM`aVLKAScsEWP@]aWIS\\MESOAOYQAQgQOFMVAT[a]BWLIDaHQA[OMQTMGWRY@CYU@O]MBKmWYLWWCKMLQSC{WgYcImCOEacL]j[HJ^JVTZCZOhZF]GAdRYDUZCZDSrKtHP@bRJ\\Ul^^Fr`XZpf`JðBpGzazQlVZXV`JfD`RtIt{AT"]],"encodeOffsets":[[[119710,31086]],[[120031,31366]]]}},{"type":"Feature","properties":{"adcode":341000,"name":"黄山市","center":[118.317325,29.709239],"centroid":[118.076088,29.904836],"childrenNum":7,"level":"city","parent":{"adcode":340000},"subFeatureIndex":8,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@eT{OqkC[HWXYmYEiKOgIeBmQ[]HGIaOSmEQIS_aEonGPHdILU@GMM^@X^ZBPgaJQLgjKYFSLUQ[F_XDTSZOYT_diNAhE\\]JGLAbHTl\\ZB`RQAcT\\NDXOREVLVSNJZgDEPWGSDKbYLa\\DTO\\ZDHLMRUNALaBUGDTgkZIcAKY]@YIIKcLDpMZ`dFTRLYVyP[CkWgIcDC_\\MGWgKm@WM{DWXSBW_[kWXSXm]GNGGMO@YSJUUI_ADosGgKeeJazOFOOcK@_SU@oegMEUaUJK[GF][BMNSAEQWM_ZIhUC_WWCGQQEVCC[QIKfQ@GRYWN_RFQSNoaeCF]][CkTcAOeEuU]DWM}SMD­UGQHV@|WNMRyKiM[P]\\CNI^CJ\\LHnHPLJCTsPQjHPtfL`BL__J]luPCZSDqK{nwhQnH^SMqVRSFLXG`BZMnNh^hR\\EP]TCFOBgPWbMzDdRdEr\\XF`CNOnQXAZO\\A~RfI``VJhOTVRJV@zWPmSjENQr[RQBSacVc@aQKN[xMZMXBJUX@\\t^H`NNIZDPIVFJKrD@zSzHb^BnmXFjtJPRElD^KhTTMjJbRDrERLn^^pJ@frzLdT\\IPMLBxvPbfjdFNZhbJnIfORFrLJ\\ANL_RJ\\XHXMpfLNpHP@bMfTN`GPTZOVAGlRlO\\FNIVPJJXYZNVQTSFENEnGN"]],"encodeOffsets":[[[121722,30824]]]}},{"type":"Feature","properties":{"adcode":341100,"name":"滁州市","center":[118.316264,32.303627],"centroid":[118.107896,32.543514],"childrenNum":8,"level":"city","parent":{"adcode":340000},"subFeatureIndex":9,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@ZGrg²mdAVOXFDpn\\X^XC`HpOVPJXbPbChfbVt^L@XXndX^HRTxZPJDZT@VXdAPLnRT\\bLT@IZLRNGWxBZTHHX^IPNNEXNVEZLLGdBlLNEdPptPhODORVhEVO@BRdXb@WPJJ`AHTSHDPMDRLKTF`QIW`PVF`CTLGP[EwLIK]EgFAL]FAj`DTVEPSFH\\SP]Ji^LnXPbNHGlIT[f^bDlMAbPaH@EdxDBW^MHTZJfKASTKdDXbVB@YKERMAMlIPNbB`XhJDK[QFcUExOBNjBHSpiHYXUd@TV^HhEHafaHgLMXEV\\r\\\\X\\BKNPVLdXRATWRANlRDpTLNk`IVF@`V^UFEPFXW\\FÆEN@tOVSCnG^ÓEQHaVSb@huMGNJ\\TBKRDXIRWH_AYg@OMYB_JWGEVJLWFeKaD@UMCNaSICUeRMGEQLIGwIINKASiMoFiPKKJ«SMBiR[JCL[AMgIYSaC[NRGJ]HMI_AQWcC[KaV]AsK}BKEqJQdwsYCWJoCOLATLNA`KVaJ]WODK^[BQNG^XVOlF\\WAIXkAYOKvIPMFTXRXbXKTBaZObA|GfM\\iDFRZAG\\kJHF^G@fWCBPRDJEvSbaZaNSIWcF]UW}Q}UcSEIcAKMNEnVBcSiPaUK{A]Y[KK]NQZFfOIWi[OBiTYSmXSKqi]FgX`XFLOXHFMXMIiKOmFY^]DUM_}SQeJUGQcG__sOs[OWDgZoEYX[NOVidcXE[ByaKMqKWZUBUIMaGYkOK[HsBSHM]gJwBMFUUsGWFKSoAGQ_OSHUUYmcgWMMUTM_UKikSAOV]FUjF{`gE[OGEQVcCmDcCGTQtEnQ`QVB^PhS\\bRZ\\^S]_Wk@mIUeYVEnL\\YQFokQU]aZ_bQDaPK\\EhU\\UbQ²Zl^fPV@RXRATPAQlZh@BSpEVIJMbRZD`M\\CVMTW`BZT\\Q\\IbkR¯ccEc^BBSSERQDSbWkakKQOAekYfON_PIDWhOFSA_fC\\D`M^Cl]"]],"encodeOffsets":[[[120783,32672]]]}},{"type":"Feature","properties":{"adcode":341200,"name":"阜阳市","center":[115.819729,32.896969],"centroid":[115.709049,32.916536],"childrenNum":8,"level":"city","parent":{"adcode":340000},"subFeatureIndex":10,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@MCK]MHoEcSSVwMUTSO_YcHMQ]CHydkiLYMSJCE{SCWTAQO@FMEUBYZaaqFMtBEQRGBgbEKsBYYFWEC[PYAUSQBa_W@KVM}SCoL_BiQBCUiLGKgHSSY@]YYPq[Ig]GCHYEKRSKeHUPkJDdURYHEZOHsH@QMM_COMHYQgAUbGL[IQPWBY\\SWQSAoHTgaOCQVUjCTYXKL]TGRLfB~A^KXCB_QCDOGh@XOdJrCDYZOJ_bK^DPGHU[ENWK_NUTIFWeJQEBUNKUJKIeHMIWNICW\\LMNHHXSCg`LUSBYMPOE@ULDA[TOcSRSXGdDKQLEX\\ZFNGMKZOnZJSJPLIMSZEUCEOPOhFHJ¸T`LRCB]GSnDHMRCIUvYXBBQRCH[LEXsDB@AACL_REAK^ET]jEBM_MVInbfNnifXPXHCAeVBPnJPBXI^jBJHST@NTPg`HTZJZ^gKePD`bhbdAApLN`Lt~HRr@ZQRH`h^\\|CtWRcLehQjC^IT_ZVgdULih@R]^|ZMT`TGZNRWNTIhdVPv¢@ZUvaZIPYZBLTHb`IZvBn @lTKlQPeLGB^_FEZHNKLS|gJGfYBEGuF_bARTPD`UFC`JZBzOVDRLJQPLlo^aI_HGXP`BNONaDmkY_MW@\\EZYJiA[HMjYTUdEfDPWN}DVyHEJPPA\\MHF\\GTQJuOKFPX_HkVTP_JBJRLhWFk@ITVB@dgFKKBX`dH\\ShKfFrNN]R\\O\\OHETRpA`\\FCXMHDTMJGXYbExDbKRcBq`UBSZ[HGLcJCHyXmCcGIFsU"],["@@CABCBD@B"]],"encodeOffsets":[[[118416,34392]],[[118283,33249]]]}},{"type":"Feature","properties":{"adcode":341300,"name":"宿州市","center":[116.984084,33.633891],"centroid":[117.213919,33.860274],"childrenNum":5,"level":"city","parent":{"adcode":340000},"subFeatureIndex":11,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@nEnF\\EbOVL\\MPJhDFGXJNGCAGZGNSJfKjLHHKRZTC[X[JNZHJZpQ^R\\`LBhOBUvEdBW][WD_CKhCHECWTMIQFIgu\\KZHPG@QP]QYNUW_oKEYAM_CoBeQaDcNSaDCQNUEB{WBUGuNMAG]DUG[OYJiR]vc`NlDQu@UYIU^[[UAIrK@QVQfAPS@SJIKQHMI[RM]WAK]FScIAGYUCPSEKRGDOKS^K`]jOZF`GTB\\dPE¾QHpMPwLAVVBLVZFFNWXkPWCTjl^ZQ\\@CIfWPLVnSTOFDXXP^EJfL|njVbBXhI¢KV]r@jIt]VnqTiNEpBlMVWrL\\OXCj`\\LRCVSrKTcZIF[dQdDTSPdI^JB\\`FlGPRJjXJpBHTVHP[ClDLHSTDJrCVJnjERDRUbJ^DhJd^`NdXA_A|B`QTR@TÄIpNH¤I|Hn[JN^bBPRmL[GgPWXWCDGOaOcGFKUCANmBCHWEUFMZUWIcYIaHIL]EEMHQ[DOLkLo@SHG[WU@]UcXEXQLDRRDPXNzHlKVHHFhA`NXAVILYBsYWR[xch@dS`RfIXqbY\\YHMEPYAWMKWESQYIMDYnWLCRF\\ORmbSBISoIaSsQgESHKXW\\aLLVib[OoHQacFKPU@gYCYVIK]@UNiRSAL`UAaH@`MVcD_`cBcPOEQ`MA@UQLSWODGSgIUdH^NCCW\\ZWHCp`VMALd\\TB[ZKPPJVGVSBCXWDoZ]\\PxOXV`F\\ELeJ@RPdoNsVUDuKaUeEi@mpmd@PQ`[R_LkJ»@`£@KHPJ`GNNGVOBaVmhgCOFJTaHa\\Af[^AV{L]TEjOUIODCMkWaASg[@SN_BMMGcQAM_KCK[[FahUFSC@iKgZa@U[WWABWcq\\]H]v]VWBOOKHOvO`D`KLSXCZazYzSNOReUcTSFJfJXBVQbDCP^VVgTDphnL´Y\\Q@Q]][SUCHWIQHo\\SLaiQSSAqMG\\YCMfIR]BOZSGCVePIRg"]],"encodeOffsets":[[[119403,34838]]]}},{"type":"Feature","properties":{"adcode":341500,"name":"六安市","center":[116.507676,31.752889],"centroid":[116.23409,31.659225],"childrenNum":7,"level":"city","parent":{"adcode":340000},"subFeatureIndex":12,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@mPsEiW]AOX@DVGPUD¯nuf_BqPL^OtJVahOfJdEdWXKlPTAP]Z\\PZdKjJTIlElY~m`E`JZLPWVJYAZOYJbuYV¡@OucUJgMSQXYMSHS_YN]{Q^g@KjcVUhYS`]JiDgRKfQdsX{D][_gQGcAUUmYIc_OSQAONFj@BMRQCaQCQWfCBcGMTO@UToAcBwLGD{MURCD]TWKeCuVqD_ROP]CeQIGLiVMEWWMKSLYQQRGAaNKSKASWyE]PMH_EU[uKECYEVGTSBOGgS@_aaBUEOZ[YKH__udiPIIkAOKGYgP[CMPWDeeoIaaeM[SIOcIW]kHa_gSS[CUMKZcC[¡oAQUaFGEWYkeUOOWGKQLqZgIOCqSYh_S]OIN[SOvKLK`ZlGP}XDGRKNUjBPGLLRI\\[TcAWD{h}taXLNptXN^TTRDpGnMxuZk^URoLKXBb\\^HbIXF`\\ZJVKL]Be`gNB`[^IDUE[NI`JnKTMZ@HcJIDJz@N^jvZBPXH\\OZRC^[FehMfHl\\dNNdt^TRNbjLXNFV^VhQbGhBbeL_nETTXD^XJONBXff\\JPTCFOEMJcCqNY[cUkI_BWGQ@]ZAb^HVNNjIFNdZDNR@r]NMXNdELOjI\\b\\H`ERPbBVIddTF\\`\\FATJV^L^EfLrdFRlDFlNLTtd~dXPXTAbUZZ@\\fNNXAjH\\PVO^B\\hf~|NVdPdD¬C\\LBNQJ]OGkXW@MQTWGAQODYGZUQ_KTIZWE@iGGWNOA]OeLSmHI_O[ZQBENWHENmlGVHNA|WfATHXV\\I\\AtSdNdA`KFk@HTKPQGKZgdCVRZ`PT_@G\\MPDJ¢hNP"]],"encodeOffsets":[[[119574,32678]]]}},{"type":"Feature","properties":{"adcode":341600,"name":"亳州市","center":[115.782939,33.869338],"centroid":[116.185025,33.435253],"childrenNum":4,"level":"city","parent":{"adcode":340000},"subFeatureIndex":13,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@kEWGWFeICOWJQ[oMkicA_LEYmJMCo_e@[tBHW\\mLSb@PqAAZeVNTGNYBBLdCBjOHCTW\\QA@NkJAXYJYAGbZ~J`KXUZuhBMF]AKJG\\OHSE@uq@OR@fYPa^MR_D[RDUY@^}aKLc@YQ_FK[DUOEiEMH[ULS]EOkNEEQSEAqQGBYMKEYPOUEC_Q@@YVBNI`LZQ\\A^RZQFuSIAYQGNOC_OioPOJcQCONMJYRIZaLYKcVWMAD_@]`sPM^VtJEdHnDzWDGdIHK\\GTYVAr_dALQCaFwZaHWNICSNGDW[EB_QoFSPGP[Q[^MMEqLeTgG[_cAWLLhE@cUAJSl@XEKgIQA`IOSlU`GOWLEvPRIHSE[NGB[OOFIzGU~CXMCOFeVcZSNi\\GjBZIFY[X@`NZnlbCPMAhQVghALNfJH@rLVÄgƲ´ElC~QNhCXNhNTB\\ZHBKRF@MlCFLRIJdARYViP{ZGPB^^^@rSbFT\\\\LE^d\\[T@N JPAjYhOtI@DzY`B^EZNPGJVvIbPjR[LUVoDmpYHkEoFKNYBUGgCUQ]IiDWZCbL`IXSLH\\ENL^bHOdVB@PODSbyHCZmnJZLDBZQbI@@V_VE^wLFn{@BP[Z"]],"encodeOffsets":[[[119188,34594]]]}},{"type":"Feature","properties":{"adcode":341700,"name":"池州市","center":[117.489157,30.656037],"centroid":[117.371465,30.282082],"childrenNum":4,"level":"city","parent":{"adcode":340000},"subFeatureIndex":14,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@VZLZCpXTvJplhFNTJ\\pdCTNXjzRTMBGbQBghqPiXi`J[`]BEHp|S`uuU`ODg_YKeCWGugG]u[YEMQYBC^oEDRWRP\\IVQHk_mCFbqqIÍiÍ{[}OU_Mg@yHoPIHwAoIWi±uBS|JsQsC_²TPZCJIDcIOMAS_WIL_eUYL_@@RNBPXWXpkUyRyboHïA_IoeWYq_]Ek][VQI@aGOLsTqNqTeRoCaM_wcswOc}sqaLOV@L[\\IHU`ovTANKBZRApXhWXgOm@OSuks}ue{maQEeTaWKagUck_MYsrCJFD[B@TBBMYCqOEW[UW[@OfW`[FOx[JsRHTbj\\TMJFXGM[BM^GpChJVNrtl\\P\\fVRhFxIRDhV^Fx`Tb]`BPvh@RM^\\a\\CThHdfbNLZIlLP^PzVXAdLGHR®VNC~TXN^CvVFPfdBlS\\D^^EfDbMpRTQEM`ZXHQR@LeRJD\\UDRFHRXD`XVDJg`YXNFRTBNM\\AE^\\HILbVVFhNpfV@`TL@PdEPyPIbffhLtHCp`BVJIVZTP@HNMH^HWnWTlX`\\AXWTCXN|@XLnXhNH"],["@@qDKQ]KFQbDNMrPDPA@MV"],["@@±IeU_YWoBJfN`VNV"]],"encodeOffsets":[[[120802,31245]],[[119500,30421]],[[120113,31219]]]}},{"type":"Feature","properties":{"adcode":341800,"name":"宣城市","center":[118.757995,30.945667],"centroid":[118.857477,30.684955],"childrenNum":7,"level":"city","parent":{"adcode":340000},"subFeatureIndex":15,"acroutes":[100000,340000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@FX`JBTPXBR_A_JSGSPNVXFfTVTJITmJSrUJPNWzF`AbhPRPRDfZ@LhPJWRHNGXD@_bIr_h@FKXCVVbPjYdKnALIOZ@JTbCNSNPTrKJP\\dCZFXRV\\zP\\QN[vLVR\\HFNQRmBIHDXKT[AHbE\\[NCGTLhO^CVYCue_CUPBPgHKbR^hZ@PUNAP]ZXXPKdF`CjLVRVlTZXDd\\NAXLJKHiZ_lB^XH`\\ZbjEJPKRBhXH`MdL|¦NH^@Cp]f@jEJPnbTDfChPXhZRVPFT\\ExHdKlJR^VqVA^SA[ie@OJC`WX]NUTUDSGgPQCEQML_CKP_Z_JOQ]LSIC\\bNUJ_UORKCKbJj^OFGdU\\MC@gGYQSGJeDiEwYKVWBBIWEEJcJETUOOPFheNIMeBOcQAS[WAYUC_gLWOWLYISJaAOHWOaEEN@wDSJqMkJeEwSILaOMB[VChefHg^EN^QDzMAS[YBSIs@J[CiOQI_bQJW^UXs\\WTE`qaK_OWWMYD_OMAONMgi[cm_iAKPFbOHWmYSTkBYWSgCgJYgF\\YD]k[FaMKSJGMXIMYRLZGQUBKYSHU\\EPSAQcUGSA]yZHXQV]IYdV@NVYb]PGcBWkQDgIW]LWOLEOJaQIG]c[AMf]FKbUQOWD]ZUDsU[LU@YOScsa]UocI[MSgEokuIWSDoKYUY`[DdChJlX\\DzOZUQKES_cNYCodKJLZJ^@LZdBYJhlCSVHbABKVMNQGKYCP[CSb[ZKLaTCXHFOhCIYTMKUFUPQCW[MdSRB_QYAk[GSBaHK^IF[BgjM`cZSPTYCS`W\\EVRTKZELhiRKbIhAO]Y@WN]HNV@JKGcHOpmbFT`RJnFPTJbGH\\^nRfAhJLPFjZZnXW\\GlDr|PfS"]],"encodeOffsets":[[[121722,30824]]]}}],"UTF8Encoding":true});
}));