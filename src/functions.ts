import akFlag from "./data/flags/ak.png";
import alFlag from "./data/flags/al.png";
import arFlag from "./data/flags/ar.png";
import azFlag from "./data/flags/az.png";
import caFlag from "./data/flags/ca.png";
import coFlag from "./data/flags/co.png";
import ctFlag from "./data/flags/ct.png";
import deFlag from "./data/flags/de.png";
import flFlag from "./data/flags/fl.png";
import gaFlag from "./data/flags/ga.png";
import hiFlag from "./data/flags/hi.png";
import iaFlag from "./data/flags/ia.png";
import idFlag from "./data/flags/id.png";
import ilFlag from "./data/flags/il.png";
import inFlag from "./data/flags/in.png";
import ksFlag from "./data/flags/ks.png";
import kyFlag from "./data/flags/ky.png";
import laFlag from "./data/flags/la.png";
import maFlag from "./data/flags/ma.png";
import mdFlag from "./data/flags/md.png";
import meFlag from "./data/flags/me.png";
import miFlag from "./data/flags/mi.png";
import mnFlag from "./data/flags/mn.png";
import moFlag from "./data/flags/mo.png";
import msFlag from "./data/flags/ms.png";
import mtFlag from "./data/flags/mt.png";
import ncFlag from "./data/flags/nc.png";
import ndFlag from "./data/flags/nd.png";
import neFlag from "./data/flags/ne.png";
import nhFlag from "./data/flags/nh.png";
import njFlag from "./data/flags/nj.png";
import nmFlag from "./data/flags/nm.png";
import nvFlag from "./data/flags/nv.png";
import nyFlag from "./data/flags/ny.png";
import ohFlag from "./data/flags/oh.png";
import okFlag from "./data/flags/ok.png";
import orFlag from "./data/flags/or.png";
import paFlag from "./data/flags/pa.png";
import riFlag from "./data/flags/ri.png";
import scFlag from "./data/flags/sc.png";
import sdFlag from "./data/flags/sd.png";
import tnFlag from "./data/flags/tn.png";
import txFlag from "./data/flags/tx.png";
import utFlag from "./data/flags/ut.png";
import vaFlag from "./data/flags/va.png";
import vtFlag from "./data/flags/vt.png";
import waFlag from "./data/flags/wa.png";
import wiFlag from "./data/flags/wi.png";
import wvFlag from "./data/flags/wv.png";
import wyFlag from "./data/flags/wy.png";

export const getFlagByID = (id: string) => {
  switch (id.toLowerCase()) {
    case "ak":
      return akFlag;
    case "al":
      return alFlag;
    case "ar":
      return arFlag;
    case "az":
      return azFlag;
    case "ca":
      return caFlag;
    case "co":
      return coFlag;
    case "ct":
      return ctFlag;
    case "de":
      return deFlag;
    case "fl":
      return flFlag;
    case "ga":
      return gaFlag;
    case "hi":
      return hiFlag;
    case "ia":
      return iaFlag;
    case "id":
      return idFlag;
    case "il":
      return ilFlag;
    case "in":
      return inFlag;
    case "ks":
      return ksFlag;
    case "ky":
      return kyFlag;
    case "la":
      return laFlag;
    case "ma":
      return maFlag;
    case "md":
      return mdFlag;
    case "me":
      return meFlag;
    case "mi":
      return miFlag;
    case "mn":
      return mnFlag;
    case "mo":
      return moFlag;
    case "ms":
      return msFlag;
    case "mt":
      return mtFlag;
    case "nc":
      return ncFlag;
    case "nd":
      return ndFlag;
    case "ne":
      return neFlag;
    case "nh":
      return nhFlag;
    case "nj":
      return njFlag;
    case "nm":
      return nmFlag;
    case "nv":
      return nvFlag;
    case "ny":
      return nyFlag;
    case "nv":
      return nvFlag;
    case "ny":
      return nyFlag;
    case "oh":
      return ohFlag;
    case "ok":
      return okFlag;
    case "or":
      return orFlag;
    case "pa":
      return paFlag;
    case "ri":
      return riFlag;
    case "sc":
      return scFlag;
    case "sd":
      return sdFlag;
    case "tn":
      return tnFlag;
    case "tx":
      return txFlag;
    case "ut":
      return utFlag;
    case "va":
      return vaFlag;
    case "vt":
      return vtFlag;
    case "wa":
      return waFlag;
    case "wi":
      return wiFlag;
    case "wv":
      return wvFlag;
    case "wy":
      return wyFlag;
  }
};
