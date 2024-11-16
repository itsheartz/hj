require("./all/global");
const allPlace = require("./all/place");
const readline2 = require("readline");
const v = true;
const vF = p => {
  const v2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(p2 => {
    v2.question(p, p2);
  });
};
async function f() {
  const vMakeInMemoryStore = makeInMemoryStore({
    logger: pino().child({
      level: "silent",
      stream: "store"
    })
  });
  const {
    state: _0x431bf7,
    saveCreds: _0x22a4cb
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x275f4e,
    isLatest: _0x15438a
  } = await fetchLatestBaileysVersion();
  console.log(chalk.red.bold(`
  𝐌𝐚𝐬𝐮𝐤𝐚𝐧 𝐍𝐨𝐦𝐨𝐫 𝐊𝐚𝐦𝐮 𝐁𝐞𝐫𝐚𝐰𝐚𝐥 (𝐂𝐨𝐝𝐞 𝐍𝐞𝐠𝐚𝐫𝐚)
  
             
                        
                                   
          <|>  MANZ MODS 🎭 <|>
          
          
          
          
          
          
          
          <> 𝐒𝐜𝐫𝐢𝐩𝐭 𝐁𝐲 <> : ManzMods
          <> 𝐕𝐞𝐫𝐢𝐬𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 <> : ${global.versisc}
          <> 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐃𝐞𝐯 <> : @Manzz
          <> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 𝐃𝐞𝐯 <> : @Manzz
          <> 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐃𝐞𝐯 <> : +62 857-2426-9841
          𝐓𝐚𝐧𝐤𝐬 𝐘𝐨𝐮 𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭 𝐌𝐞 :`));
  const v3 = {
    version: _0x275f4e,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !v,
    logger: pino({
      level: "fatal"
    }),
    auth: _0x431bf7,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  };
  const v4 = allPlace.makeWASocket(v3);
  if (v && !v4.authState.creds.registered) {
    const v5 = await vF(chalk.green(`Enter Your Number
    Number : `));
    const v6 = await v4.requestPairingCode(v5.trim());
    console.log(chalk.green("Your Pairing Code : " + v6 + " "));
  }
  vMakeInMemoryStore.bind(v4.ev);
  v4.ev.on("connection.update", async p3 => {
    const {
      connection: _0x1d0183,
      lastDisconnect: _0x3b71c2
    } = p3;
    if (_0x1d0183 === "close") {
      const v7 = new Boom(_0x3b71c2?.error)?.output.statusCode;
      console.log(color(_0x3b71c2.error, "deeppink"));
      if (_0x3b71c2.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else if (v7 === DisconnectReason.badSession) {
        console.log(color("Bad Session File, Please Delete Session and Scan Again"));
        process.exit();
      } else if (v7 === DisconnectReason.connectionClosed) {
        console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
        process.exit();
      } else if (v7 === DisconnectReason.connectionLost) {
        console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
        process.exit();
      } else if (v7 === DisconnectReason.connectionReplaced) {
        console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
        v4.logout();
      } else if (v7 === DisconnectReason.loggedOut) {
        console.log(color("Device Logged Out, Please Scan Again And Run."));
        v4.logout();
      } else if (v7 === DisconnectReason.restartRequired) {
        console.log(color("Restart Required, Restarting..."));
        await f();
      } else if (v7 === DisconnectReason.timedOut) {
        console.log(color("Connection TimedOut, Reconnecting..."));
        f();
      }
    } else if (_0x1d0183 === "connecting") {
      start("1", "Connecting...");
    } else if (_0x1d0183 === "open") {
      success("1", "Tersambung");
      v4.sendMessage("6285724269841@s.whatsapp.net", {
        text: "`𝐇𝐚𝐥𝐨`\n  𝐌𝐚𝐧𝐳𝐌𝐨𝐝𝐬𝐕𝐞𝐫𝐬𝐢𝐨𝐧" + versisc + " 𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐓𝐞𝐫𝐬𝐚𝐦𝐛𝐮𝐧𝐠"
      });
      if (autoJoin) {
        v4.groupAcceptInvite(codeInvite);
      }
    }
  });
  v4.ev.on("messages.upsert", async p4 => {
    try {
      m = p4.messages[0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return v4.readMessages([m.key]);
      }
      if (!v4.public && !m.key.fromMe && p4.type === "notify") {
        return;
      }
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) {
        return;
      }
      m = allPlace.smsg(v4, m, vMakeInMemoryStore);
      require("./ManzCas")(v4, m, vMakeInMemoryStore);
    } catch (_0x2bfbb) {
      console.log(_0x2bfbb);
    }
  });
  v4.ev.on("contacts.update", p5 => {
    for (let v8 of p5) {
      let v9 = v4.decodeJid(v8.id);
      if (vMakeInMemoryStore && vMakeInMemoryStore.contacts) {
        vMakeInMemoryStore.contacts[v9] = {
          id: v9,
          name: v8.notify
        };
      }
    }
  });
  v4.public = true;
  v4.ev.on("creds.update", _0x22a4cb);
  return v4;
}
f();
process.on("uncaughtException", function (p6) {
  console.log("Caught exception: ", p6);
});