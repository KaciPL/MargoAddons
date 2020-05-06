// ==UserScript==
// @name         MargoAddonsME(SI)
// @version      2.0Final
// @author       KaciPL
// @match        http://*.margonem.pl/
// @grant none
// ==/UserScript==

localStorage.setItem(`disable-lf-b`, 1)
setTimeout(() => {
 const syf = [
  "#warn",
  "#ual",
  "#tutorial",
  "#MgvAddonsIcon",
  "#ni-promo",
  "#battlehelp",
  "#lehim_button",
  "#hieronim_button",
 ];
 syf.forEach(syf => $(syf).remove());
}, 100);
const prefix = Math.random().toString(36).substring(7) + "_";
class Addon {
 constructor(t, e, s = "") {
  this.name = t, this.url = new URL(e), this.desc = s ? `tip='${s}'` : ""
 }
 init() {
  const t = document.createElement("script");
  t.setAttribute("id", prefix + this.name), t.setAttribute("src", this.url.href), t.setAttribute("defer", "defer"), document.getElementsByTagName("body")[0].appendChild(t)
 }
 logingInformation() {
  return "".concat(`DODATEK: <span style='color:${config.special}'${this.desc}>${this.name}</span>`, ` pobrany z <span style='color:${config.special}'><span style='color:${config.urlColor}'>${this.url.href}</span></span>`)
 }
}

const addons = {
 global: [
  //Dodatki Offline
  new Addon("Auto strzały", "http://addons2.margonem.pl/get/36/36204verified.js"),
  new Addon("Filtr łupu", "http://addons2.margonem.pl/get/114/114899verified.js"),
  new Addon("Zjadacz złota", "http://addons2.margonem.pl/get/114/114320verified.js"),
  new Addon("Nie ukrywaj mobków", "http://addons2.margonem.pl/get/102/102888verified.js"),
  new Addon("A ile expa", "http://addons2.margonem.pl/get/32/32963verified.js"),
  new Addon("szybka walka", "http://addons2.margonem.pl/get/112/112240verified.js"),
  new Addon("Automatyczne zamykanie walki", "https://pastebin.com/raw/cvvne9zT"),
  new Addon("Anty duszek", "https://pastebin.com/raw/kv3kpZL0"),
  new Addon("Anty lag", "https://pastebin.com/raw/694XscdZ"),
  new Addon("F5 u Tunii", "https://pastebin.com/raw/ttGzdgVH"),
  new Addon("Trupia unbug", "https://pastebin.com/raw/wRTVi6ZF"),
  //Dodatki Online
  new Addon("REVO", "https://revo.ccrr.pl/revo.user.js"),
 ],
 character: {}
};

const config = {
 titleColor: "red",
 globalColor: "cyan",
 characterColor: "orange",
 special: "white",
 urlColor: "#ef00ff"
};

const addonsManager = () => {
  const a = {
   globalAddons: addons.global,
   characterAddons: addons.character[getCookie("mchar_id")] ?? []
  };
  Object.values(a).forEach(a => a.forEach(a => a.init())), globalThis.g.loadQueue.push({
   fun: (c, a) => {
    logingManager(c, a)
   },
   data: a
  })
 },
 logingManager = ({
  globalAddons: a,
  characterAddons: b
 }) => {
  logInfo(config.titleColor, "Addons Manager"), logInfo(config.globalColor, "Global addons:"), a.forEach(a => logInfo(config.globalColor, a.logingInformation())), 0 === a.length && logInfo("red", "Nie znaleziono globalnych dodatk\xF3w"), logInfo(config.characterColor, "Character Addons:"), b.forEach(a => logInfo(config.characterColor, a.logingInformation())), 0 === b.length && logInfo("red", "Nie znaleziono dodatk\xF3w na posta\u0107")
 },
 logInfo = (a, b) => log(`<span style="color:${a}">${b}</span>`);
addonsManager();
