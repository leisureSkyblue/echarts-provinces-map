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
    echarts.registerMap('宁夏', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":640100,"name":"银川市","center":[106.278179,38.46637],"centroid":[106.347233,38.2883],"childrenNum":6,"level":"city","parent":{"adcode":640000},"subFeatureIndex":0,"acroutes":[100000,640000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@PqVunoP}RePyHb^QL[baZsNO\\ĖÀ^TÂVdFhVĞifBhGHVaDRZ@\\q@L]T}BcT_AIMeMEZLNEL]FOEUBOLBvmFN`yAeL]IQJ@XWAcMAPoZaCW`mUUDAJkJwBQFSTGVqD`]XgDwJUc_WKCMScUU[@KSAaWUC@YRMM]NeCKg[RoSYWS@Yg_CULgNIFSNIEUUEGONAYa[F_Yk^OKWAEyNe[mNkTUJ[^[PUYI^_bI_FI}·v]\\tKPXzS^XDPh`AMPGMCJOGMXELL\\ECMdMBqFAXZXFXMjCCOdQdEBQT]ES[QIcFKbMZoR@STxC@qO@BULIP_VLRILW^U]aNM~AB_lCBYYYD_EyAUaLEC[TYVM@GVG|EAKh]bQ\\ge^CaZ]b]sQWÈCWJ\\Æ_ºEBlCNK´F`ZtV|fJvHUOWbI°H^}CSEU\\KpBnGFTdZj Mt^IT°IpL`VLEL"]],"encodeOffsets":[[[109389,39080]]]}},{"type":"Feature","properties":{"adcode":640200,"name":"石嘴山市","center":[106.376173,39.01333],"centroid":[106.517117,39.007544],"childrenNum":3,"level":"city","parent":{"adcode":640000},"subFeatureIndex":1,"acroutes":[100000,640000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@ĜNV |Vbflbrhl`^vf¦JPXÌBRI|YLO@KTQLuHqTUNahKl]vO|{jFdOTDXZrG`Jt[bJZO\\QTuDGPeOaBoScSFYPyT_eIQQKcg]MOOQ@CYOWAQOINULqJHyEM]Ks@cKIOD_NwCeB[PeQiSKmS]HkDyLgh[EUO[a[iK]][G[UgE_JEOOVUCWS[KAOYCSSK[@[M_gyeUYF[\\adBxIhC^W_rCHUTSRExAlIBIVCnVX_bDpYBOdNXB@WRI^JfKzBM_nEAuPKVAPF^EFKKMFYfNJN`BdS~A^SKr@@[QYbCUHGAgje"]],"encodeOffsets":[[[109223,39528]]]}},{"type":"Feature","properties":{"adcode":640300,"name":"吴忠市","center":[106.199409,37.986165],"centroid":[106.532262,37.465858],"childrenNum":5,"level":"city","parent":{"adcode":640000},"subFeatureIndex":2,"acroutes":[100000,640000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@Uqk[cMicO_MÅZZc`_jsVcaW[WkCSBiPoDUI[ccKSQoWU_OgI{YeEMHLUGKq@M_HFJxTdBjLrGh@nVIRBhKRV|GfFDW[YAOeA[NGP]U[lAL`jtF^dWvDXI`@NKZICcDYGGYBMOBSIATQjI`cgGMMWDKU_SG[OSSCWHME_BCK^IVYKCcUEULwKUSTcAIHM_eXCbQV@XK`[EW_YóNHEOaSgIiOjBW`UIIJYVEOMLMWMIqAITohT^@PMbOLE`QOeSecqeiAWIY@ZQDKVI~@dM~BP_G_NkPW\\M^G~uNI~@LM¶ûNM_KC]SWgCK_O@MaNS@f_[]DgSEAkPs`VLIn@hP\\MHeTFHpbLHNXFDTPJdfCHVP@JinlB^RDNRABQjYGSVGDS`S@YHI[WJMPFNI\\DrcF[C_dWV[\\UGcTkz{B_X[BYZKhiIcLc^Q^RZDbC@dJJ^FfKNXdIFO\\JNCTY\\C^hJERPBbELHhJFLXUpGpPFd@lGfjNPKXFM\\SXVJRTdDFLfGBZZCRJbgJP`]Z@YXIdNBJdA`LJCV`R@Ta\\Bf_RZROPNLUPSGOSSZTZO^[FQTaD[TLV[bA^TW~sWCVUXJA`HXZI`EjHGVPrK\\bIRT]bOtBLUfIBQX_XPhMHSjPP]PDXbVWTFh@AYTOXAH[RKH^QNbjKTJfT@APn[`EPS\\MfWXDlcTVTBGZR@ETWBUP^VbI~eP]rK`BWTLFZOJD`IHLK`JR^UbKbJPETU`VTBZNbHhDVHPQdUzu^PtQVAOLIpJFd]X[p|BPLbAXM`WhaNlFNfLbGBZ_vi^QhKvLZEjZ|TAxD\\NN^Jt^\\VZhL`RtGPuKWFctXGrDXJFVJFxhGF`LI\\FLhDpQNh`PvCZRjpN|Hh@hVQAKLRLDMX@T[XChhLTH^TrC^k\\ÛlvyrESQ{POPLZpUXLere^AL]VYdoTiBYJ}PSNOZ]Hmj_CmFYLUWEWKEyBII]PQEWYkJYACKÏVTUHuJSJRFKUKK_Jo¯JSs]NYiScHEAmLoV[TF~DG]J¯XaVPGIue{sUYE_L³DMAk¹FÅ`I[XÇDRXta^Y^b]Df[haRg^BL{FUH@HUNSZD\\KFVbzB`FZCZZAkDA`}BMN^b]VKXQJUKO`KJAVP@@rwDTSQ@YpaNELJd\\RFTS^ARcFcRDPiDWNWEWYEBArcNDN[FKKWFHNIPNDOHBNg_CO]WyTOWsL[u^~¸EJ`aJ]`J"]],"encodeOffsets":[[[108394,39184]]]}},{"type":"Feature","properties":{"adcode":640400,"name":"固原市","center":[106.285241,36.004561],"centroid":[106.186077,35.918037],"childrenNum":5,"level":"city","parent":{"adcode":640000},"subFeatureIndex":3,"acroutes":[100000,640000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@JEBcNQEMLWZ@CUNCEQJ[RIETVDNjrlXLHXRFDWLDJ[`E\\DbCNJUOOTWDSRMZAZgCQ^YT@VUCUb_bCHSPAXTMtPDVKpTVAR^ZF^X^FffEPL^`NMHK\\BTGLBTR\\KZ[nL|EFaGIDCj[PDNOFEP\\VG`TvfGOtIHA`URANNNUJI`MAEv\\JdrnNLX~FL[@`E^Q`CHHCXN@P[DVJFHaRW`KFLVOZjLDX]jUr_bDARMCJzLENJJI\\Bp]TPDXLDKRTLNODLd@ZIDPFRI@UZAH^NMLpQDCVKHlINRQBDLOZWGktIlTKEXMCiJEHZPA\\VE\\XhIAZPNZKRNNCHRM\\_IEOaFKLIbNKRFF[NE@^dhRFPjeFIHFdVHBhCZRFCTVEERDPMPMBEPL^KHOWOBJnWQWNLdOHOXOEUZGCOPAROTaFE`GNM[KLUEEOe`KQOLESSDk\\KPKIUJEIOPM@a]GMKMFCOKBItKeyTA^QDAeIGOPGXIGcNDeK[UAGKmbaBe^KZMP@NRFdYDMVU@dYVR^BFX^KLNKFDPYBSVWE@rXQLZSLFRb^FXIZ_HOTGWMCM\\]JQCijWGUJQQ}L]KQUUBM]eKJ{THSeCqW@]IOJU{q@eSoeKWUaM]@kS]RKPM@GM_PiIY@W]{LIMBSQEGOrNkHkD{`¥Ja@EMDeQK]gI]aSkgKJGZQD_GSDSKOFnfUhSJ[MiDeMSYSC[FwlUZSLO\\QJIb_N©gg]iUOC@K\\wVOOkODFMQmICeDOLOKUCUJoyOHQI@QYGccJSkAIaDYOGDiGyMSVWJi[IPe`SPFZORBXKNWMOKN]SPgEOVBW[TWVd\\ZPABMXHFJOVBTQGqVJRCHcJKxOjPPIRL^ENUO_HUVXIbvADPpL lXYHRLABQXGJJjKNOXPRAB[egSDMvS_MO[G@]\\D`OKXQVHNCC[RERVJGKYQAZ[bENOOKjifRP]GINMIUXFFcEKDmVGRjLHNr`I@RfHVOG^IVBnKPKXDBSKET_TBRFWHDH``AJQUQiEJcEWHG@IC@"],["@@CpNVIH]GUBKIMUKOBUMkGYQUFaCOWHqJLL`GFNVHJOTPdHD\\TWLFCXRTdLN_ZC"],["@@DVUN@WRK"],["@@GHDQD@@J"]],"encodeOffsets":[[[108618,36301]],[[108600,36303]],[[108619,36271]],[[108620,36306]]]}},{"type":"Feature","properties":{"adcode":640500,"name":"中卫市","center":[105.189568,37.514951],"centroid":[105.504008,37.016864],"childrenNum":3,"level":"city","parent":{"adcode":640000},"subFeatureIndex":4,"acroutes":[100000,640000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@PRWRITcAYH@RSZFNziJdTCVSvKVFHRSRlHWV_RF\\CTWVEKgIKGaFOAFQgI][DSZMD[IEPcJMWeL]EII@caDYC]Q]RKdJdgjYLAZW\\A`y|SlHd[VU\\cXD`E\\qd[CMJOEIN\\XGJ@Z_TCTUHHTiZARQBCM]QkAjm@IUODGceOICSWEGMaKGoSEGf[NgOm@KJ_UOtBlTFCh\\^e`T@bM@N`PDLhTXD^`LMNµüKN}@MJ}v]H[NOXMlH`O`}AcN}@UJCLYRZ@XJjBrffdfTRPF_PKNa@OS]pgJSrBJXNKNPNUFIZJJ_VAXijPhJbTFPGôM`ZFX_\\WLU@aRWDfN`GBJSdVTxLVKVFDd LUZ]JDL`ANFXGTDPTH\\`TLVXCNNhH_diJSRJBATNPZAHHCZDdYJML_@WJuCcXE]isK_kBV\\O^MHB\\PfB\\ZCXeE{HQUgLQAJmUg@qHiKcAwSEIGUM]@§GÇAgDuVcF_E_BYEGQ@]MgCaMm[mK}[qGoiwaMąMmK@Ww_õOýQáGģGEGUBQ}Ec_GeDaYiK[JgM_[@MVO NjCTNVDfVP^o\\EfF^Al\\TC\\SjN`ExCLMXEZHhMnIQOCWOW@MN[U^JBWKSODcWQ@YOAWUOS@WPOAIMLKEOQ@S_EgTg\\UDMXG`DTJFGbCnLX@\\VbTFL^HXPRIPYVLNIZARMpUFwLWp[RcB[XKRWC[^SbELKBVQHTGE]zSTZTFbS`GhQfGx@RCFwTOBWNKCYK@LuIUXKBL`LfW^VRKtiLYCIfSIOLEJWr_JBHoJcOEGUSQYAQNmHGYD@O[@UK]sPmb_EyXUP@@WRYVDRSIGRWD]oSGMRCFUXERONHbC`VbatiLYC_JQMeNK^H^WEkJmZAJMKOW@HW\\ULaTIhEL]PIRWG_MAMULWO_FYfUTmPDjVh^ªh`MJaRIP[TKVYxk\\ETDTZfNjC\\NTIVgmePETLTC`HRCHYLIlhbTJ^^hRLCfFNb@¦I|_lCGMlqHPRFATJN|KX^Z@jJ`OHNN@LO^QlT^@bNVLXpffTr@V|PI^JX@DrTfSGI|fLN^VARV^L~KRR"]],"encodeOffsets":[[[108965,37396]]]}}],"UTF8Encoding":true});
}));