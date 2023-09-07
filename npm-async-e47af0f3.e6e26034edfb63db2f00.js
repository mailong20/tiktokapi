"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8776], {
    82726: (e,t,n)=>{
        n.d(t, {
            su: ()=>d,
            i1: ()=>l,
            r$: ()=>k,
            NI: ()=>f,
            Lk: ()=>v,
            b3: ()=>m,
            c5: ()=>g,
            v9: ()=>s,
            k5: ()=>x,
            rb: ()=>y,
            v$: ()=>h,
            I7: ()=>_,
            O9: ()=>a,
            Bs: ()=>p,
            HF: ()=>r,
            FP: ()=>b,
            P6: ()=>c,
            uX: ()=>u,
            zn: ()=>O,
            _: ()=>i
        });
        var o = n(86166);
        const r = {
            sdkVersion: "0.7.5-tt-web.1",
            refer: o.m.Refer.PC,
            buildNumber: "f59aa4a:fix/upgrade-uploader",
            wsProtocols: ["binary", "base64", "pbbp2"],
            ticketType: o.m.TicketType.TICKET_TYPE_WEB,
            envKey: "X-Tt-Env",
            boeHeaderKey: "X-Use-Boe",
            ppeHeaderKey: "X-Use-Ppe",
            requestAccessName: "web_sdk",
            heartbeatInterval: 15e3,
            maxHeartbeatEmptyWindow: 3e4,
            conversationRefreshCount: 10
        };
        var i, s;
        !function(e) {
            e[e.Default = 0] = "Default",
            e[e.PushOnly = 1] = "PushOnly",
            e[e.All = 2] = "All",
            e[e.Disable = 3] = "Disable"
        }(i || (i = {})),
        function(e) {
            e.MessageMode = "s:mode",
            e.SendResponseStatus = "s:send_response_status",
            e.SendResponseExtraInfo = "s:send_response_extra_info",
            e.SendResponseCheckCode = "s:send_response_check_code",
            e.SendResponseCheckMessage = "s:send_response_check_msg",
            e.ClientMessageId = "s:client_message_id",
            e.MentionedUser = "s:mentioned_users",
            e.DoNotIncreaseUnread = "s:do_not_increase_unread",
            e.DoNotPopConversation = "s:do_not_pop_conversation",
            e.IsRecalled = "s:is_recalled",
            e.ServerMessageId = "s:server_message_id",
            e.LocalLogId = "s:local_logid",
            e.MessageVisible = "s:visible",
            e.MessageInvisible = "s:invisible",
            e.RelationIsMuted = "s:relation_is_muted",
            e.RelationNormalOnly = "s:relation_normal_only",
            e.RelationMuteTime = "s:relation_mute_time",
            e.RelationMuteExt = "s:relation_mute_ext",
            e.MessageSourceAppId = "s:biz_aid",
            e.ConversationSourceAppId = "s:s_aid",
            e.MarkActionType = "s:action_type",
            e.IsRootReference = "s:is_root_ref",
            e.MarkMessageNewExt = "s:mark_message_new_ext",
            e.AckSampling = "s:is_ack_sampling",
            e.AckSamplingShow = "s:is_ack_sampling_show",
            e.DoNotUpdateLastMessage = "s:do_not_update_last_msg",
            e.DoNotMoveReadIndex = "s:do_not_move_read_index",
            e.FileExtKeyAudioAsrText = "s:file_ext_key_audio_asr_text",
            e.RecognitionResponseCheckCode = "s:recognition_response_check_code",
            e.RecognitionResponseCheckMsg = "s:recognition_response_check_msg",
            e.PushPartDisableConfig = "s:push_part_disable_config",
            e.MustNotify = "s:must_notify"
        }(s || (s = {}));
        const a = "mute_wl";
        var c, l, d, u, _, p, v, y, h, g, f, m, b, k, O, x;
        !function(e) {
            e[e.Enable = 0] = "Enable",
            e[e.Disable = 1] = "Disable"
        }(c || (c = {})),
        function(e) {
            e[e.SingleChat = 1] = "SingleChat",
            e[e.GroupChat = 2] = "GroupChat",
            e[e.LiveChat = 3] = "LiveChat"
        }(l || (l = {})),
        function(e) {
            e[e.Normal = 0] = "Normal",
            e[e.Dissolved = 1] = "Dissolved"
        }(d || (d = {})),
        function(e) {
            e[e.Off = 0] = "Off",
            e[e.On = 1] = "On"
        }(u || (u = {})),
        function(e) {
            e[e.Off = 0] = "Off",
            e[e.On = 1] = "On"
        }(_ || (_ = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Allow = 1] = "Allow",
            e[e.Disable = 2] = "Disable",
            e[e.PartAllow = 3] = "PartAllow"
        }(p || (p = {})),
        function(e) {
            e[e.Off = 0] = "Off",
            e[e.On = 1] = "On"
        }(v || (v = {})),
        function(e) {
            e[e.NotAvailable = 0] = "NotAvailable",
            e[e.Start = 1] = "Start",
            e[e.Error = 2] = "Error",
            e[e.Succeeded = 3] = "Succeeded"
        }(y || (y = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Online = 1] = "Online",
            e[e.LoadMore = 2] = "LoadMore",
            e[e.Init = 3] = "Init",
            e[e.UserInbox = 4] = "UserInbox",
            e[e.BroadcastLoadMore = 5] = "BroadcastLoadMore",
            e[e.Offline = 6] = "Offline"
        }(h || (h = {})),
        function(e) {
            e.Error = "error",
            e.WebSocketConnected = "websocket-connected",
            e.WebSocketDisconnected = "websocket-disconnected",
            e.WebSocketReceiveUnexpectedFrame = "websocket-receive-unexpected-frame",
            e.ReceiveNewMessage = "receive-new-message",
            e.ReceiveSelfMessage = "receive-self-message",
            e.ReceiveCommandMessage = "receive-command-message",
            e.ReceiveBroadcastNewMessage = "receive-broadcast-new-message",
            e.ReceiveBroadcastSelfMessage = "receive-broadcast-self-message",
            e.ReceiveNewUpdateExtMessage = "receive-new-update-ext-message",
            e.ReceiveNewP2PMessage = "receive-new-p2p-message",
            e.MessageUpsert = "message-upsert",
            e.ConversationChange = "conversation-change",
            e.ConversationUpsert = "conversation-upsert",
            e.ConversationDissolve = "conversation-dissolve",
            e.ConversationBlock = "conversation-block",
            e.ParticipantUpsert = "participant-upsert",
            e.ParticipantJoin = "participant-join",
            e.ParticipantLeave = "participant-leave",
            e.ParticipantBlock = "participant-block",
            e.MessageSend = "message-send",
            e.MessageRecall = "message-recall",
            e.MessageDelete = "message-delete",
            e.ConversationDelete = "conversation-delete",
            e.ConversationLeave = "conversation-leave",
            e.ConversationCreate = "conversation-create",
            e.ConversationJoin = "conversation-join",
            e.ReceiveNewStrangerMessage = "receive-new-stranger-message",
            e.StrangerUpgrade = "stranger-upgrade",
            e.ReceiveRtc = "receive-rtc",
            e.MessagePropertyUpsert = "message-property-upsert",
            e.InitLoadPage = "init-load-page",
            e.InitFinish = "init-finish"
        }(g || (g = {})),
        function(e) {
            e[e.Unknown = -1] = "Unknown",
            e[e.Success = 0] = "Success",
            e[e.InvalidToken = 1] = "InvalidToken",
            e[e.InvalidTicket = 2] = "InvalidTicket",
            e[e.InvalidRequest = 4] = "InvalidRequest",
            e[e.InvalidCommand = 5] = "InvalidCommand",
            e[e.ServerError = 6] = "ServerError",
            e[e.UserForbidden = 11] = "UserForbidden",
            e[e.MessageTargetConversationNotExist = 15] = "MessageTargetConversationNotExist",
            e[e.Degradation = 16] = "Degradation",
            e[e.RecallTimeout = 17] = "RecallTimeout",
            e[e.CallbackDeny = 19] = "CallbackDeny",
            e[e.ExpiredToken = 100] = "ExpiredToken",
            e[e.InvalidParam = 400] = "InvalidParam",
            e[e.ResourceExhausted = 429] = "ResourceExhausted",
            e[e.InternalError = 500] = "InternalError",
            e[e.InvalidInboxType = 1e3] = "InvalidInboxType",
            e[e.ConversationNotExist = 1001] = "ConversationNotExist",
            e[e.MessageNotExist = 1002] = "MessageNotExist",
            e[e.MessageOffline = 1003] = "MessageOffline",
            e[e.UnknownMessageType = 1004] = "UnknownMessageType",
            e[e.InvalidServerId = 1005] = "InvalidServerId",
            e[e.MessageNotReady = 1006] = "MessageNotReady",
            e[e.TokenFuncError = 1007] = "TokenFuncError",
            e[e.NetworkError = 1008] = "NetworkError",
            e[e.AlreadyDispose = 1009] = "AlreadyDispose",
            e[e.NoAdapter = 1010] = "NoAdapter",
            e[e.ComponentNotFound = 1011] = "ComponentNotFound",
            e[e.NotImplemented = 1012] = "NotImplemented",
            e[e.MPInvalidArgument = 10001] = "MPInvalidArgument",
            e[e.MPServerUrlError = 10002] = "MPServerUrlError",
            e[e.MPNotFileMsg = 10003] = "MPNotFileMsg",
            e[e.MPUploadError = 10004] = "MPUploadError",
            e[e.MPNotSupportCipher = 10005] = "MPNotSupportCipher",
            e[e.RtcUnknown = 10100] = "RtcUnknown",
            e[e.RtcCreateRoomFail = 10101] = "RtcCreateRoomFail",
            e[e.RtcStartCallFail = 10102] = "RtcStartCallFail",
            e[e.RtcAlreadyCalling = 10103] = "RtcAlreadyCalling",
            e[e.RtcAlreadyOnTheCall = 10104] = "RtcAlreadyOnTheCall",
            e[e.RtcNotCalling = 10105] = "RtcNotCalling",
            e[e.RtcNotOnTheCall = 10106] = "RtcNotOnTheCall",
            e[e.RtcNotRinging = 10107] = "RtcNotRinging",
            e[e.RtcAcceptFail = 10108] = "RtcAcceptFail",
            e[e.RtcCheckStatusFail = 10109] = "RtcCheckStatusFail",
            e[e.RtcInvalidParam = 10110] = "RtcInvalidParam",
            e[e.RtcNotInit = 10111] = "RtcNotInit",
            e[e.RtcNoClient = 10112] = "RtcNoClient",
            e[e.RtcNoInfo = 10113] = "RtcNoInfo",
            e[e.RtcNoStream = 10114] = "RtcNoStream",
            e[e.RtcSdkError = 10115] = "RtcSdkError",
            e[e.RtcNotSupported = 10116] = "RtcNotSupported",
            e[e.DbOpError = 2e4] = "DbOpError",
            e[e.StorageCryptoError = 20001] = "StorageCryptoError",
            e[e.AuthSignError = 10201] = "AuthSignError"
        }(f || (f = {})),
        function(e) {
            e[e.Created = 0] = "Created",
            e[e.Preparing = 1] = "Preparing",
            e[e.Inflight = 2] = "Inflight",
            e[e.Succeeded = 3] = "Succeeded",
            e[e.Received = 4] = "Received",
            e[e.Failed = -1] = "Failed",
            e[e.Rejected = -2] = "Rejected",
            e[e.SelfVisible = -3] = "SelfVisible"
        }(m || (m = {})),
        function(e) {
            e[e.Succeeded = 0] = "Succeeded",
            e[e.UserNotInConversation = 1] = "UserNotInConversation",
            e[e.CheckConversationNotPass = 2] = "CheckConversationNotPass",
            e[e.CheckMessageNotPass = 3] = "CheckMessageNotPass",
            e[e.CheckMessageNotPassButSelfVisible = 4] = "CheckMessageNotPassButSelfVisible",
            e[e.UserHasBeenBlock = 5] = "UserHasBeenBlock"
        }(b || (b = {})),
        function(e) {
            e[e.Succeeded = 0] = "Succeeded",
            e[e.Rejected = 1] = "Rejected",
            e[e.PartialRejected = 2] = "PartialRejected"
        }(k || (k = {})),
        function(e) {
            e[e.Immediate = 0] = "Immediate",
            e[e.Throttle = 1] = "Throttle",
            e[e.Debounce = 2] = "Debounce",
            e[e.ThrottleWithArgs = 3] = "ThrottleWithArgs",
            e[e.DebounceWithArgs = 4] = "DebounceWithArgs"
        }(O || (O = {})),
        function(e) {
            e[e.Default = 0] = "Default",
            e[e.AwemeMode = 1] = "AwemeMode"
        }(x || (x = {}))
    }
    ,
    73562: (e,t,n)=>{
        n.d(t, {
            G: ()=>a
        });
        var o = n(82726)
          , r = n(66924)
          , i = n(82090)
          , s = n(48252);
        class a extends Error {
            constructor(e) {
                var t, n, c, l;
                super(`${e && e.logid ? `[${e.logid}] ` : ""}${e && e.msg ? 'message: "' + e.msg + '"' : ""}${e && e.innerError ? `, inner error: "${e.innerError}"` : ""}`),
                this.ctx = e.ctx,
                Object.assign(this, e),
                Object.setPrototypeOf(this, a.prototype),
                (null === (t = this.innerError) || void 0 === t ? void 0 : t.logid) && (this.logid = this.innerError.logid);
                try {
                    "string" == typeof (null === (n = this.innerError) || void 0 === n ? void 0 : n.stack) && (this.stack = this.innerError.stack + "\n" + (null === (c = this.stack) || void 0 === c ? void 0 : c.split("\n").slice(2).join("\n")))
                } catch (e) {
                    r.Y.ctxWarn(this.ctx, `concat trace fail=${e}, current stack=${this.stack}, inner stack=${null === (l = this.innerError) || void 0 === l ? void 0 : l.stack}`)
                }
                this.ctx && (e.ignoreEvent || this.resolve(s.Uk.EventBus).emit(o.c5.Error, e.sender, this),
                this.resolve(s.Uk.Monitor).emitError(this),
                this.resolve(s.Uk.Monitor).emitCounter(i.U.BizSdkError, 1, {
                    type: e.type ? `${e.type}:${o.NI[e.type]}` : "unknown"
                }))
            }
            getContext() {
                return this.ctx
            }
            resolve(e) {
                return this.ctx.resolve(e)
            }
        }
    }
    ,
    2310: (e,t,n)=>{
        n.r(t),
        n.d(t, {
            AdapterManager: ()=>U,
            AdapterType: ()=>R,
            BytedIM: ()=>Oe,
            BytedIMCore: ()=>ke,
            CommandMessage: ()=>ae,
            CommandType: ()=>te,
            ConfigKeys: ()=>ce,
            ContextClassBase: ()=>s.mA,
            ConversationStatus: ()=>T.su,
            ConversationType: ()=>T.i1,
            CreateConvertsationStatusCode: ()=>T.r$,
            DbProxy: ()=>me,
            ErrorType: ()=>T.NI,
            FavoriteState: ()=>T.Lk,
            FlightStatus: ()=>T.b3,
            IMEvent: ()=>T.c5,
            InfoKeys: ()=>T.v9,
            InitApiMode: ()=>T.k5,
            InitResult: ()=>T.rb,
            Logger: ()=>_.Y,
            LoggerLevel: ()=>_.h,
            Message: ()=>V.v,
            MessageSource: ()=>T.v$,
            Monitor: ()=>S.u,
            MonitorItem: ()=>S.U,
            MuteState: ()=>T.I7,
            PropertyStatus: ()=>V.R,
            PushPartDisableConfigWhiteListKey: ()=>T.O9,
            PushStatus: ()=>T.Bs,
            RuntimeContext: ()=>s.jO,
            SdkConsts: ()=>T.HF,
            SendMessageStatusCode: ()=>T.FP,
            ServerMessageStatus: ()=>T.P6,
            ServiceIdentity: ()=>s.Uk,
            StickTopState: ()=>T.uX,
            Ticker: ()=>X,
            TrackerItem: ()=>le,
            TriggerType: ()=>T.zn,
            WebSocketLevel: ()=>T._,
            deserialize: ()=>f,
            deserializeFrame: ()=>b,
            im_proto: ()=>c.m,
            serialize: ()=>g,
            serializeFrame: ()=>m,
            uuidv4: ()=>ne.k
        });
        var o = n(22403)
          , r = n(30365)
          , i = n.n(r)
          , s = n(48252)
          , a = n(10007)
          , c = n(86166)
          , l = n(50137)
          , d = n(58071)
          , u = n.n(d)
          , _ = n(66924);
        const p = c.m.Request
          , v = c.m.Response
          , y = c.m.Frame;
        function h(e) {
            return "undefined" != typeof btoa ? btoa(String.fromCharCode.apply(null, new Uint8Array(e))) : ""
        }
        function g(e) {
            const t = p.encode(e).finish();
            return new Uint8Array(t)
        }
        function f(e, t) {
            const n = new Uint8Array(t);
            try {
                return v.decode(n)
            } catch (t) {
                const o = h(n);
                throw _.Y.ctxWarn(e, "decode response error: ", t),
                _.Y.ctxDebug(e, "hex dump: ", o),
                o
            }
        }
        function m(e) {
            const t = y.encode(e).finish();
            return new Uint8Array(t)
        }
        function b(e, t) {
            const n = new Uint8Array(t);
            try {
                return y.decode(n)
            } catch (t) {
                const o = h(n);
                throw _.Y.ctxWarn(e, "decode frame error: ", t),
                _.Y.ctxDebug(e, "hex dump: ", o),
                o
            }
        }
        var k, O, x = n(32701);
        class w extends s.mA {
            constructor(e) {
                super(e),
                this.option = e.option
            }
            sendByBeacon(e, t) {
                return !1
            }
            sendBeacon(e, t) {
                setTimeout((()=>{
                    this.sendByBeacon(e, g(t)) || this.sendRequest(e, t)
                }
                ), 0)
            }
            sendRequest(e, t) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const n = yield this.send(e, "POST", this.encode(t));
                    return this.decode(n)
                }
                ))
            }
            encode(e) {
                return g(e).buffer
            }
            decode(e) {
                return c.m.Response.create(f(this.ctx, e))
            }
            get headers() {
                return Object.assign({
                    Accept: this.mime,
                    "Content-Type": this.mime
                }, this.option.httpHeaders)
            }
            get mime() {
                return "application/x-protobuf"
            }
            get dataType() {
                return "arraybuffer"
            }
            get method() {
                return "POST"
            }
        }
        class I extends w {
            constructor(e) {
                super(e),
                this.instance = i().create({
                    timeout: this.option.timeout,
                    withCredentials: !!this.option.withCredentials,
                    headers: this.headers,
                    responseType: this.dataType,
                    method: this.method
                })
            }
            send(e, t, n) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return (yield this.instance.request({
                        url: e,
                        data: n,
                        method: t
                    })).data
                }
                ))
            }
            sendByBeacon(e, t) {
                return void 0 !== navigator.sendBeacon && navigator.sendBeacon(e, t)
            }
        }
        !function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Connected = 1] = "Connected",
            e[e.Disconnected = 2] = "Disconnected"
        }(k || (k = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Cellular_2G = 1] = "Cellular_2G",
            e[e.Cellular_3G = 2] = "Cellular_3G",
            e[e.Cellular_4G = 3] = "Cellular_4G",
            e[e.Cellular_5G = 4] = "Cellular_5G",
            e[e.Wifi = 5] = "Wifi",
            e[e.Other = 6] = "Other",
            e[e.None = 7] = "None"
        }(O || (O = {}));
        class C extends s.mA {
        }
        class M extends C {
            getConnectionStatus() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return "undefined" != typeof navigator && void 0 !== navigator.onLine ? navigator.onLine ? k.Connected : k.Disconnected : k.Unknown
                }
                ))
            }
            getNetworkType() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if ((yield this.getConnectionStatus()) === k.Disconnected)
                        return O.None;
                    if ("undefined" == typeof navigator || !navigator.connection || !navigator.connection.type)
                        return O.Unknown;
                    switch (navigator.connection.type) {
                    case "cellular":
                        if (!navigator.connection.effectiveType)
                            return O.Unknown;
                        switch (navigator.connection.effectiveType) {
                        case "2g":
                        case "slow-2g":
                            return O.Cellular_2G;
                        case "3g":
                            return O.Cellular_3G;
                        case "4g":
                            return O.Cellular_4G;
                        case "5g":
                            return O.Cellular_5G;
                        default:
                            return O.Unknown
                        }
                    case "wifi":
                        return O.Wifi;
                    case "other":
                        return O.Other;
                    case "none":
                        return O.None;
                    default:
                        return O.Unknown
                    }
                }
                ))
            }
        }
        var R, T = n(82726), P = n(73562), S = n(82090);
        class E {
            constructor(e, t, n) {
                this.index = e,
                this.subject = t,
                this.handler = n
            }
            unsubscribe() {
                this.subject.unsubscribe(this)
            }
        }
        class B extends s.mA {
            constructor() {
                super(...arguments),
                this.subscriptions = new Map,
                this.idx = 0
            }
            subscribe(e) {
                const t = this.subscriptions.values();
                for (const n of t)
                    if (e === n.handler)
                        return _.Y.ctxDebug(this.ctx, "ignore duplicate handler:", e),
                        n;
                const n = new E(this.idx,this,e);
                return this.subscriptions.set(this.idx, n),
                this.idx++,
                n
            }
            nextEmpty(e) {
                for (const t of this.subscriptions.values())
                    if (t && t.handler)
                        try {
                            t.handler({}, e)
                        } catch (e) {
                            _.Y.ctxWarn(this.ctx, "error in event handler:", e)
                        }
            }
            next(e, t) {
                for (const n of this.subscriptions.values())
                    if (n && n.handler)
                        try {
                            n.handler(e, t)
                        } catch (e) {
                            _.Y.ctxWarn(this.ctx, "error in event handler:", e)
                        }
            }
            unsubscribe(e) {
                e && this.subscriptions.delete(e.index)
            }
            unsubscribeAll() {
                this.subscriptions.clear()
            }
        }
        class j extends s.mA {
            constructor(e) {
                super(e),
                this.openTime = 0,
                this.createTime = 0,
                this.option = e.option,
                this.url = this.option.frontierUrl,
                this.onClose = new B(e),
                this.onOpen = new B(e),
                this.onError = new B(e),
                this.onMessage = new B(e),
                this.onOpen.subscribe((()=>{
                    var e;
                    this.openTime = S.u.performanceNow(),
                    this.resolve(s.Uk.Monitor).emitMetrics(S.U.FrontierOpen, {
                        duration: this.openTime - this.createTime
                    }, {
                        url: null !== (e = this.url) && void 0 !== e ? e : "unknown"
                    })
                }
                )),
                this.onClose.subscribe((e=>{
                    var t, n, o, r;
                    "undefined" != typeof CloseEvent && e instanceof CloseEvent ? this.resolve(s.Uk.Monitor).emitMetrics(S.U.FrontierClose, {
                        count: 1
                    }, {
                        url: null !== (t = this.url) && void 0 !== t ? t : "unknown",
                        code: null === (n = e.code) || void 0 === n ? void 0 : n.toString(),
                        reason: e.reason
                    }) : this.resolve(s.Uk.Monitor).emitMetrics(S.U.FrontierClose, {
                        count: 1
                    }, {
                        url: null !== (o = this.url) && void 0 !== o ? o : "unknown"
                    }),
                    0 === this.openTime || Number.isNaN(this.openTime) || this.resolve(s.Uk.Monitor).emitMetrics(S.U.FrontierLive, {
                        duration: S.u.performanceNow() - this.openTime
                    }, {
                        url: null !== (r = this.url) && void 0 !== r ? r : "unknown"
                    }),
                    this.openTime = 0
                }
                )),
                this.onMessage.subscribe((e=>{
                    var t;
                    "hi" !== e.toString() && this.resolve(s.Uk.Monitor).emitMetrics(S.U.FrontierReceive, {
                        count: 1
                    }, {
                        url: null !== (t = this.url) && void 0 !== t ? t : "unknown"
                    })
                }
                )),
                this.onError.subscribe((()=>{
                    var e;
                    this.resolve(s.Uk.Monitor).emitMetrics(S.U.FrontierError, {
                        count: 1
                    }, {
                        url: null !== (e = this.url) && void 0 !== e ? e : "unknown"
                    })
                }
                ))
            }
            get paramUrl() {
                var e, t;
                const n = void 0 !== (null === (t = null === (e = this.option) || void 0 === e ? void 0 : e.headers) || void 0 === t ? void 0 : t[T.HF.envKey]) ? {
                    [T.HF.envKey.toLowerCase()]: this.option.headers[T.HF.envKey]
                } : {}
                  , o = Object.assign(Object.assign({
                    token: this.ctx.cachedToken,
                    sid: this.option.sessionId,
                    aid: this.option.appId,
                    fpid: this.option.fpId,
                    device_id: this.option.deviceId,
                    access_key: u()(`${this.option.fpId + this.option.appKey + this.option.deviceId}f8a69f1719916z`),
                    device_platform: this.option.devicePlatform,
                    version_code: this.option.versionCode
                }, this.option.extended), n);
                if (this.ctx.option.authType === c.m.AuthType.CERT_AUTH) {
                    const e = this.resolve(s.Uk.AuthManager);
                    o.sdk_cert = encodeURIComponent(e.getCert()),
                    o.ts_sign = encodeURIComponent(e.getTsSign())
                }

                return `${this.url}?${function(e) {
                    const t = [];
                    for (const n of Object.keys(e))
                        void 0 !== e[n] && "" !== e[n] && t.push(`${n}=${e[n]}`);
                    return t.join("&")
                }(o)}`
            }
            performOpen() {
                let e = !1;
                this.createTime = S.u.performanceNow();
                const t = new Promise(((t,n)=>{
                    setTimeout((()=>{
                        e || n(new P.G({
                            ctx: this.ctx,
                            msg: "frontier connect timeout",
                            type: T.NI.NetworkError,
                            sender: this
                        }))
                    }
                    ), this.ctx.option.timeout)
                }
                ));
                return Promise.race([t, (()=>(0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    try {
                        yield this.open()
                    } catch (e) {
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "ws connect error",
                            innerError: e,
                            sender: this,
                            type: T.NI.NetworkError
                        })
                    } finally {
                        e = !0
                    }
                }
                )))()])
            }
            dispose() {
                this.onOpen.unsubscribeAll(),
                this.onClose.unsubscribeAll(),
                this.onError.unsubscribeAll(),
                this.onMessage.unsubscribeAll()
            }
        }
        class A extends j {
            registerEvents() {
                this.ws.onclose = e=>{
                    this.onClose.next(e, this)
                }
                ,
                this.ws.onopen = ()=>{
                    this.onOpen.nextEmpty(this)
                }
                ,
                this.ws.onmessage = e=>{
                    this.onMessage.next(e.data, this)
                }
                ,
                this.ws.onerror = e=>{
                    this.onError.next(e, this)
                }
            }
            open() {
                if (this.isOpen())
                    return _.Y.ctxWarn(this.ctx, "ws already open, close first"),
                    Promise.resolve(!0);
                let e, t;
                this.ws = new WebSocket(this.paramUrl,T.HF.wsProtocols),
                this.ws.binaryType = "arraybuffer",
                this.registerEvents();
                const n = this.onOpen.subscribe((()=>{
                    e(!0),
                    this.onOpen.unsubscribe(n)
                }
                ))
                  , o = this.onError.subscribe((e=>{
                    t(e),
                    this.onError.unsubscribe(o)
                }
                ));
                return new Promise(((n,o)=>{
                    e = n,
                    t = o
                }
                ))
            }
            close() {
                this.ws && (this.ws.onmessage = null,
                this.ws.close()),
                this.ws = void 0
            }
            send(e) {
                this.ws.send(e)
            }
            isOpen() {
                return void 0 !== this.ws && this.ws.readyState === WebSocket.OPEN
            }
        }
        class U {
            constructor() {
                this.constructors = new Map
            }
            setAdapter(e, t) {
                this.constructors.set(e, t)
            }
            setDynamicAdapter(e) {
                for (const t of Object.keys(e))
                    this.setAdapter(t, e[t])
            }
            getConstructor(e, t) {
                if (!this.constructors.has(t))
                    throw new P.G({
                        ctx: e,
                        type: T.NI.NoAdapter,
                        msg: `adapter not exist for ${t}`,
                        sender: this
                    });
                return this.constructors.get(t)
            }
            static setAdapter(e, t) {
                return this.Instance.setAdapter(e, t)
            }
            static getConstructor(e, t) {
                return this.Instance.getConstructor(e, t)
            }
            static setDynamicAdapter(e) {
                return this.Instance.setDynamicAdapter(e)
            }
        }
        U.Instance = new U,
        function(e) {
            e.NetApi = "net",
            e.HttpClient = "http",
            e.WebSocketClient = "ws",
            e.MediaUploader = "mediaUploader",
            e.RtcApi = "rtc"
        }(R || (R = {}));
        var L = n(80694);
        class N extends L.W {
            SendMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        send_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            content: e.content,
                            mentioned_users: e.mentionedUsers,
                            client_message_id: e.clientId,
                            ticket: e.ticket,
                            message_type: e.messageType,
                            ext: e.ext,
                            ref_msg_info: e.referenceInfo
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.SEND_MESSAGE, {
                        inboxType: e.inboxType,
                        maxRetryTimes: this.ctx.option.maxSendMsgRetryTimes
                    })
                }
                ))
            }
            GetMessagesByUser(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        messages_per_user_body: {
                            cursor: e.cursor,
                            limit: e.limit
                        }
                    });
                    try {
                        return yield this.sendWithRawBody(t, c.m.IMCMD.GET_MESSAGES_BY_USER, {
                            inboxType: e.inboxType,
                            maxRetryTimes: 1
                        })
                    } catch (t) {
                        return _.Y.ctxWarn(this.ctx, `pull user error:${t}, ignore`),
                        c.m.Response.create({
                            body: c.m.ResponseBody.create({
                                messages_per_user_body: c.m.MessagesPerUserResponseBody.create({
                                    next_cursor: e.cursor,
                                    has_more: !1,
                                    messages: []
                                })
                            })
                        })
                    }
                }
                ))
            }
            GetMessagesByUserInitV2(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        messages_per_user_init_v2_body: {
                            cursor: e.cursor,
                            init_sub_type: e.initSubType,
                            conv_limit: e.convLimit,
                            msg_limit: e.msgLimit
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.GET_MESSAGES_BY_USER_INIT_V2, {
                        inboxType: e.inboxType,
                        forceHttp: !0,
                        maxRetryTimes: 10
                    })
                }
                ))
            }
            GetMessagesByInit(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        message_by_init: {
                            version: e.version,
                            page: e.page,
                            conv_limit: e.convLimit,
                            msg_limit: e.msgLimit
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.GET_MESSAGE_BY_INIT, {
                        inboxType: e.inboxType,
                        forceHttp: !0,
                        maxRetryTimes: 10
                    })
                }
                ))
            }
            GetMessagesByConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        messages_in_conversation_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            anchor_index: e.anchorIndex,
                            limit: e.limit,
                            direction: e.direction
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.GET_MESSAGES_BY_CONVERSATION, {
                        inboxType: e.inboxType,
                        forceHttp: !0
                    })
                }
                ))
            }
            CreateConversationV2(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        create_conversation_v2_body: {
                            conversation_type: e.type,
                            participants: e.participants,
                            persistent: e.persistent,
                            idempotent_id: e.idempotentId,
                            name: e.name,
                            avatar_url: e.avatarUrl,
                            description: e.desc,
                            biz_ext: e.bizExt
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.CREATE_CONVERSATION_V2, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetConversationInfoListV2(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        get_conversation_info_list_v2_body: {
                            conversation_info_list: e.conversations.map((e=>({
                                conversation_id: e.conversationId,
                                conversation_short_id: e.conversationShortId,
                                conversation_type: e.conversationType
                            })))
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.GET_CONVERSATION_INFO_LIST_V2, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            MarkConversationReadV3(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        mark_conversation_read_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            read_message_index: e.readIndex,
                            conv_unread_count: e.unreadCount,
                            total_unread_count: e.totalUnreadCount
                        }
                    });
                    return this.send(t, c.m.IMCMD.MARK_CONVERSATION_READ_V3, {
                        inboxType: e.inboxType,
                        maxRetryTimes: 1
                    })
                }
                ))
            }
            RecallMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        recall_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            server_message_id: e.serverId
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.RECALL_MESSAGE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetTicket(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        get_ticket_body: {
                            ticket_type: T.HF.ticketType,
                            conversation_type: e.conversationType,
                            conversation_short_id: e.shortId,
                            to_id: e.toId,
                            ext: e.ext
                        }
                    });
                    return (yield this.send(t, c.m.IMCMD.GET_TICKET, {
                        inboxType: e.inboxType
                    })).get_ticket_body
                }
                ))
            }
            GetConversationParticipantsList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        conversation_participants_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            cursor: e.cursor,
                            limit: e.limit
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.CONVERSATION_PARTICIPANTS_LIST, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetConversationParticipantByUserId(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = c.m.RequestBody.create({
                        mget_conversation_participants_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            participants: e.participants
                        }
                    });
                    return this.sendWithRawBody(t, c.m.IMCMD.MGET_CONVERSATION_PARTICIPANTS, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            ClientAck(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    try {
                        const t = c.m.RequestBody.create({
                            client_ack_body: {
                                start_time_stamp: e.startTimeStamp,
                                cmd: e.cmd,
                                network_type: e.NetworkType,
                                logid: e.logid,
                                client_time_stamp: e.clientTimeStamp,
                                server_message_id: e.serverId,
                                type: e.type
                            }
                        });
                        yield this.send(t, c.m.IMCMD.CLIENT_ACK, {
                            useBeacon: !0,
                            inboxType: e.inboxType
                        })
                    } catch (e) {
                        _.Y.ctxWarn(this.ctx, `send ack error: ${e}, ignore`)
                    }
                }
                ))
            }
            ClientBatchAck(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    try {
                        const o = null === (t = null == e ? void 0 : e.map) || void 0 === t ? void 0 : t.call(e, (e=>({
                            start_time_stamp: e.startTimeStamp,
                            cmd: e.cmd,
                            network_type: e.NetworkType,
                            logid: e.logid,
                            client_time_stamp: e.clientTimeStamp,
                            server_message_id: e.serverId,
                            type: e.type
                        })))
                          , r = c.m.RequestBody.create({
                            client_batch_ack_body: {
                                ack_list: o
                            }
                        });
                        yield this.send(r, c.m.IMCMD.CLIENT_BATCH_ACK, {
                            useBeacon: !0,
                            inboxType: null === (n = null == e ? void 0 : e[0]) || void 0 === n ? void 0 : n.inboxType
                        })
                    } catch (e) {
                        _.Y.ctxWarn(this.ctx, `send batch ack error: ${e}, ignore`)
                    }
                }
                ))
            }
        }
        function D(e, t, n=!1) {
            let o, r, i, s = 0;
            const a = function() {
                e.apply(r, i),
                s = Date.now()
            };
            return function() {
                const e = Date.now();
                if (r = this,
                i = arguments,
                o && (clearTimeout(o),
                o = null),
                n && 0 === s)
                    return o = setTimeout((()=>{
                        a()
                    }
                    ), t),
                    a();
                const c = t - (e - s);
                if (c > 0)
                    o = setTimeout((()=>{
                        a()
                    }
                    ), c);
                else {
                    if (n)
                        return a();
                    o = setTimeout((()=>{
                        a()
                    }
                    ), t)
                }
            }
        }
        class q extends s.mA {
            constructor() {
                super(...arguments),
                this.subscriptions = new Map
            }
            subscribe(e, t) {
                var n;
                if (!Object.values(T.c5).includes(e))
                    throw new P.G({
                        ctx: this.ctx,
                        type: T.NI.InvalidParam,
                        msg: `unknown event: ${e}`,
                        sender: this
                    });
                this.subscriptions.has(e) || this.subscriptions.set(e, new B(this.ctx));
                const o = this.subscriptions.get(e)
                  , r = "number" == typeof this.ctx.option.throttle ? this.ctx.option.throttle : 100
                  , i = null !== (n = this.ctx.option.triggerStrategy) && void 0 !== n ? n : {};
                if (!1 === this.ctx.option.throttle)
                    return o.subscribe(t);
                if (void 0 === i[e])
                    return o.subscribe(t);
                switch (_.Y.ctxDebug(this.ctx, `apply strategy: ${T.zn[i[e]]} to event: ${e}`),
                i[e]) {
                case T.zn.Throttle:
                    return o.subscribe(function(e, t, n) {
                        let o, r;
                        return function() {
                            const i = this
                              , s = +new Date
                              , a = arguments;
                            clearTimeout(o),
                            r || (r = s),
                            s - r >= n ? (e.apply(i, a),
                            r = s) : o = setTimeout((()=>{
                                e.apply(i, a)
                            }
                            ), t)
                        }
                    }(t, r, r));
                case T.zn.Debounce:
                    return o.subscribe(D(t, r));
                case T.zn.ThrottleWithArgs:
                    return o.subscribe(function(e, t, n) {
                        const o = {}
                          , r = {}
                          , i = new Map;
                        let s = 0;
                        return function() {
                            const a = this
                              , c = +new Date
                              , l = arguments
                              , d = l[0];
                            let u = i.get(d);
                            i.has(d) || (u = s++,
                            i.set(d, u)),
                            clearTimeout(o[u]),
                            r[u] || (r[u] = c),
                            c - r[u] >= n ? (r[u] = c,
                            e.apply(a, l)) : o[u] = setTimeout((()=>{
                                e.apply(a, l),
                                delete r[u],
                                delete o[u],
                                i.delete(d)
                            }
                            ), t)
                        }
                    }(t, r, r));
                case T.zn.DebounceWithArgs:
                    return o.subscribe(function(e, t) {
                        const n = new Map
                          , o = {}
                          , r = {};
                        let i = 0;
                        return function() {
                            const s = Date.now()
                              , a = arguments
                              , c = a[0];
                            let l = n.get(c);
                            n.has(c) || (l = i++,
                            n.set(c, l));
                            const d = ()=>{
                                e.apply(this, a),
                                delete r[l],
                                delete o[l],
                                n.delete(c)
                            }
                            ;
                            void 0 === r[l] && (r[l] = 0),
                            o[l] && (clearTimeout(o[l]),
                            delete o[l]);
                            const u = s - r[l]
                              , _ = t - u;
                            o[l] = _ > 0 ? setTimeout((()=>{
                                d()
                            }
                            ), _) : setTimeout((()=>{
                                d()
                            }
                            ), t)
                        }
                    }(t, r));
                case T.zn.Immediate:
                default:
                    return o.subscribe(t)
                }
            }
            unsubscribe(e, t) {
                this.subscriptions.has(e) && this.subscriptions.get(e).unsubscribe(t)
            }
            unsubscribeAll() {
                for (const e of Object.values(this.subscriptions))
                    e.unsubscribeAll();
                this.subscriptions.clear()
            }
            emitEmpty(e, t) {
                return this.emit(e, t, void 0)
            }
            emit(e, t, n) {
                this.resolve(s.Uk.Monitor).emitEvent(e, t, n);
                const o = this.subscriptions.get(e);
                o && (n ? _.Y.ctxDebug(this.ctx, `emit event "${e}" with sender:`, t, ", eventArgs:", n) : _.Y.ctxDebug(this.ctx, `emit event "${e}" with sender:`, t),
                o.next(n, t))
            }
        }
        var G = n(3786)
          , V = n(63422);
        function Y(e, t, n, o) {
            let r = n = n || 0
              , i = o = o || e.length - n
              , s = 0;
            for (r = n,
            i = o; r < i; ) {
                const n = e[r++];
                let o = n >> 4;
                if (o > 0) {
                    let n = o + 240;
                    for (; 255 === n; )
                        n = e[r++],
                        o += n;
                    const a = r + o;
                    for (; r < a; )
                        t[s++] = e[r++];
                    if (r === i)
                        return s
                }
                const a = e[r++] | e[r++] << 8;
                if (0 === a || a > s)
                    return -(r - 2);
                let c = 15 & n
                  , l = c + 240;
                for (; 255 === l; )
                    l = e[r++],
                    c += l;
                let d = s - a;
                const u = s + c + 4;
                for (; s < u; )
                    t[s++] = t[d++]
            }
            return s
        }
        Math.imul || (Math.imul = function(e, t) {
            const n = 65535 & e
              , o = 65535 & t;
            return n * o + ((e >>> 16) * o + n * (t >>> 16) << 16) | 0
        }
        );
        var F = n(97950)
          , W = n(67451);
        const {setIntervalWarp: H, clearIntervalWarp: K, setTimeoutWarp: $, clearTimeoutWarp: z} = W.Z;
        var Z;
        !function(e) {
            e[e.Stopped = 0] = "Stopped",
            e[e.Running = 1] = "Running"
        }(Z || (Z = {}));
        class X extends s.mA {
            constructor(e, t, n) {
                return super(e),
                this.state = Z.Stopped,
                this.refreshRate = 0,
                this.doneDuration = 0,
                this.refreshRate = t,
                this.doneDuration = n,
                this.onTick = new B(this.ctx),
                this.onDone = new B(this.ctx),
                this.onStop = new B(this.ctx),
                this
            }
            get duration() {
                return this.state === Z.Stopped && 0 !== this.lastStopTime ? this.lastStopTime - this.startTime : this.state === Z.Running ? Date.now() - this.startTime : 0
            }
            start() {
                this.state !== Z.Running && this.restart()
            }
            restart() {
                this.tickTimer && this.stop(),
                this.state = Z.Running;
                const {enableHackTimer: e} = this.ctx.option
                  , t = e ? H : setInterval
                  , n = e ? $ : setTimeout;
                this.tickTimer = t((()=>{
                    this.update()
                }
                ), this.refreshRate),
                void 0 !== this.doneDuration && (this.doneTimer = n((()=>{
                    this.done()
                }
                ), this.doneDuration)),
                this.startTime = Date.now(),
                this.lastStopTime = 0,
                this.update()
            }
            stop() {
                if (this.state === Z.Stopped)
                    return;
                const {enableHackTimer: e} = this.ctx.option
                  , t = e ? K : clearInterval
                  , n = e ? z : clearTimeout;
                t(this.tickTimer),
                n(this.doneTimer),
                this.state = Z.Stopped,
                this.lastStopTime = Date.now(),
                this.onStop.nextEmpty()
            }
            getTickTimer() {
                return this.tickTimer
            }
            update() {
                this.onTick.nextEmpty(this)
            }
            done() {
                this.stop(),
                this.onDone.nextEmpty()
            }
        }
        class Q extends s.mA {
            constructor(e) {
                super(e),
                this.wsLastReceiveTime = 0,
                this.reqMap = new Map,
                this.manuallyClosed = !1;
                const {webSocketLevel: t, heartbeatInterval: n, maxHeartbeatEmptyWindow: o} = this.ctx.option;
                this.heartbeatInterval = null != n ? n : T.HF.heartbeatInterval,
                this.maxEmptyWindow = null != o ? o : T.HF.maxHeartbeatEmptyWindow,
                this.net = new (U.getConstructor(e, R.NetApi))(this.ctx),
                this.http = new (U.getConstructor(e, R.HttpClient))(this.ctx),
                t !== T._.Disable && (this.ws = new (U.getConstructor(e, R.WebSocketClient))(this.ctx),
                this.prepareWs()),
                this.onMessage = new B(e)
            }
            inSignCommandList(e) {
                return [c.m.IMCMD.SEND_MESSAGE, c.m.IMCMD.CREATE_CONVERSATION_V2, c.m.IMCMD.CALL_VOIP, c.m.IMCMD.ADD_CONVERSATION_PARTICIPANTS, c.m.IMCMD.REMOVE_CONVERSATION_PARTICIPANTS, c.m.IMCMD.UPDATE_CONVERSATION_PARTICIPANT, c.m.IMCMD.SET_CONVERSATION_SETTING_INFO, c.m.IMCMD.SET_CONVERSATION_CORE_INFO, c.m.IMCMD.UPSERT_CONVERSATION_CORE_EXT_INFO, c.m.IMCMD.UPSERT_CONVERSATION_SETTING_EXT_INFO, c.m.IMCMD.DISSOLVE_CONVERSATION, c.m.IMCMD.MARK_MESSAGE, c.m.IMCMD.BATCH_UNMARK_MESSAGE, c.m.IMCMD.SET_MESSAGE_PROPERTY, c.m.IMCMD.MODIFY_MESSAGE_EXT].includes(e)
            }
            frontierSign(e) {
                const t = {
                    "X-MS-STUB": u()(e)
                };
                if ("undefined" != typeof window && void 0 !== window.byted_acrawler && "function" == typeof window.byted_acrawler.frontierSign) {
                    const e = window.byted_acrawler.frontierSign(t);
                    return null != e ? e : {}
                }
                return {}
            }
            sendByBeacon(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e.method = "beacon",
                    _.Y.ctxDebug(this.ctx, `Beacon Request SeqId -> ${e.seqId}`, e.request),
                    this.http.sendBeacon(e.url, e.request),
                    e
                }
                ))
            }
            sendByHttp(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    e.method = "http",
                    _.Y.ctxDebug(this.ctx, `Http Request SeqId -> ${e.seqId}`, e.request);
                    try {
                        this.reqMap.set(e.seqId, e);
                        const t = yield this.http.sendRequest(e.url, e.request);
                        return e.response = t,
                        0 !== t.status_code ? _.Y.ctxError(this.ctx, `Http Response SeqId -> ${e.seqId}`, e.response) : _.Y.ctxDebug(this.ctx, `Http Response SeqId -> ${e.seqId}`, e.response),
                        e
                    } catch (e) {
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "network error",
                            type: T.NI.NetworkError,
                            innerError: e,
                            allowRetry: !0,
                            sender: this,
                            ignoreEvent: !0
                        })
                    } finally {
                        this.reqMap.delete(e.seqId)
                    }
                }
                ))
            }
            sendByWs(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    e.method = "ws";
                    const t = g(e.request)
                      , n = this.inSignCommandList(e.cmd) ? this.frontierSign(t) : {}
                      , o = Object.assign(Object.assign({}, n), this.ctx.option.headers)
                      , r = c.m.Frame.create({
                        service: this.ctx.option.service,
                        method: this.ctx.option.method,
                        headers: Object.entries(o).map((([e,t])=>({
                            key: e,
                            value: t
                        }))),
                        seqid: a.fromNumber(e.seqId),
                        logid: a.fromNumber(Date.now()),
                        payload_type: "pb",
                        payload: t
                    });
                    e.frame = r;
                    try {
                        this.reqMap.set(e.seqId, e),
                        _.Y.ctxDebug(this.ctx, `WS Request SeqId -> ${e.seqId}`, e.request),
                        this.ws.send(m(r))
                    } catch (t) {
                        throw this.reqMap.delete(e.seqId),
                        new P.G({
                            ctx: this.ctx,
                            msg: "network error",
                            type: T.NI.NetworkError,
                            innerError: t,
                            allowRetry: !0,
                            sender: this
                        })
                    }
                    return new Promise(((t,n)=>{
                        e.wsPromise = {
                            resolve: t,
                            reject: n
                        }
                    }
                    ))
                }
                ))
            }
            receiveRaw(e) {
                if (this.resetWsHeartbeat(),
                "hi" !== e.toString())
                    try {
                        const t = b(this.ctx, e);
                        if (t.service !== this.ctx.option.service && !this.ctx.option.acceptIncorrectFrame)
                            return _.Y.ctxDebug(this.ctx, `WS Response dropped, local serviceId=${this.ctx.option.service}, message=${t.service}`),
                            void this.resolve(s.Uk.EventBus).emit(T.c5.WebSocketReceiveUnexpectedFrame, this, t);
                        let {payload: n} = t;
                        if (null == n)
                            return void _.Y.ctxWarn(this.ctx, "payload undefined or null");
                        if ("__lz4" === t.payload_encoding) {
                            let e = new Uint8Array(10 * n.length)
                              , t = 0;
                            if (t = Y(n, e),
                            (t < 0 || t > e.length || t < n.length) && (_.Y.ctxDebug(this.ctx, "WS response with lz4 compress, but first time decompressed failed, try second time"),
                            e = new Uint8Array(1024e3),
                            t = Y(n, e),
                            t < 0 || t > e.length || t < n.length))
                                return void _.Y.ctxWarn(this.ctx, "WS response with lz4 compress, try second time fail.");
                            n = e.slice(0, t)
                        }
                        try {
                            const e = f(this.ctx, n)
                              , o = c.m.Response.create(e);
                            if (!this.resolve(s.Uk.InboxType).isValidInbox(o.inbox_type) && o.sequence_id.eq(0))
                                return void _.Y.ctxWarn(this.ctx, `WS Push dropped, local inboxType=${this.ctx.option.inboxType}, message=${o.inbox_type}`, "resp:", o);
                            const r = o.sequence_id.toNumber();
                            let i = this.reqMap.get(r);
                            i ? (0 !== o.status_code ? _.Y.ctxError(this.ctx, `WS Response SeqId -> ${o.sequence_id}`, o) : _.Y.ctxDebug(this.ctx, `WS Response SeqId -> ${o.sequence_id}`, o),
                            i.response = o,
                            i.wsPromise.resolve(i),
                            this.reqMap.delete(r)) : o.sequence_id.eq(0) ? (_.Y.ctxDebug(this.ctx, "WS Push", o),
                            i = new F.F(this.ctx,o.cmd),
                            i.frame = t,
                            i.response = o,
                            i.seqId = o.sequence_id.toNumber(),
                            this.receive(i)) : _.Y.ctxWarn(this.ctx, "WS Response dropped, no handler", o)
                        } catch (e) {
                            _.Y.ctxWarn(this.ctx, "WS Response dropped, IM Response deserialize fail, hex dump:", e, "frame:", t)
                        }
                    } catch (e) {
                        _.Y.ctxWarn(this.ctx, "WS Response dropped, Frame deserialize fail, hex dump: ", e)
                    }
            }
            send(e, t) {
                var n, r, i, a, l, d, u, p, v, y;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (t.useBeacon)
                        return yield this.sendByBeacon(e),
                        e.response = c.m.Response.create({}),
                        e;
                    let h = null !== (n = t.maxWsRetryTimes) && void 0 !== n ? n : 3
                      , g = 0 === h ? null !== (r = t.maxHttpRetryTimes) && void 0 !== r ? r : 3 : (null !== (i = t.maxHttpRetryTimes) && void 0 !== i ? i : null === (a = this.ws) || void 0 === a ? void 0 : a.isOpen()) ? 1 : 3;
                    0 === g && (g = 1),
                    S.u.performanceNow() - this.wsLastReceiveTime - 1.5 * this.heartbeatInterval > this.maxEmptyWindow && (null === (l = this.ws) || void 0 === l ? void 0 : l.isOpen()) && (h = 0,
                    g = null !== (d = t.maxHttpRetryTimes) && void 0 !== d ? d : 3,
                    _.Y.ctxWarn(this.ctx, "ws idle too long, fallback to http"));
                    let f = 0
                      , m = 0;
                    const b = ()=>{
                        let t = !1;
                        const n = new Promise(((n,o)=>{
                            setTimeout((()=>{
                                t || (this.reqMap.delete(e.seqId),
                                o(new P.G({
                                    ctx: this.ctx,
                                    msg: "request timeout",
                                    type: T.NI.NetworkError,
                                    allowRetry: !0,
                                    ignoreEvent: !0,
                                    sender: this
                                })))
                            }
                            ), this.ctx.option.timeout)
                        }
                        ));
                        return Promise.race([n, (()=>(0,
                        o.__awaiter)(this, void 0, void 0, (function*() {
                            var n;
                            let o, r = !1;
                            if (f < h && (null === (n = this.ws) || void 0 === n ? void 0 : n.isOpen()) && (r = !0),
                            0 !== h && f >= h && 0 === m && void 0 !== this.ws && (_.Y.ctxWarn(this.ctx, "fallback to http"),
                            r = !1),
                            m >= g)
                                throw new P.G({
                                    ctx: this.ctx,
                                    msg: "http retry times limit exceeded",
                                    type: T.NI.NetworkError,
                                    sender: this,
                                    args: {
                                        cmd: e.cmd,
                                        seqId: e.seqId
                                    }
                                });
                            r ? (f++,
                            o = this.sendByWs(e)) : (m++,
                            o = this.sendByHttp(e));
                            try {
                                const n = yield o;
                                t = !0,
                                this.reqMap.delete(e.seqId);
                                const {request: r, response: i} = n;
                                if (this.resolve(s.Uk.Monitor).emitNetwork(r, i),
                                i.status_code === T.NI.ResourceExhausted)
                                    throw new P.G({
                                        ctx: this.ctx,
                                        msg: "demotion enabled",
                                        type: T.NI.ResourceExhausted,
                                        allowRetry: !1,
                                        sender: this,
                                        logid: null == i ? void 0 : i.log_id
                                    });
                                if (i.status_code === T.NI.InternalError && (i.error_desc.includes("i/o timeout") || i.error_desc.includes("rpc timeout") || i.error_desc.includes("RPC timeout")) || i.error_desc.includes("connection timeout") || i.error_desc.includes("request timeout"))
                                    throw new P.G({
                                        ctx: this.ctx,
                                        msg: "request timeout",
                                        type: T.NI.NetworkError,
                                        allowRetry: !0,
                                        ignoreEvent: !0,
                                        sender: this,
                                        logid: null == i ? void 0 : i.log_id
                                    });
                                return n.retryTimes = f + m,
                                n
                            } catch (e) {
                                throw e.type ? e : new P.G({
                                    ctx: this.ctx,
                                    msg: "request error",
                                    type: T.NI.NetworkError,
                                    allowRetry: e.allowRetry,
                                    innerError: e,
                                    sender: this
                                })
                            } finally {
                                this.reqMap.delete(e.seqId)
                            }
                        }
                        )))()])
                    }
                    ;
                    let k;
                    for (; ; ) {
                        if (e.retryTimes++,
                        e.retryTimes >= 10) {
                            e.error = new P.G({
                                ctx: this.ctx,
                                msg: "too much retry",
                                type: T.NI.NetworkError,
                                sender: this
                            });
                            break
                        }
                        try {
                            if (e.startTime = Date.now(),
                            k = yield b(),
                            e.endTime = Date.now(),
                            "function" == typeof (null === (p = null === (u = null == k ? void 0 : k.response) || void 0 === u ? void 0 : u.server_execution_end_time) || void 0 === p ? void 0 : p.toNumber) && "function" == typeof (null === (y = null === (v = null == k ? void 0 : k.response) || void 0 === v ? void 0 : v.request_arrived_time) || void 0 === y ? void 0 : y.toNumber) && S.u.putTimeDelta(e.startTime, e.endTime, k.response.server_execution_end_time.toNumber(), k.response.request_arrived_time.toNumber()),
                            void 0 !== k)
                                break
                        } catch (t) {
                            if (e.error = t,
                            !0 === (null == t ? void 0 : t.allowRetry)) {
                                let n = 500 + 100 * e.retryTimes + 100 * Math.random();
                                n > 2e3 && (n = 2e3),
                                _.Y.ctxDebug(this.ctx, `req ${e.seqId} failed, retrying @ attempt ${e.retryTimes}, inner err:`, t),
                                yield new Promise((e=>setTimeout(e, n)));
                                continue
                            }
                            break
                        }
                    }
                    if (void 0 === k)
                        throw void 0 === e.error && (e.error = new P.G({
                            ctx: this.ctx,
                            msg: "unknown error",
                            type: T.NI.NetworkError,
                            sender: this
                        })),
                        e.error;
                    return k
                }
                ))
            }
            sendByHttpTo(e, t, n) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return "undefined" != typeof fetch ? (yield fetch(e)).arrayBuffer() : this.http.send(e, t, n)
                }
                ))
            }
            receive(e) {
                this.resolve(s.Uk.Monitor).emitNetwork(null, e.response),
                this.onMessage.next(e.response, this)
            }
            onWsClose() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    _.Y.ctxDebug(this.ctx, "ws closed"),
                    this.resolve(s.Uk.EventBus).emit(T.c5.WebSocketDisconnected, this, this.ws)
                }
                ))
            }
            prepareWs() {
                this.ctx.option.webSocketLevel !== T._.Disable && (this.ws.onMessage.subscribe((e=>this.receiveRaw(e))),
                this.ws.onClose.subscribe((()=>this.onWsClose())),
                this.ws.onError.subscribe((()=>this.onWsClose())),
                this.ws.onOpen.subscribe((()=>{
                    _.Y.ctxDebug(this.ctx, "ws connected"),
                    this.resolve(s.Uk.EventBus).emit(T.c5.WebSocketConnected, this, this.ws),
                    this.manuallyClosed = !1
                }
                )),
                this.wsCheckTicker = new X(this.ctx,this.heartbeatInterval),
                this.wsCheckTicker.onTick.subscribe((()=>(0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    var e, t, n, o, r;
                    const i = S.u.performanceNow() - this.wsLastReceiveTime + this.heartbeatInterval / 1.5;
                    if ((yield this.net.getConnectionStatus()) !== k.Disconnected)
                        if (null === (e = this.ws) || void 0 === e ? void 0 : e.isOpen())
                            if (i > this.maxEmptyWindow) {
                                _.Y.ctxDebug(this.ctx, "not receive any packet in window, ws close connection"),
                                this.resolve(s.Uk.Monitor).emitMetrics(S.U.WebSocketConnectNoHeartbeat, {
                                    count: 1
                                }, {
                                    url: null !== (r = null === (o = this.ws) || void 0 === o ? void 0 : o.url) && void 0 !== r ? r : "unknown"
                                });
                                try {
                                    yield this.connectWs(!0)
                                } catch (e) {
                                    _.Y.ctxWarn(this.ctx, "ws ticker window connect err:", e)
                                }
                            } else
                                i > this.heartbeatInterval && this.sendWsHeartbeat();
                        else {
                            _.Y.ctxDebug(this.ctx, "ws ticker try connect if closed"),
                            this.resolve(s.Uk.Monitor).emitMetrics(S.U.WebSocketConnectAfterClose, {
                                count: 1
                            }, {
                                url: null !== (n = null === (t = this.ws) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : "unknown"
                            });
                            try {
                                yield this.connectWs(!0)
                            } catch (e) {
                                _.Y.ctxWarn(this.ctx, "ws ticker try connect err:", e)
                            }
                        }
                    else
                        _.Y.ctxDebug(this.ctx, "network disconnected, skip ws check")
                }
                )))))
            }
            closeWs(e) {
                var t, n;
                this.ctx.option.webSocketLevel !== T._.Disable && (null === (t = this.ws) || void 0 === t || t.close(),
                this.manuallyClosed = !e,
                this.manuallyClosed && (null === (n = this.wsCheckTicker) || void 0 === n || n.stop()))
            }
            connectWs(e) {
                var t, n, r;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (this.ctx.option.webSocketLevel === T._.Disable)
                        return;
                    if (this.manuallyClosed && e)
                        return void _.Y.ctxDebug(this.ctx, "ignore connect since manually closed");
                    this.closeWs(!0);
                    const o = S.u.performanceNow();
                    try {
                        yield this.ws.performOpen(),
                        this.resolve(s.Uk.Monitor).emitMetrics(S.U.WsConnect, {
                            ws_cost: S.u.performanceNow() - o
                        }, {
                            error_code: "0",
                            url: null !== (t = this.ws.option.frontierUrl) && void 0 !== t ? t : "unknown"
                        }),
                        this.resetWsHeartbeat(),
                        null === (n = this.wsCheckTicker) || void 0 === n || n.start()
                    } catch (e) {
                        throw this.resolve(s.Uk.Monitor).emitMetrics(S.U.WsConnect, {
                            ws_cost: S.u.performanceNow() - o
                        }, {
                            error_code: "1",
                            url: null !== (r = this.ws.option.frontierUrl) && void 0 !== r ? r : "unknown"
                        }),
                        e
                    }
                }
                ))
            }
            sendWsHeartbeat() {
                var e;
                (null === (e = this.ws) || void 0 === e ? void 0 : e.isOpen()) ? this.ws.send("hi") : _.Y.ctxWarn(this.ctx, "ws not connect but try to send heartbeat")
            }
            resetWsHeartbeat() {
                this.wsLastReceiveTime = S.u.performanceNow()
            }
        }
        const J = {
            appId: 0,
            token: "",
            deviceId: "",
            userId: "",
            biz: "",
            apiUrl: "",
            frontierUrl: "",
            fpId: 89,
            appKey: "e0f82475ab9dbf5717d18b4a9c0d7fd0",
            service: 2,
            method: 1,
            authType: c.m.AuthType.TOKEN_AUTH,
            inboxType: [0],
            headers: {},
            httpHeaders: {},
            devicePlatform: "web",
            timeout: 2e3,
            pullInterval: 3e4,
            throttle: 100,
            triggerStrategy: {
                [T.c5.ConversationChange]: T.zn.Debounce,
                [T.c5.MessageUpsert]: T.zn.Debounce,
                [T.c5.ConversationUpsert]: T.zn.ThrottleWithArgs
            },
            maxMessageCount: 1e3
        };
        function ee(e, t, n) {
            for (const o of Object.keys(n))
                "string" != typeof n[o] && _.Y.ctxError(e, `${t}[${o}] is not a string!`)
        }
        var te, ne = n(63912), oe = n(64467), re = n(69480), ie = n(88974);
        class se extends s.mA {
            constructor(e) {
                super(e),
                this.refreshBuffer = [],
                this.refreshDebounce = D((()=>{
                    this.triggerRefresh()
                }
                ), 1e3, !0),
                this.conversations = new Map
            }
            applyLocal(e) {
                e.forEach((e=>{
                    this.conversations.set(e.id, e)
                }
                ))
            }
            clearAll() {
                this.conversations.clear()
            }
            getWithCreateLocal(e, t, n, o) {
                let r = this.getRaw(e);
                if (!r) {
                    const i = new G.r(this.ctx);
                    i.coreInfo = new oe._(i),
                    i.settingInfo = new re.H(i),
                    i.id = e,
                    i.shortId = t,
                    i.type = n,
                    i.isOffline = !0,
                    r = i,
                    void 0 !== o ? i.coreInfo.inboxType = o : void 0 === o && n === c.m.ConversationType.ONE_TO_ONE_CHAT && 4 === e.split(":").length && (i.coreInfo.inboxType = Number.parseInt(e.split(":")[0], 10)),
                    _.Y.ctxDebug(this.ctx, "create local conv:", i),
                    this.upsert(r)
                }
                return r
            }
            upsert(e) {
                var t;
                if (void 0 === e)
                    throw new P.G({
                        ctx: this.ctx,
                        msg: "upsert undefined conv",
                        type: T.NI.InvalidParam,
                        sender: this
                    });
                if (!this.resolve(s.Uk.InboxType).isValidInbox(e.inboxType))
                    throw new P.G({
                        ctx: this.ctx,
                        msg: `invalid inbox: ${e.inboxType}`,
                        type: T.NI.InvalidParam,
                        sender: this
                    });
                let n = this.conversations.get(e.id);
                if (n && e.isOffline && (_.Y.ctxDebug(this.ctx, `local exist, try to use offline upsert, ignore, short id: ${n.shortId} with offline:${e.shortId}`),
                !n.isOffline))
                    return _.Y.ctxDebug(this.ctx, "local is online, ignore update"),
                    n;
                if (n) {
                    _.Y.ctxDebug(this.ctx, `merge conversation local=${n.version.toString()}:`, n, `new=${e.version.toString()}:`, e);
                    const t = n.coreInfo || new oe._(n)
                      , o = n.settingInfo || new re.H(n);
                    n = Object.assign(n, e),
                    n.coreInfo = t.mergeCore(e.coreInfo),
                    n.settingInfo = o.mergeSetting(e.settingInfo),
                    n.forceRefreshUnreadCount()
                }
                return this.conversations.set(e.id, null != n ? n : e),
                null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t || t.upsertConversation(null != n ? n : e),
                this.ctx.initResult === T.rb.Succeeded && (this.resolve(s.Uk.EventBus).emit(T.c5.ConversationUpsert, this, null != n ? n : e),
                this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this)),
                e
            }
            refreshLocalAsync() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const e = this.getConversationArray().filter((e=>e.isOffline));
                    if (0 !== e.length)
                        return this.refreshAsync(e)
                }
                ))
            }
            refreshLocal() {
                const e = this.getConversationArray().filter((e=>e.isOffline));
                0 !== e.length && this.refresh(e)
            }
            triggerRefresh() {
                if (0 === this.refreshBuffer.length)
                    return;
                _.Y.ctxDebug(this.ctx, "clear refresh buffer:", this.refreshBuffer);
                const e = [...this.refreshBuffer];
                this.refreshBuffer = [],
                this.refreshAsync(e)
            }
            refresh(e) {
                var t;
                const n = (0,
                ie.sS)(e)
                  , o = [];
                if (0 === this.refreshBuffer.length)
                    o.push(...n);
                else {
                    const e = {};
                    this.refreshBuffer.forEach((t=>e[t.id] = !0)),
                    n.forEach((t=>{
                        e[t.id] || o.push(t)
                    }
                    ))
                }
                o.length > 0 && this.refreshBuffer.push(...o);
                const r = null !== (t = this.ctx.option.conversationRefreshCount) && void 0 !== t ? t : T.HF.conversationRefreshCount;
                this.refreshBuffer.length >= r ? this.triggerRefresh() : this.refreshDebounce()
            }
            refreshAsync(e) {
                var t, n, r;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = null !== (t = (0,
                    ie.sS)(e)) && void 0 !== t ? t : this.refreshBuffer;
                    if (0 === o.length)
                        return [];
                    _.Y.ctxDebug(this.ctx, "refresh conv: ", o);
                    const i = []
                      , c = (0,
                    ie.vM)(o, (e=>e.inboxType.toString()));
                    for (const e of Object.keys(c)) {
                        const t = (0,
                        ie.F3)(c[e], 5);
                        for (const o of t)
                            try {
                                const t = yield this.resolve(s.Uk.CoreApi).GetConversationInfoListV2({
                                    conversations: o.map((e=>({
                                        conversationId: e.id,
                                        conversationShortId: a.fromString(e.shortId),
                                        conversationType: e.type
                                    }))),
                                    inboxType: Number.parseInt(e, 10)
                                })
                                  , r = (null === (n = null == t ? void 0 : t.body) || void 0 === n ? void 0 : n.get_conversation_info_list_v2_body).conversation_info_list;
                                o.forEach((e=>{
                                    0 === r.filter((t=>t.conversation_id === e.id)).length && (_.Y.ctxDebug(this.ctx, "delete local conv, may not exist online: ", e),
                                    this.delete(e.id))
                                }
                                )),
                                r.forEach((e=>{
                                    const n = this.upsert(G.r.fromServerConversation(this.ctx, e, null == t ? void 0 : t.log_id));
                                    i.push(n)
                                }
                                ))
                            } catch (e) {
                                e && (null == e ? void 0 : e.type) === T.NI.InternalError && (null === (r = null == e ? void 0 : e.message) || void 0 === r ? void 0 : r.includes("request.MGet empty")) ? o.forEach((e=>{
                                    _.Y.ctxDebug(this.ctx, "delete local conv, may not exist online: ", e),
                                    this.delete(e.id)
                                }
                                )) : _.Y.ctxError(this.ctx, "unknown refresh error:", e)
                            }
                    }
                    return i
                }
                ))
            }
            get(e) {
                const t = this.getRaw(e);
                if (!t)
                    throw new P.G({
                        ctx: this.ctx,
                        msg: `conversation ${e} not exist in local`,
                        type: T.NI.ConversationNotExist,
                        sender: this,
                        args: {
                            conversationId: e
                        }
                    });
                return t
            }
            getWithShortIdRaw(e) {
                for (const t of this.conversations.values())
                    if (t.shortId === e)
                        return t;
                return null
            }
            getWithOnline(e, t, n) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let o = this.getRaw(e);
                    if (!o || o.isOffline) {
                        if (!t || !n)
                            throw new P.G({
                                ctx: this.ctx,
                                type: T.NI.InvalidParam,
                                msg: "no shortId and type provided",
                                sender: this
                            });
                        o = this.getWithCreateLocal(e, t, n)
                    }
                    return yield this.refreshAsync(o),
                    this.get(e)
                }
                ))
            }
            getRaw(e) {
                return this.conversations.get(e)
            }
            getConversationArray(e=se.conversationFilter) {
                return Array.from(this.conversations.values()).filter(e).map((e=>({
                    conv: e,
                    rankScore: e.rankScore
                }))).sort(se.conversationComparator).map((e=>e.conv))
            }
            withConversation(e) {
                return t=>t(this.get(e))
            }
            delete(e, t=!1) {
                var n;
                const o = this.getRaw(e);
                o && (t || this.getContext().resolve(s.Uk.MessageManager).clearConversation(e),
                this.conversations.delete(e),
                null === (n = this.resolve(s.Uk.DbProxy)) || void 0 === n || n.deleteConversation(o),
                this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this),
                this.resolve(s.Uk.EventBus).emit(T.c5.ConversationDelete, this, o))
            }
            markRead(e, t) {
                const n = this.get(e);
                return n.settingInfo.readIndex.gt(t) ? n : (n.settingInfo.readIndex = t,
                this.upsert(n))
            }
            leave(e) {
                var t;
                const n = this.get(e);
                n && (n.isMember = !1,
                null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t || t.upsertConversation(n),
                this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this),
                this.resolve(s.Uk.EventBus).emit(T.c5.ConversationLeave, this, n))
            }
            refreshTicket(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = this.get(e)
                      , n = yield this.resolve(s.Uk.CoreApi).GetTicket({
                        conversationType: t.type,
                        shortId: a.fromString(t.shortId),
                        toId: a.fromString(t.type === c.m.ConversationType.ONE_TO_ONE_CHAT ? t.toParticipantUserId : t.shortId),
                        inboxType: t.inboxType
                    });
                    t.ticket = null == n ? void 0 : n.ticket,
                    this.upsert(t),
                    _.Y.ctxDebug(this.ctx, "refresh ticket for conv:", t)
                }
                ))
            }
            static conversationFilter(e) {
                return 0 === e.mode && e.isMember
            }
            dispose() {
                this.clearAll()
            }
        }
        se.conversationComparator = (e,t)=>t.rankScore - e.rankScore,
        function(e) {
            e[e.MarkConversationRead = 1] = "MarkConversationRead",
            e[e.DeleteMessage = 2] = "DeleteMessage",
            e[e.DeleteConversation = 3] = "DeleteConversation",
            e[e.SettingInfoUpdate = 4] = "SettingInfoUpdate",
            e[e.CoreInfoUpdate = 6] = "CoreInfoUpdate",
            e[e.ParticipantUpdate = 7] = "ParticipantUpdate",
            e[e.FirstMessage = 8] = "FirstMessage"
        }(te || (te = {}));
        class ae extends V.v {
            static fromMessage(e) {
                const t = e;
                return t.contentObj = l.parse(e.content),
                t.commandSubType = t.contentObj.command_type,
                t
            }
        }
        var ce, le, de = n(85572), ue = n(94035);
        class _e extends de.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e.data.isCommandMsg && (e.needContinue = !1,
                    yield this.parseCommand(e.data)),
                    e
                }
                ))
            }
            parseCommand(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = ae.fromMessage(e);
                    switch (t.contentObj.command_type) {
                    case te.DeleteConversation:
                        this.handleDeleteConversationCMD(t);
                        break;
                    case te.DeleteMessage:
                        this.handleDeleteMessageCMD(t);
                        break;
                    case te.MarkConversationRead:
                        this.handleMarkConversationRead(t);
                        break;
                    case te.SettingInfoUpdate:
                        yield this.handleUpdateSettingInfo(t);
                        break;
                    case te.CoreInfoUpdate:
                        yield this.handleUpdateCoreInfo(t);
                        break;
                    case te.ParticipantUpdate:
                        yield this.handleUpdateParticipant(t)
                    }
                    this.resolve(s.Uk.EventBus).emit(T.c5.ReceiveCommandMessage, this, t)
                }
                ))
            }
            handleDeleteConversationCMD(e) {
                const {conversation_id: t} = e.contentObj;
                this.resolve(s.Uk.ConversationManager).delete(t)
            }
            handleDeleteMessageCMD(e) {
                const {conversation_id: t, message_id: n} = e.contentObj;
                this.resolve(s.Uk.MessageManager).delete(t, n.toString())
            }
            handleMarkConversationRead(e) {
                if (this.ctx.initResult === T.rb.Succeeded) {
                    const {conversation_id: t, read_index: n} = e.contentObj;
                    this.resolve(s.Uk.ConversationManager).markRead(t, a.fromValue(n))
                }
            }
            handleUpdateSettingInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (this.ctx.initResult === T.rb.Succeeded) {
                        const {conversation_version: t} = e.contentObj
                          , n = a.fromValue(null != t ? t : a.MAX_VALUE)
                          , o = this.resolve(s.Uk.ConversationManager).getWithCreateLocal(e.conversationId, e.conversationShortId.toString(), e.conversationType);
                        o.settingInfo.version.lte(n) ? this.resolve(s.Uk.ConversationManager).refresh(o) : _.Y.ctxWarn(this.ctx, "ignore online update setting info cmd, local version: ", o.settingInfo.version.toString(), "online: ", n.toString())
                    }
                }
                ))
            }
            handleUpdateCoreInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (this.ctx.initResult === T.rb.Succeeded) {
                        const {group_version: t} = e.contentObj
                          , n = a.fromValue(t)
                          , o = this.resolve(s.Uk.ConversationManager).getWithCreateLocal(e.conversationId, e.conversationShortId.toString(), e.conversationType);
                        o.coreInfo.version.lte(n) ? this.resolve(s.Uk.ConversationManager).refresh(o) : _.Y.ctxWarn(this.ctx, "ignore online update core info cmd, local version: ", o.coreInfo.version.toString(), "online: ", t.toString())
                    }
                }
                ))
            }
            handleUpdateParticipant(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (this.ctx.initResult === T.rb.Succeeded) {
                        const {added_participant: t, modified_participant: n, removed_participant: o} = e.contentObj;
                        if ((null == t ? void 0 : t.length) > 0) {
                            const n = t.map(String)
                              , o = [];
                            n.forEach((t=>{
                                const n = ue.Q.fakeParticipant(this.ctx, t, {
                                    type: e.conversationType,
                                    id: e.conversationId
                                });
                                o.push(n)
                            }
                            )),
                            this.resolve(s.Uk.ParticipantManager).addBatch(e.conversationId, o)
                        }
                        if ((null == n ? void 0 : n.length) > 0) {
                            const t = this.resolve(s.Uk.ConversationManager).get(e.conversationId)
                              , o = n.map(String);
                            this.resolve(s.Uk.ParticipantManager).updateWithUserIdAsync(t, o)
                        }
                        if ((null == o ? void 0 : o.length) > 0) {
                            const t = o.map(String);
                            t.includes(this.ctx.option.userId) && this.resolve(s.Uk.ConversationManager).leave(e.conversationId),
                            this.resolve(s.Uk.ParticipantManager).delete(e.conversationId, t)
                        }
                    }
                }
                ))
            }
        }
        class pe extends de.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = e.data.conversationId;
                    if (!t)
                        return _.Y.ctxWarn(this.ctx, "no conversation provided in message, ignore", e.data),
                        e.needContinue = !1,
                        e;
                    const n = this.resolve(s.Uk.ConversationManager).getRaw(t);
                    if (e.data.type === c.m.MessageType.MESSAGE_TYPE_CONVERSATION_DESTROY && n)
                        return this.resolve(s.Uk.ConversationManager).delete(t),
                        this.resolve(s.Uk.EventBus).emit(T.c5.ConversationDissolve, this, n),
                        this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this),
                        e.needContinue = !1,
                        e;
                    if (!e.data.isNormalMsg && void 0 === n)
                        return e.needContinue = !1,
                        this.ctx.initResult === T.rb.Succeeded && _.Y.ctxDebug(this.ctx, `ignore process, conv: ${e.data.conversationId} not exist for cmd msg`, e.data),
                        e;
                    const o = e.data
                      , r = this.resolve(s.Uk.ConversationManager).getWithCreateLocal(o.conversationId, o.conversationShortId, o.conversationType);
                    return e.conv = r,
                    e
                }
                ))
            }
        }
        class ve extends de.f {
            process(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!e.data.isNormalMsg)
                        return e;
                    const n = this.resolve(s.Uk.MessageManager).getRaw(null === (t = e.conv) || void 0 === t ? void 0 : t.id, e.data.clientId)
                      , o = void 0 !== e.data.source && (e.data.source === T.v$.Online || e.data.source === T.v$.UserInbox)
                      , r = void 0 !== (null == n ? void 0 : n.flightStatus) && o;
                    this.resolve(s.Uk.MessageManager).upsert(e.data);
                    const i = this.resolve(s.Uk.MessageManager).getRaw(e.data.conversationId, e.data.clientId);
                    return n ? r && i.flightStatus !== T.b3.Received && (i.flightStatus = T.b3.Received,
                    this.ctx.initResult === T.rb.Succeeded && this.resolve(s.Uk.EventBus).emit(T.c5.ReceiveSelfMessage, this, i),
                    this.resolve(s.Uk.MessageManager).upsert(i)) : o && !e.data.isStrangerMessage && (e.data.sender !== this.ctx.option.userId ? this.ctx.initResult === T.rb.Succeeded && this.resolve(s.Uk.EventBus).emit(T.c5.ReceiveNewMessage, this, i) : this.ctx.initResult === T.rb.Succeeded && this.resolve(s.Uk.EventBus).emit(T.c5.ReceiveSelfMessage, this, i)),
                    e
                }
                ))
            }
        }
        class ye extends de.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e.data.type === c.m.MessageType.MESSAGE_TYPE_UPDATE_MESSAGE_EXT && (e.needContinue = !1,
                    this.handleUpdateExt(e)),
                    e
                }
                ))
            }
            handleUpdateExt(e) {
                var t, n, o, r;
                const i = null === (t = e.data) || void 0 === t ? void 0 : t.ext[T.v9.ServerMessageId];
                if (!i)
                    throw new P.G({
                        ctx: this.ctx,
                        type: T.NI.InvalidServerId,
                        msg: `message ${e.data} has no s:server_message_id`,
                        sender: this
                    });
                const a = this.resolve(s.Uk.MessageManager).getByServerIdRaw(null === (n = e.conv) || void 0 === n ? void 0 : n.id, i);
                if (a)
                    if (a.version.gt(e.data.version))
                        _.Y.ctxWarn(this.ctx, `local msg version: ${a.version.toString()} > online msg version: ${e.data.version.toString()}, ignore, local msg:`, a, "online msg:", e.data);
                    else {
                        if (a.ext = e.data.ext,
                        a.version = e.data.version,
                        this.resolve(s.Uk.MessageManager).upsert(a),
                        !a.visible) {
                            const t = this.resolve(s.Uk.MessageManager).getList(e.conv.id);
                            for (const e of t)
                                (null === (r = null === (o = e.referenceInfo) || void 0 === o ? void 0 : o.referenced_message_id) || void 0 === r ? void 0 : r.toString()) === a.serverId && (e.referenceInfo.referenced_message_status = c.m.MessageStatus.INVISIBLE,
                                this.resolve(s.Uk.MessageManager).upsert(e))
                        }
                        this.resolve(s.Uk.EventBus).emit(T.c5.ReceiveNewUpdateExtMessage, this, e.data),
                        "true" === e.data.ext[T.v9.IsRecalled] && this.resolve(s.Uk.MessageManager).markRecalled(e.conv.id, a.serverId)
                    }
            }
        }
        class he extends s.mA {
            constructor(e) {
                super(e),
                this.messages = new Map,
                this.processors = [new pe(this.ctx), new _e(this.ctx), new ye(this.ctx), new ve(this.ctx)]
            }
            applyLocal(e) {
                e.forEach((e=>{
                    this.messages.has(e.conversationId) || this.messages.set(e.conversationId, new Map),
                    this.messages.get(e.conversationId).set(e.clientId, e)
                }
                ))
            }
            clearAll() {
                this.messages.clear()
            }
            get(e, t) {
                const n = this.getRaw(e, t);
                if (!n)
                    throw new P.G({
                        ctx: this.ctx,
                        type: T.NI.MessageNotExist,
                        msg: `message ${t} @ ${e} not exist in local`,
                        sender: this
                    });
                return n
            }
            getRaw(e, t) {
                return this.getConversationMap(e).get(t)
            }
            getRawMap() {
                return this.messages
            }
            getByServerIdRaw(e, t) {
                const n = this.getConversationMap(e)
                  , o = Array.from(n.values()).filter((e=>e.serverId === t));
                if (0 !== o.length)
                    return this.get(e, o[0].clientId)
            }
            getByServerId(e, t) {
                const n = this.getConversationMap(e)
                  , o = Array.from(n.values()).filter((e=>e.serverId === t));
                if (0 === o.length)
                    throw new P.G({
                        ctx: this.ctx,
                        type: T.NI.MessageNotExist,
                        msg: `message ${t} @ ${e} not exist in local`,
                        sender: this
                    });
                return this.get(e, o[0].clientId)
            }
            getList(e) {
                const t = this.getConversationMap(e);
                return Array.from(t.values()).sort(he.messageComparator)
            }
            upsert(e) {
                var t;
                if (e.isSpecialMessage)
                    return void _.Y.ctxWarn(this.ctx, "unexpected special message to upsert:", e);
                const n = this.getConversationMap(e.conversationId);
                if (this.ctx.option.maxMessageCount) {
                    const e = Math.max(200, Math.min(this.ctx.option.maxMessageCount, 2e3));
                    if (n.size >= e) {
                        let t = ~~(e / 5);
                        for (const e of n.keys()) {
                            if (t <= 0)
                                break;
                            n.delete(e),
                            t--
                        }
                    }
                }
                const o = n.get(e.clientId);
                if (o && o.type === e.type ? (["referenceInfo"].forEach((t=>{
                    void 0 === e[t] && delete o[t]
                }
                )),
                e = o.merge(e)) : o && o.type !== e.type && _.Y.ctxWarn(this.ctx, "try to merge different msg:", o, e),
                n.set(e.clientId, e),
                null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t || t.upsertMessage(e),
                this.resolve(s.Uk.EventBus).emit(T.c5.MessageUpsert, this, e),
                this.ctx.initResult === T.rb.Succeeded) {
                    this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this);
                    const t = this.getContext().resolve(s.Uk.ConversationManager).getRaw(e.conversationId);
                    this.resolve(s.Uk.EventBus).emit(T.c5.ConversationUpsert, this, t),
                    void 0 !== o && (null == t || t.forceRefreshUnreadCount())
                }
            }
            getConversationMap(e) {
                let t = this.messages.get(e);
                return t || (t = new Map,
                this.messages.set(e, t)),
                t
            }
            processNewMessage(e, t) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.ext || (e.ext = {}),
                    e.source = t,
                    e.type >= 0)
                        return this.processMessage(e);
                    throw new P.G({
                        ctx: this.ctx,
                        type: T.NI.UnknownMessageType,
                        msg: `unknown message type: ${e.type} for msg:${e.clientId}`,
                        sender: this
                    })
                }
                ))
            }
            processNewMessagesFromPull(e, t, n) {
                var r;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = e.map((e=>V.v.fromServerMessage(this.ctx, e, n)))
                      , i = new Map;
                    for (const e of o) {
                        e.ext || (e.ext = {});
                        const n = null === (r = i.get(e.conversationShortId)) || void 0 === r ? void 0 : r.indexInConversation;
                        n && !e.indexInConversation.lt(n) || i.set(e.conversationShortId, e),
                        yield this.processNewMessage(e, t)
                    }
                    return {
                        msgs: o,
                        conMap: i
                    }
                }
                ))
            }
            delete(e, t) {
                var n, o, r;
                const i = this.getConversationMap(e)
                  , a = Array.from(i.values()).filter((e=>e.serverId === t));
                if (0 === a.length)
                    return void _.Y.ctxDebug(this.ctx, `delete not exist msg: ${e}::${t}`);
                i.delete(a[0].clientId),
                null === (n = this.resolve(s.Uk.DbProxy)) || void 0 === n || n.deleteMessage(a[0]);
                const l = this.getList(e);
                for (const e of l)
                    (null === (r = null === (o = e.referenceInfo) || void 0 === o ? void 0 : o.referenced_message_id) || void 0 === r ? void 0 : r.toString()) === t && (e.referenceInfo.referenced_message_status = c.m.MessageStatus.DELETED,
                    this.upsert(e));
                const d = this.getContext().resolve(s.Uk.ConversationManager).get(e);
                this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this),
                this.resolve(s.Uk.EventBus).emit(T.c5.ConversationUpsert, this, d),
                this.resolve(s.Uk.EventBus).emit(T.c5.MessageUpsert, this, a[0]),
                this.resolve(s.Uk.EventBus).emit(T.c5.MessageDelete, this, a[0])
            }
            markRecalled(e, t, n) {
                var o, r;
                const i = this.getByServerId(e, t);
                i.ext || (i.ext = {}),
                i.ext[T.v9.IsRecalled] = "true",
                n && this.ctx.option.debug && (i.ext[T.v9.LocalLogId] = n),
                this.upsert(i);
                const a = this.getList(e);
                for (const e of a)
                    (null === (r = null === (o = e.referenceInfo) || void 0 === o ? void 0 : o.referenced_message_id) || void 0 === r ? void 0 : r.toString()) === t && (e.referenceInfo.referenced_message_status = c.m.MessageStatus.RECALLED,
                    this.upsert(e));
                const l = this.getContext().resolve(s.Uk.ConversationManager).get(e);
                this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this),
                this.resolve(s.Uk.EventBus).emit(T.c5.ConversationUpsert, this, l),
                this.resolve(s.Uk.EventBus).emit(T.c5.MessageUpsert, this, i),
                this.resolve(s.Uk.EventBus).emit(T.c5.MessageRecall, this, i)
            }
            clearConversation(e) {
                var t;
                const n = this.getContext().resolve(s.Uk.ConversationManager).get(e);
                this.messages.set(e, new Map),
                null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t || t.clearConversation(n),
                this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this),
                this.resolve(s.Uk.EventBus).emit(T.c5.ConversationUpsert, this, n)
            }
            injectProcessor(e) {
                this.processors.push(e)
            }
            processMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let t = {
                        needContinue: !0,
                        data: e
                    };
                    for (const e of this.processors)
                        if (t = yield e.process(t),
                        !t.needContinue)
                            break;
                    return t.data
                }
                ))
            }
            dispose() {
                this.messages.clear(),
                this.processors = []
            }
        }
        he.messageComparator = (e,t)=>e.orderInConversation.gt(t.orderInConversation) ? 1 : -1;
        class ge extends s.mA {
            constructor(e) {
                super(e),
                this.participants = new Map
            }
            applyLocal(e) {
                e.forEach((e=>{
                    this.participants.has(e.conversationId) || this.participants.set(e.conversationId, new Map),
                    this.participants.get(e.conversationId).set(e.userId.toString(), e)
                }
                ))
            }
            forceApplyLocal(e) {
                var t;
                const n = new Map;
                e.forEach((e=>{
                    n.set(e.userId.toString(), e)
                }
                )),
                this.participants.set(null === (t = e[0]) || void 0 === t ? void 0 : t.conversationId, n)
            }
            clearAll() {
                this.participants.clear()
            }
            updateWithUserIdAsync(e, t) {
                var n, r, i, c;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = t.map((e=>a.fromValue(e)))
                      , l = yield this.resolve(s.Uk.CoreApi).GetConversationParticipantByUserId({
                        conversationId: e.id,
                        conversationShortId: a.fromString(e.shortId),
                        conversationType: e.type,
                        inboxType: e.inboxType,
                        participants: o
                    })
                      , d = null !== (c = null === (i = null === (r = null === (n = null == l ? void 0 : l.body) || void 0 === n ? void 0 : n.mget_conversation_participants_body) || void 0 === r ? void 0 : r.participants) || void 0 === i ? void 0 : i.map((t=>ue.Q.fromServerParticipant(this.ctx, t, e, l.log_id)))) && void 0 !== c ? c : [];
                    this.upsertBatch(e.id, d)
                }
                ))
            }
            upsert(e, t, n=!1) {
                var o;
                let r = this.participants.get(e.toString());
                r || (r = new Map);
                let i = t;
                return i.userId = i.userId.toString(),
                r.has(t.userId.toString()) && (i = ue.Q.featLocalParticipant(r.get(t.userId.toString()), i)),
                r.set(t.userId.toString(), i),
                this.participants.set(e, r),
                n || this.resolve(s.Uk.EventBus).emit(T.c5.ParticipantUpsert, this, i),
                null === (o = this.resolve(s.Uk.DbProxy)) || void 0 === o || o.upsertParticipant(i),
                Array.from(r.values())
            }
            upsertBatch(e, t, n=!1) {
                return t.forEach((t=>this.upsert(e, t, n))),
                this.get(e)
            }
            addBatch(e, t) {
                const n = this.participants.get(e);
                return t.forEach((t=>{
                    if (!(null == n ? void 0 : n.has(t.userId.toString())) && (this.resolve(s.Uk.EventBus).emit(T.c5.ParticipantJoin, this, t),
                    t.userId.toString() === this.ctx.option.userId.toString())) {
                        const t = this.getContext().resolve(s.Uk.ConversationManager).get(e);
                        this.resolve(s.Uk.EventBus).emit(T.c5.ConversationJoin, this, t)
                    }
                    this.upsert(e, t)
                }
                )),
                this.get(e)
            }
            delete(e, t) {
                const n = this.participants.get(e);
                n && t.forEach((e=>{
                    var t;
                    const o = n.get(e.toString());
                    void 0 !== o && (n.delete(e.toString()),
                    this.resolve(s.Uk.EventBus).emit(T.c5.ParticipantLeave, this, o),
                    null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t || t.deleteParticipant(o))
                }
                ))
            }
            get(e) {
                const t = this.participants.get(e);
                if (t)
                    return Array.from(t.values());
                throw new P.G({
                    ctx: this.ctx,
                    type: T.NI.ConversationNotExist,
                    msg: `conversation ${e} participants is not loaded`,
                    sender: this,
                    args: {
                        conversationId: e
                    }
                })
            }
            getParticipant(e) {
                var t, n, o, r, i;
                const l = []
                  , d = this.getRaw(e.id);
                return (null == d ? void 0 : d.length) > 0 ? d : (Number(null === (n = null === (t = null == e ? void 0 : e.firstPageParticipant) || void 0 === t ? void 0 : t.participants) || void 0 === n ? void 0 : n.length) > 0 ? ((null === (o = null == e ? void 0 : e.firstPageParticipant) || void 0 === o ? void 0 : o.participants) || []).forEach((t=>{
                    l.push(ue.Q.fromServerParticipant(this.ctx, t, e, e.ext[T.v9.LocalLogId]))
                }
                )) : e.type === c.m.ConversationType.ONE_TO_ONE_CHAT && (_.Y.ctxDebug(this.ctx, "no first page participant found, fallback to local"),
                [e.toParticipantUserId, this.ctx.option.userId].forEach((t=>{
                    if (t) {
                        const n = ue.Q.fakeParticipant(this.ctx, t, e);
                        l.push(n)
                    }
                }
                ))),
                this.upsertBatch(e.id, l, !0),
                (null === (r = e.firstPageParticipant) || void 0 === r ? void 0 : r.has_more) && this.resolve(s.Uk.CoreApi).GetConversationParticipantsList({
                    conversationId: e.id,
                    conversationShortId: a.fromString(e.shortId),
                    conversationType: e.type,
                    cursor: null !== (i = e.firstPageParticipant.cursor) && void 0 !== i ? i : a.ZERO,
                    limit: 50,
                    inboxType: e.inboxType
                }).then((t=>{
                    var n, o;
                    const r = null === (o = null === (n = null == t ? void 0 : t.body) || void 0 === n ? void 0 : n.conversation_participants_body) || void 0 === o ? void 0 : o.participants_page;
                    null == r || r.participants.forEach((n=>{
                        l.push(ue.Q.fromServerParticipant(this.ctx, n, e, null == t ? void 0 : t.log_id))
                    }
                    )),
                    this.upsertBatch(e.id, l, !0)
                }
                )),
                l)
            }
            getMap(e) {
                const t = this.participants.get(e);
                if (t)
                    return t;
                throw new P.G({
                    ctx: this.ctx,
                    type: T.NI.ConversationNotExist,
                    msg: `conversation ${e} participants is not loaded`,
                    sender: this,
                    args: {
                        conversationId: e
                    }
                })
            }
            getMapRaw(e) {
                return this.participants.get(e)
            }
            getRaw(e) {
                const t = this.participants.get(e);
                return t ? Array.from(t.values()) : []
            }
            getByUserIdRaw(e, t) {
                const n = this.participants.get(e);
                if (n)
                    return n.get(t.toString())
            }
            dispose() {
                this.clearAll()
            }
        }
        class fe extends s.mA {
            isValidInbox(e) {
                return void 0 !== e && (!!this.getContext().option.acceptIncorrectInboxType || this.getInboxTypeArray().includes(e))
            }
            needSpecifyInbox() {
                const e = this.ctx.option.inboxType;
                return !(void 0 === e || "number" == typeof e && e >= 0 || !(Array.isArray(e) && e.length > 2))
            }
            getDefaultInboxWithoutCheck() {
                return this.getInboxTypeArray()[0]
            }
            getDefaultInbox() {
                if (this.needSpecifyInbox())
                    throw new P.G({
                        ctx: this.ctx,
                        msg: "no available inboxType is provided",
                        type: T.NI.InvalidInboxType,
                        sender: this
                    });
                return this.getDefaultInboxWithoutCheck()
            }
            getInboxTypeArray() {
                const e = this.ctx.option.inboxType;
                return Array.isArray(e) ? e : void 0 !== e ? [e] : [0]
            }
        }
        !function(e) {
            e.SdkVersion = "sdk.version",
            e.DbVersion = "sdk.db.version",
            e.DbLastOpen = "sdk.db.last_open",
            e.DbEncyption = "sdk.db.encryption",
            e.UserToken = "user.token"
        }(ce || (ce = {}));
        class me extends s.mA {
        }
        class be extends s.mA {
            constructor(e) {
                super(e),
                this.isCertAuth && (this.securitySdk = new x.ZP({
                    aid: this.ctx.option.appId
                }))
            }
            get isCertAuth() {
                return this.ctx.option.authType === c.m.AuthType.CERT_AUTH
            }
            prepareToken() {
                var e;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield null === (e = this.resolve(s.Uk.DbProxy)) || void 0 === e ? void 0 : e.loadConfig(ce.UserToken);
                    !t || this.isCertAuth && !1 === this.getCert() ? yield this.refreshToken() : this.ctx.cachedToken = t
                }
                ))
            }
            refreshToken() {
                var e, t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const n = this.ctx.option.token;
                    if ("function" == typeof n) {
                        const t = S.u.performanceNow();
                        let o, r = null;
                        if (this.isCertAuth ? r = yield this.handleCertAuthToken(n) : (o = n(),
                        r = o instanceof Promise ? yield o : o),
                        null !== r)
                            return this.ctx.cachedToken = r,
                            yield null === (e = this.resolve(s.Uk.DbProxy)) || void 0 === e ? void 0 : e.saveConfig(ce.UserToken, r),
                            this.resolve(s.Uk.Monitor).emitDuration(S.U.BizRefreshToken, t),
                            _.Y.ctxDebug(this.ctx, "token cached from function: ", this.ctx.cachedToken),
                            r;
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "token is null",
                            type: T.NI.TokenFuncError,
                            sender: this
                        })
                    }
                    return this.ctx.cachedToken = n,
                    _.Y.ctxDebug(this.ctx, "token cached from const: ", this.ctx.cachedToken),
                    yield null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t ? void 0 : t.saveConfig(ce.UserToken, this.ctx.cachedToken),
                    n
                }
                ))
            }
            sign(e) {
                const t = this.securitySdk.cryptoSDK.sign(e)
                  , n = (0,
                x.gg)(t);
                try {
                    return JSON.parse(n)
                } catch (e) {
                    throw new P.G({
                        ctx: this.ctx,
                        msg: "Failed to JSON.parse signString",
                        type: T.NI.AuthSignError,
                        sender: this
                    })
                }
            }
            getCert() {
                return this.securitySdk.cryptoSDK.getCertificateV2()
            }
            getTsSign() {
                return this.securitySdk.cryptoSDK.getTsSign()
            }
            handleCertAuthToken(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield this.securitySdk.cryptoSDK.getCertSignRequest()
                      , {tsSign: n, token: o, sdkCert: r} = yield e(t)
                      , i = {
                        ts_sign: n,
                        ticket: o,
                        client_cert: r
                    };
                    return this.securitySdk.cryptoSDK.setSignValue(i),
                    o
                }
                ))
            }
        }
        class ke {
            constructor(e, t) {
                this.disposed = !1,
                this.plugins = [],
                this.innerCursor = [],
                this.ticker = void 0,
                this.isProcessing = !1;
                const n = new s.jO;
                var o;
                if (this.ctx = n,
                n.register(s.Uk.Monitor, S.u),
                n.register(s.Uk.CoreInstance, this),
                e.headers || (e.headers = {}),
                e.httpHeaders || (e.httpHeaders = {}),
                e.extended || (e.extended = {}),
                e.boe ? (o = e,
                "string" == typeof (e = Object.assign(Object.assign(Object.assign({
                    debug: !0,
                    boe: !0
                }, J), o), {
                    triggerStrategy: Object.assign(Object.assign({}, J.triggerStrategy), o.triggerStrategy)
                })).boe && (e.headers[T.HF.envKey] = e.boe,
                e.headers[T.HF.boeHeaderKey] = "1",
                e.httpHeaders[T.HF.envKey] = e.boe,
                e.httpHeaders[T.HF.boeHeaderKey] = "1"),
                "boolean" == typeof e.boe && (e.headers[T.HF.boeHeaderKey] = "1",
                e.httpHeaders[T.HF.boeHeaderKey] = "1")) : (e = function(e) {
                    return Object.assign(Object.assign(Object.assign({}, J), e), {
                        triggerStrategy: Object.assign(Object.assign({}, J.triggerStrategy), e.triggerStrategy)
                    })
                }(e),
                "string" == typeof e.ppe ? (e.headers[T.HF.envKey] = e.ppe,
                e.headers[T.HF.ppeHeaderKey] = "1",
                e.httpHeaders[T.HF.envKey] = e.ppe,
                e.httpHeaders[T.HF.ppeHeaderKey] = "1") : e.canary && (e.headers[T.HF.envKey] = "canary",
                e.httpHeaders[T.HF.envKey] = "canary")),
                n.option = e,
                function(e, t) {
                    "number" != typeof t.appId && _.Y.ctxError(e, "opt.appId is not a number! did you pass a string?"),
                    "string" != typeof t.deviceId && _.Y.ctxError(e, "opt.deviceId is not a string! did you pass a number?"),
                    "string" != typeof t.userId && _.Y.ctxError(e, "opt.userId is not a string! did you pass a number?"),
                    "string" == typeof t.apiUrl && 0 !== t.apiUrl.length || _.Y.ctxError(e, "opt.apiUrl invalid"),
                    "string" == typeof t.frontierUrl && 0 !== t.frontierUrl.length || _.Y.ctxError(e, "opt.frontierUrl invalid"),
                    "object" == typeof t.headers && ee(e, "opt.headers", t.headers),
                    "object" == typeof t.httpHeaders && ee(e, "opt.httpHeaders", t.httpHeaders),
                    "object" == typeof t.monitorTagKv && ee(e, "opt.monitorTagKv", t.monitorTagKv),
                    (Array.isArray(t.inboxType) && (0 === t.inboxType.length || t.inboxType.some((e=>e < 0))) || "number" == typeof t.inboxType && t.inboxType < 0) && _.Y.ctxError(e, "opt.inboxType invalid"),
                    "number" == typeof t.pullInterval && t.pullInterval < 5e3 && _.Y.ctxDebug(e, "opt.pullInterval too short")
                }(this.ctx, e),
                e.adapter ? (_.Y.ctxDebug(this.ctx, "install adapter:", e.adapter),
                U.setDynamicAdapter(e.adapter)) : this.initAdapter(),
                n.register(s.Uk.ConversationManager, se),
                n.register(s.Uk.MessageManager, he),
                n.register(s.Uk.ParticipantManager, ge),
                n.register(s.Uk.EventBus, q),
                n.register(s.Uk.NetworkManager, Q),
                n.register(s.Uk.CoreApi, N),
                n.register(s.Uk.InboxType, fe),
                n.register(s.Uk.AuthManager, be),
                e.debug) {
                    let t = "undefined" != typeof window ? window : e.injectContext
                      , o = `__imsdk_context_${this.ctx.id.split("-")[0]}`;
                    if ("object" == typeof e.injectContext && (t = e.injectContext,
                    e.injectContext = !0),
                    "string" == typeof e.injectContext && (o = e.injectContext,
                    e.injectContext = !0),
                    void 0 === e.injectContext && (e.injectContext = !0),
                    "boolean" == typeof e.injectContext && e.injectContext)
                        try {
                            Object.defineProperty(t, o, {
                                enumerable: !1,
                                configurable: !0,
                                get: ()=>n
                            })
                        } catch (e) {
                            _.Y.ctxDebug(n, "inject ctx:", n, `with name: ${o} to`, t, "failed: ", e)
                        }
                }
                Array.isArray(t) && (t.forEach((e=>{
                    const t = new e(n);
                    t.install(),
                    this.plugins.push(t)
                }
                )),
                this.ctx.plugin = this.plugins),
                _.Y.ctxDebug(this.ctx, "loaded plugin:", this.plugins),
                e.boe ? _.Y.ctxDebug(this.ctx, `using boe env: ${!0 === e.boe ? "default" : e.boe}`) : e.ppe && _.Y.ctxDebug(this.ctx, `using ppe env: ${e.ppe}`),
                this.network.onMessage.subscribe((e=>this.receivePacket(e))),
                Object.seal && (Object.seal(this),
                Object.seal(n),
                Object.seal(ke.prototype))
            }
            getContext() {
                return this.ctx
            }
            resolve(e) {
                return this.ctx.resolve(e)
            }
            get initResult() {
                return this.ctx.initResult
            }
            set initResult(e) {
                this.ctx.initResult = e
            }
            get event() {
                return this.resolve(s.Uk.EventBus)
            }
            get api() {
                return this.resolve(s.Uk.CoreApi)
            }
            get network() {
                return this.resolve(s.Uk.NetworkManager)
            }
            get auth() {
                return this.resolve(s.Uk.AuthManager)
            }
            get inboxType() {
                return this.resolve(s.Uk.InboxType)
            }
            get id() {
                return this.ctx.id
            }
            get option() {
                return this.ctx.option
            }
            getUserCursor(e) {
                var t;
                return null !== (t = this.innerCursor[null != e ? e : this.inboxType.getDefaultInbox()]) && void 0 !== t ? t : a.ZERO
            }
            setUserCursor(e, t) {
                var n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = null != t ? t : this.inboxType.getDefaultInbox()
                      , r = this.innerCursor[o];
                    r && !r.lt(e) || (_.Y.ctxDebug(this.ctx, `update cursor for inbox:${o} from ${null == r ? void 0 : r.toString()} to ${e.toString()}`),
                    this.innerCursor[o] = e,
                    yield null === (n = this.resolve(s.Uk.DbProxy)) || void 0 === n ? void 0 : n.saveUserCursor(o, e))
                }
                ))
            }
            init(e) {
                var t, n, r, i, a, c, l, d;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = S.u.performanceNow();
                    this.initResult = T.rb.Start;
                    const u = null !== (n = yield null === (t = this.resolve(s.Uk.DbProxy)) || void 0 === t ? void 0 : t.init(this.ctx.option.userId)) && void 0 !== n && n;
                    try {
                        yield this.auth.prepareToken()
                    } catch (e) {
                        return this.initResult = T.rb.Error,
                        _.Y.ctxError(this.ctx, "prepare token error:", e),
                        this.resolve(s.Uk.Monitor).emitDuration(S.U.BizSdkInit + S.U.ErrorSuffix, o, {
                            use_db: null !== (r = u.toString()) && void 0 !== r ? r : "unknown",
                            reason: "token"
                        }),
                        this.initResult
                    }
                    for (const t of this.inboxType.getInboxTypeArray())
                        if (!(yield this.prepareHistoryForInbox({
                            inboxType: t,
                            convLimit: null == e ? void 0 : e.convLimit,
                            msgLimit: null == e ? void 0 : e.msgLimit,
                            mode: null == e ? void 0 : e.mode,
                            convTotal: null == e ? void 0 : e.convTotal
                        })))
                            return this.initResult = T.rb.Error,
                            _.Y.ctxError(this.ctx, "init history error for inbox", t),
                            this.resolve(s.Uk.Monitor).emitDuration(S.U.BizSdkInit + S.U.ErrorSuffix, o, {
                                use_db: null !== (i = u.toString()) && void 0 !== i ? i : "unknown",
                                reason: "history"
                            }),
                            this.initResult;
                    yield this.resolve(s.Uk.ConversationManager).refreshLocalAsync(),
                    this.resolve(s.Uk.EventBus).emitEmpty(T.c5.ConversationChange, this);
                    try {
                        for (const e of this.plugins)
                            yield e.init()
                    } catch (e) {
                        return this.initResult = T.rb.Error,
                        _.Y.ctxError(this.ctx, "init plugin error:", e),
                        this.resolve(s.Uk.Monitor).emitDuration(S.U.BizSdkInit + S.U.ErrorSuffix, o, {
                            use_db: null !== (a = u.toString()) && void 0 !== a ? a : "unknown",
                            reason: "plugin"
                        }),
                        this.initResult
                    }
                    if (this.ctx.option.webSocketLevel !== T._.Disable)
                        try {
                            this.resolve(s.Uk.Monitor).emitCounter(S.U.WebSocketConnectFirst, 1, {
                                url: null !== (l = null === (c = this.network.ws) || void 0 === c ? void 0 : c.url) && void 0 !== l ? l : "unknown"
                            }),
                            yield this.network.connectWs(!0)
                        } catch (e) {
                            _.Y.ctxWarn(this.ctx, "skip websocket, init open fail:", e)
                        }
                    const p = !1 === this.ctx.option.pullInterval || void 0 === this.ctx.option.pullInterval ? 3e4 : this.ctx.option.pullInterval;
                    return _.Y.ctxDebug(this.ctx, "use ticker interval:", p),
                    this.ticker = new X(this.ctx,p),
                    this.ticker.onTick.subscribe((()=>{
                        this.tickerUpdate()
                    }
                    )),
                    this.ticker.restart(),
                    this.initResult = T.rb.Succeeded,
                    this.resolve(s.Uk.Monitor).emitDuration(S.U.BizSdkInit + S.U.SuccessSuffix, o, {
                        use_db: null !== (d = u.toString()) && void 0 !== d ? d : "unknown"
                    }),
                    this.resolve(s.Uk.EventBus).emit(T.c5.InitFinish, this, this.initResult),
                    this.initResult
                }
                ))
            }
            getMessagesByUserInit(e={}) {
                var t, n, r, i, c, l, d, u;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = null !== (t = e.inboxType) && void 0 !== t ? t : this.inboxType.getDefaultInbox()
                      , p = null !== (n = e.cursor) && void 0 !== n ? n : a.ZERO
                      , v = e.page;
                    if (!this.inboxType.isValidInbox(o))
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "invalid inbox",
                            type: T.NI.InvalidInboxType,
                            sender: this
                        });
                    let y, h, g, f, m, b = a.ZERO, k = a.ZERO;
                    if (e.mode === T.k5.AwemeMode) {
                        const t = yield this.api.GetMessagesByInit({
                            inboxType: o,
                            convLimit: e.convLimit,
                            msgLimit: e.msgLimit,
                            page: v,
                            version: e.version
                        })
                          , n = null === (r = t.body) || void 0 === r ? void 0 : r.message_by_init;
                        y = null === (i = n.messages) || void 0 === i ? void 0 : i.map((e=>e.conversations)),
                        h = [],
                        null === (c = n.messages) || void 0 === c || c.forEach((e=>e.messages && (null == h ? void 0 : h.push(...e.messages)))),
                        g = null == n ? void 0 : n.user_cursor,
                        f = n.has_more,
                        k = n.next_init_version,
                        m = t.log_id
                    } else {
                        const t = yield this.api.GetMessagesByUserInitV2({
                            cursor: a.fromValue(p),
                            inboxType: o,
                            initSubType: e.initSubType,
                            convLimit: e.convLimit,
                            msgLimit: e.msgLimit
                        })
                          , n = null === (l = t.body) || void 0 === l ? void 0 : l.messages_per_user_init_v2_body;
                        y = n.conversations,
                        h = n.messages,
                        g = null == n ? void 0 : n.per_user_cursor,
                        f = n.has_more,
                        b = n.next_cursor,
                        m = t.log_id
                    }
                    return this.processInitConversation(y, m),
                    yield this.processInitMessage(h, m),
                    this.getUserCursor(o).neq(a.ZERO) && (null == g ? void 0 : g.neq(a.ZERO)) && (null === (d = this.getUserCursor(o)) || void 0 === d ? void 0 : d.neq(g)) && (_.Y.ctxWarn(this.ctx, `cursor not match: before:${null === (u = this.getUserCursor(o)) || void 0 === u ? void 0 : u.toString()}, after:${null == g ? void 0 : g.toString()}, pull user, logid:${m}`),
                    yield this.getMessagesByUser({
                        inboxType: o
                    })),
                    g && (yield this.setUserCursor(g, o)),
                    this.resolve(s.Uk.EventBus).emitEmpty(T.c5.InitLoadPage, this),
                    {
                        hasMore: f,
                        cursor: b,
                        page: (null != v ? v : 0) + 1,
                        version: k
                    }
                }
                ))
            }
            processInitMessage(e, t) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    e && (yield this.resolve(s.Uk.MessageManager).processNewMessagesFromPull(e, T.v$.Init, t))
                }
                ))
            }
            processInitConversation(e, t) {
                e && e.map((e=>G.r.fromServerConversation(this.ctx, e, t))).forEach((e=>this.resolve(s.Uk.ConversationManager).upsert(e)))
            }
            getMessagesByUser(e={}) {
                var t, n, r, i;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.cursor instanceof Date && (e.cursor = `${e.cursor.getTime()}000`),
                    void 0 === e.inboxType && (e.inboxType = this.inboxType.getDefaultInbox()),
                    !this.inboxType.isValidInbox(e.inboxType))
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "invalid inbox",
                            type: T.NI.InvalidInboxType,
                            sender: this
                        });
                    if (!0 === this.ctx.option.disableInitPull && 0 === this.getConversationList().length && this.getUserCursor(e.inboxType).eq(a.ZERO) && void 0 === e.cursor)
                        return void _.Y.ctxWarn(this.ctx, "try to pull history from 0, preventing");
                    let o = !0
                      , c = void 0 !== e.cursor ? a.fromValue(e.cursor) : this.getUserCursor(e.inboxType);
                    for (; o; ) {
                        const a = yield this.api.GetMessagesByUser({
                            cursor: c,
                            limit: null !== (t = e.limit) && void 0 !== t ? t : 50,
                            inboxType: e.inboxType
                        })
                          , l = null === (n = a.body) || void 0 === n ? void 0 : n.messages_per_user_body;
                        o = l.has_more,
                        c = l.next_cursor;
                        const d = new Map;
                        null === (r = l.hasmore_message_conv_list) || void 0 === r || r.forEach((e=>{
                            const t = e.toString()
                              , n = this.resolve(s.Uk.ConversationManager).getWithShortIdRaw(t);
                            d.set(t, null == n ? void 0 : n.lastMessageIndex)
                        }
                        ));
                        const {conMap: u} = yield this.resolve(s.Uk.MessageManager).processNewMessagesFromPull(l.messages, T.v$.UserInbox, a.log_id);
                        null === (i = l.hasmore_message_conv_list) || void 0 === i || i.forEach((e=>{
                            const t = e.toString()
                              , n = u.get(t);
                            if (n) {
                                const e = this.resolve(s.Uk.ConversationManager).getRaw(n.conversationId);
                                this.patchMessage({
                                    cursor: n,
                                    conversation: e,
                                    limitindex: d.get(t)
                                })
                            } else
                                _.Y.ctxWarn(this.ctx, `not found message of conversation in hasmore_message_conv_list, conversationid:${t}, logid:${a.log_id}`)
                        }
                        )),
                        this.initResult === T.rb.Start && this.resolve(s.Uk.EventBus).emitEmpty(T.c5.InitLoadPage, this)
                    }
                    yield this.setUserCursor(c, e.inboxType),
                    this.resolve(s.Uk.ConversationManager).refreshLocal()
                }
                ))
            }
            getMessagesByConversation(e) {
                var t, n, r, i;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let {cursor: o} = e;
                    const {direction: l} = e;
                    o instanceof V.v && (o = o.indexInConversation),
                    void 0 === o && (o = e.conversation.firstMessageIndex,
                    e.conversation.firstMessageIndex.gt(null !== (t = e.conversation.__internal_pullCursor) && void 0 !== t ? t : a.ZERO) && (o = e.conversation.__internal_pullCursor,
                    _.Y.ctxDebug(this.ctx, `using internal cursor: ${o.toString()} < ${e.conversation.firstMessageIndex.toString()} for conversation:`, e.conversation)));
                    const d = yield this.api.GetMessagesByConversation({
                        conversationId: e.conversation.id,
                        conversationShortId: a.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        anchorIndex: a.fromValue(o),
                        direction: l || c.m.MessageDirection.OLDER,
                        limit: null !== (n = e.limit) && void 0 !== n ? n : 20,
                        inboxType: e.conversation.inboxType
                    });
                    this.resolve(s.Uk.Monitor).emitMetrics(S.U.GetMessagesByConversation, {
                        count: 1
                    }, {
                        log_id: d.log_id,
                        from: "user",
                        conversation_id: e.conversation.shortId,
                        cursor: a.fromValue(o).toString()
                    });
                    const u = null === (r = d.body) || void 0 === r ? void 0 : r.messages_in_conversation_body;
                    e.conversation.__internal_pullCursor = null !== (i = u.next_cursor) && void 0 !== i ? i : e.conversation.__internal_pullCursor;
                    const {msgs: p} = yield this.resolve(s.Uk.MessageManager).processNewMessagesFromPull(u.messages, T.v$.LoadMore, d.log_id);
                    return {
                        messages: p,
                        hasMore: null == u ? void 0 : u.has_more,
                        cursor: null == u ? void 0 : u.next_cursor
                    }
                }
                ))
            }
            markConversationRead(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let o, r, {readIndex: i} = e;
                    if (void 0 === i ? i = e.conversation.lastMessageIndex : i instanceof V.v && (i = i.indexInConversation),
                    !a.fromValue(i).lte(e.conversation.readIndex)) {
                        if (this.resolve(s.Uk.ConversationManager).markRead(e.conversation.id, a.fromValue(i)),
                        this.ctx.option.unreadCountReport) {
                            const i = this.getConversationList({
                                filter: t=>t.inboxType === e.conversation.inboxType && t.isMember && 0 === t.mode
                            }).reduce(((e,t)=>e + t.unreadCount), 0);
                            r = null !== (t = e.totalUnreadCount) && void 0 !== t ? t : i,
                            o = null !== (n = e.convUnreadCount) && void 0 !== n ? n : e.conversation.unreadCount
                        }
                        yield this.api.MarkConversationReadV3({
                            conversationId: e.conversation.id,
                            conversationShortId: a.fromString(e.conversation.shortId),
                            conversationType: e.conversation.type,
                            readIndex: a.fromValue(i),
                            inboxType: e.conversation.inboxType,
                            unreadCount: void 0 !== o ? a.fromValue(o) : void 0,
                            totalUnreadCount: void 0 !== r ? a.fromValue(r) : void 0
                        })
                    }
                }
                ))
            }
            recallMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!e.message.serverId)
                        throw new P.G({
                            ctx: this.ctx,
                            type: T.NI.MessageNotReady,
                            msg: `message ${e.message} is not ready`,
                            sender: this
                        });
                    const t = this.resolve(s.Uk.ConversationManager).get(e.message.conversationId)
                      , n = yield this.api.RecallMessage({
                        conversationId: e.message.conversationId,
                        conversationShortId: a.fromString(e.message.conversationShortId),
                        conversationType: e.message.conversationType,
                        serverId: a.fromString(e.message.serverId),
                        inboxType: t.inboxType
                    });
                    this.resolve(s.Uk.MessageManager).markRecalled(e.message.conversationId, e.message.serverId, n.log_id)
                }
                ))
            }
            createConversation(e) {
                var t, n, r, i, l;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = S.u.performanceNow();
                    let d = [];
                    const u = {
                        success: !1,
                        payload: null
                    };
                    if (void 0 === e.inboxType && (e.inboxType = this.inboxType.getDefaultInbox()),
                    !this.inboxType.isValidInbox(e.inboxType))
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "invalid inbox",
                            type: T.NI.InvalidInboxType,
                            sender: this
                        });
                    if (void 0 === e.type && (Array.isArray(e.participants) ? e.participants.length <= 1 ? e.type = c.m.ConversationType.ONE_TO_ONE_CHAT : e.type = c.m.ConversationType.GROUP_CHAT : e.type = c.m.ConversationType.ONE_TO_ONE_CHAT),
                    d = Array.isArray(e.participants) ? -1 === e.participants.indexOf(this.ctx.option.userId) ? e.participants.concat(this.ctx.option.userId) : e.participants : [e.participants, this.ctx.option.userId],
                    d.length > 2 && e.type === c.m.ConversationType.ONE_TO_ONE_CHAT)
                        return u.statusCode = T.NI.InvalidParam,
                        u.statusMsg = "one to one chat can only has 2 participants",
                        u;
                    void 0 === e.persistent && void 0 !== e.idempotentId && e.idempotentId.length > 0 && (e.persistent = !0);
                    try {
                        const t = yield this.api.CreateConversationV2({
                            type: e.type,
                            participants: d.map((e=>a.fromValue(e))),
                            persistent: e.persistent,
                            idempotentId: e.idempotentId,
                            name: e.name,
                            avatarUrl: e.avatarUrl,
                            desc: e.desc,
                            bizExt: e.bizExt,
                            inboxType: e.inboxType
                        })
                          , n = t.body.create_conversation_v2_body;
                        if (u.checkCode = n.check_code,
                        u.checkMsg = n.check_message,
                        u.statusCode = n.status,
                        u.statusMsg = n.extra_info,
                        u.body = n,
                        0 === (null == n ? void 0 : n.status)) {
                            const e = G.r.fromServerConversation(this.ctx, null == n ? void 0 : n.conversation, t.log_id);
                            this.resolve(s.Uk.ConversationManager).upsert(e),
                            yield this.resolve(s.Uk.ConversationManager).refreshAsync(e),
                            u.success = !0,
                            u.payload = e
                        }
                    } catch (e) {
                        u.statusCode = null !== (t = e.type) && void 0 !== t ? t : T.NI.NetworkError,
                        u.innerError = e
                    }
                    return this.resolve(s.Uk.Monitor).emitMetrics(S.U.CreateConversation, {
                        create_cost: S.u.performanceNow() - o
                    }, {
                        type: null !== (r = null === (n = e.type) || void 0 === n ? void 0 : n.toString()) && void 0 !== r ? r : "unknown",
                        error_code: null !== (l = null === (i = u.statusCode) || void 0 === i ? void 0 : i.toString()) && void 0 !== l ? l : "unknown"
                    }),
                    u
                }
                ))
            }
            getConversation(e) {
                return this.resolve(s.Uk.ConversationManager).get(e.conversationId)
            }
            getConversationOnline(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return this.resolve(s.Uk.ConversationManager).getWithOnline(e.conversationId, e.shortId, e.type)
                }
                ))
            }
            getConversationList(e={}) {
                return this.resolve(s.Uk.ConversationManager).getConversationArray(e.filter)
            }
            getConversationListOnline(e={}) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return yield this.resolve(s.Uk.ConversationManager).refreshLocalAsync(),
                    this.getConversationList({
                        filter: e.filter
                    })
                }
                ))
            }
            createMessage(e) {
                console.log(e)
                e.content = '{"aweType":800,"uid":"6918910425120818178","secUID":"MS4wLjABAAAAF6m2e9h1Oe1pKu3EkK-usuN8YqRRbNp2w45jV_bKtsD3c4qEbaP1pumqmbrJEO5I","itemId":"7273038338431388930","cover_url":{"uri":"tos-alisg-p-0037/109c4ad823184008a80aba1986dfdf44_1693386246","url_list":["https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/109c4ad823184008a80aba1986dfdf44_1693386246~tplv-tiktokx-360p.jpeg?x-expires=1693476000\u0026x-signature=31Mvtu10hAQV2XYcKrZST2qdSrI%3D\u0026s=TIKTOK_IM_VIDEO\u0026se=false\u0026sh=\u0026sc=feed_cover\u0026l=02169339073354400000000000000000000ffff0af53edf9d2197"]},"content_thumb":{"uri":"tos-alisg-avt-0068/a454aa795bdb1a9970cc2106321360e6","url_list":["https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a454aa795bdb1a9970cc2106321360e6.webp?x-expires=1693476000\u0026x-signature=0MXRLLfQH3UNlG7ZWFfELPduvH0%3D","https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a454aa795bdb1a9970cc2106321360e6.webp?x-expires=1693476000\u0026x-signature=feh5%2FK1XkbYXKfTpsuvIQiLfV%2Bo%3D","https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a454aa795bdb1a9970cc2106321360e6.jpeg?x-expires=1693476000\u0026x-signature=58Fa931Dro%2F7KloBNvfjHcLPkis%3D"]},"content_name":"60giay.com","content_title":"THỜI TIẾT DỊP LỄ 2/9 CÓ BỊ ẢNH HƯỞNG BỞI BÃO SAOLA? #tiktoknews #theanh28 #60giay","cover_width":1080,"cover_height":1920}'
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    void 0 === e.insert && (e.insert = !0);
                    const n = Object.assign({}, e.ext)
                      , o = V.v.createClientMessage(this.ctx, {
                        type: e.type,
                        content: e.content,
                        ext: n,
                        id: null !== (t = e.clientId) && void 0 !== t ? t : (0,
                        ne.k)(),
                        conversationId: e.conversation.id,
                        mentionedUsers: e.mentionedUsers || [],
                        conversationShortId: e.conversation.shortId,
                        conversationType: e.conversation.type,
                        referenceMessage: e.referenceMessage,
                        referenceHint: e.referenceHint
                    });
                    return o.flightStatus = T.b3.Created,
                    o.sendFunc = this.__internal_sendMessageObject.bind(this),
                    o.indexInConversation = e.conversation.lastMessageIndex.add(1),
                    o.orderInConversation = e.conversation.lastMessageOrder.add(1),
                    e.insert && (yield this.resolve(s.Uk.MessageManager).processNewMessage(o, T.v$.Offline)),
                    o
                }
                ))
            }
            sendMessage(e) {
                var t, n, r, i;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const {message: o} = e
                      , a = Date.now()
                      , c = yield o.sendFunc(o);
                    this.resolve(s.Uk.EventBus).emit(T.c5.MessageSend, this, o);
                    try {
                        const e = Date.now()
                          , l = this.resolve(s.Uk.ConversationManager).get(o.conversationId);
                        this.resolve(s.Uk.Monitor).emitMetrics(S.U.SendMessage, {
                            con_member_count: l.participantCount - 1,
                            send_cost_time: e - a
                        }, {
                            con_type: o.conversationType.toString(),
                            conversation_id: o.conversationId,
                            msg_uuid: o.serverId,
                            msg_type: o.type.toString(),
                            send_start_time: a.toString(),
                            send_end_time: e.toString(),
                            error_code: null !== (n = null === (t = c.statusCode) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "unknown",
                            is_ws: (null === (r = this.network.ws) || void 0 === r ? void 0 : r.isOpen()) ? "1" : "0",
                            logid: null !== (i = c.logid) && void 0 !== i ? i : ""
                        })
                    } catch (e) {
                        _.Y.ctxWarn(this.ctx, "Fail to report data after send message", e)
                    }
                    return c
                }
                ))
            }
            fetchConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let t = null;
                    if (void 0 !== e.shortId) {
                        const t = this.resolve(s.Uk.ConversationManager).getWithShortIdRaw(e.shortId);
                        if (null !== t && !t.isOffline)
                            return t
                    }
                    if (void 0 === e.inboxType && (e.inboxType = this.inboxType.getDefaultInbox()),
                    !this.inboxType.isValidInbox(e.inboxType))
                        throw new P.G({
                            ctx: this.ctx,
                            msg: "invalid inbox",
                            type: T.NI.InvalidInboxType,
                            sender: this
                        });
                    if (void 0 !== e.idempotentId && void 0 === e.participantId) {
                        const n = yield this.createConversation({
                            type: c.m.ConversationType.GROUP_CHAT,
                            participants: [],
                            inboxType: e.inboxType,
                            idempotentId: e.idempotentId
                        });
                        n.success && (t = n.payload,
                        null !== t && (yield this.getConversationOnline({
                            conversationId: t.id,
                            shortId: t.shortId,
                            type: c.m.ConversationType.ONE_TO_ONE_CHAT
                        })))
                    } else if (void 0 !== e.participantId) {
                        const n = yield this.createConversation({
                            type: c.m.ConversationType.ONE_TO_ONE_CHAT,
                            participants: e.participantId,
                            inboxType: e.inboxType
                        });
                        n.success && (t = n.payload,
                        null !== t && (yield this.resolve(s.Uk.ConversationManager).refreshAsync(t)))
                    } else {
                        if (void 0 === e.shortId)
                            throw new P.G({
                                ctx: this.ctx,
                                type: T.NI.InvalidParam,
                                msg: "no valid param provided",
                                reachServer: !1,
                                sender: this
                            });
                        t = yield this.getConversationOnline({
                            conversationId: e.shortId,
                            shortId: e.shortId,
                            type: c.m.ConversationType.GROUP_CHAT
                        })
                    }
                    if (null === t || t.isOffline)
                        throw new P.G({
                            ctx: this.ctx,
                            type: T.NI.ConversationNotExist,
                            msg: "fetch failed, conv is null or offline",
                            reachServer: !1,
                            sender: this
                        });
                    return yield this.getMessagesByConversation({
                        conversation: t
                    }),
                    t
                }
                ))
            }
            dispose() {
                var e, t;
                this.resolve(s.Uk.EventBus).unsubscribeAll(),
                null === (e = this.ticker) || void 0 === e || e.stop(),
                this.network.closeWs(),
                null === (t = this.network.ws) || void 0 === t || t.dispose(),
                this.network.onMessage.unsubscribeAll();
                for (const e of this.plugins)
                    e.dispose();
                this.plugins.forEach((e=>e.dispose())),
                this.plugins.length = 0,
                this.resolve(s.Uk.ConversationManager).dispose(),
                this.resolve(s.Uk.MessageManager).dispose(),
                this.ctx.option.monitor = void 0,
                this.ctx.option.aspectBefore = ()=>(_.Y.ctxError(this.ctx, "do not invoke a disposed instance"),
                !1),
                this.disposed = !0,
                _.Y.ctxDebug(this.ctx, "sdk unloaded, do not invoke this instance")
            }
            initAdapter() {}
            prepareHistoryForInbox({inboxType: e, convLimit: t, msgLimit: n, mode: r, convTotal: i}) {
                var c, l, d;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    try {
                        const o = yield null === (c = this.resolve(s.Uk.DbProxy)) || void 0 === c ? void 0 : c.loadUserCursor(e);
                        if (void 0 !== o)
                            return _.Y.ctxDebug(this.ctx, `load history for inbox ${e} by db`),
                            yield this.setUserCursor(o, e),
                            yield this.getMessagesByUser({
                                inboxType: e,
                                cursor: o
                            }),
                            !0;
                        if (this.ctx.option.disableInitPull) {
                            let o;
                            if (_.Y.ctxDebug(this.ctx, `load history for inbox ${e} by disable init`),
                            r === T.k5.AwemeMode) {
                                const r = yield this.api.GetMessagesByInit({
                                    inboxType: e,
                                    convLimit: t,
                                    msgLimit: n
                                });
                                o = (null === (l = r.body) || void 0 === l ? void 0 : l.message_by_init).user_cursor
                            } else {
                                const r = yield this.api.GetMessagesByUserInitV2({
                                    inboxType: e,
                                    convLimit: t,
                                    msgLimit: n,
                                    cursor: a.ZERO
                                });
                                o = (null === (d = r.body) || void 0 === d ? void 0 : d.messages_per_user_init_v2_body).per_user_cursor
                            }
                            return yield this.setUserCursor(o, e),
                            !0
                        }
                        _.Y.ctxDebug(this.ctx, `load history for inbox ${e} by full init`);
                        let u = {
                            hasMore: !0,
                            cursor: a.ZERO,
                            page: 0,
                            version: void 0
                        };
                        for (; u.hasMore && (u = yield this.getMessagesByUserInit(Object.assign({
                            inboxType: e,
                            initSubType: this.ctx.option.initSubType,
                            convLimit: t,
                            msgLimit: n,
                            mode: r
                        }, u)),
                        !(i && this.resolve(s.Uk.ConversationManager).getConversationArray().length >= i)); )
                            ;
                        return !0
                    } catch (t) {
                        return _.Y.ctxError(this.ctx, `load history failed for inbox:${e}`, t),
                        !1
                    }
                }
                ))
            }
            patchMessage(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let {cursor: o} = e;
                    if (!e.limitindex)
                        return;
                    o instanceof V.v && (o = o.indexInConversation),
                    void 0 === o && (o = e.conversation.firstMessageIndex);
                    const r = yield this.api.GetMessagesByConversation({
                        conversationId: e.conversation.id,
                        conversationShortId: a.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        anchorIndex: a.fromValue(o),
                        direction: c.m.MessageDirection.OLDER,
                        limit: null !== (t = e.limit) && void 0 !== t ? t : 20,
                        inboxType: e.conversation.inboxType
                    });
                    this.resolve(s.Uk.Monitor).emitMetrics(S.U.GetMessagesByConversation, {
                        count: 1
                    }, {
                        log_id: r.log_id,
                        from: "patch",
                        conversationId: e.conversation.shortId,
                        cursor: a.fromValue(o).toString()
                    });
                    const i = null === (n = r.body) || void 0 === n ? void 0 : n.messages_in_conversation_body
                      , {conMap: l} = yield this.resolve(s.Uk.MessageManager).processNewMessagesFromPull(i.messages, T.v$.UserInbox, r.log_id)
                      , d = l.get(e.conversation.shortId);
                    (null == i ? void 0 : i.has_more) && d && !e.limitindex.gt((null == d ? void 0 : d.indexInConversation) || a.ZERO) ? this.patchMessage({
                        conversation: e.conversation,
                        limit: e.limit || 20,
                        cursor: null == i ? void 0 : i.next_cursor,
                        limitindex: e.limitindex
                    }) : e.conversation.forceRefreshUnreadCount()
                }
                ))
            }
            tickerUpdate() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if ((yield this.network.net.getConnectionStatus()) !== k.Disconnected && this.initResult === T.rb.Succeeded) {
                        if (this.ctx.option.pullInterval && !this.isProcessing)
                            for (const e of this.inboxType.getInboxTypeArray())
                                try {
                                    yield this.getMessagesByUser({
                                        inboxType: e
                                    }),
                                    this.resolve(s.Uk.Monitor).emitMetrics(S.U.GetMessagesByTicker, {
                                        count: 1
                                    }, {
                                        tick_timer: this.ticker.getTickTimer(),
                                        cursor: this.getUserCursor(e).toString(),
                                        time: Math.round(Date.now() / 100).toString(),
                                        inbox: e.toString()
                                    })
                                } catch (e) {
                                    _.Y.ctxWarn(this.ctx, "ticker running in pull user err:", e)
                                }
                        for (const e of this.plugins)
                            try {
                                yield e.ticker()
                            } catch (e) {
                                _.Y.ctxWarn(this.ctx, "ticker running in plugin err:", e)
                            }
                    }
                }
                ))
            }
            __internal_sendMessageObject(e) {
                var t, n, r, i, l;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = {
                        success: !1,
                        payload: e
                    };
                    if (e.serverId)
                        return o.statusCode = 0,
                        o;
                    const d = this.resolve(s.Uk.ConversationManager).getRaw(e.conversationId);
                    if (void 0 === d)
                        return o.statusCode = T.NI.ConversationNotExist,
                        o.statusMsg = `conversation ${e.conversationId} not exist in local`,
                        o;
                    e.flightStatus = T.b3.Inflight,
                    yield this.resolve(s.Uk.MessageManager).processNewMessage(e, T.v$.Offline);
                    try {
                        d.ticket || (yield this.resolve(s.Uk.ConversationManager).refreshTicket(d.id))
                    } catch (n) {
                        return e.flightStatus = T.b3.Failed,
                        o.statusCode = null !== (t = n.type) && void 0 !== t ? t : T.NI.InvalidTicket,
                        o.innerError = n,
                        this.resolve(s.Uk.MessageManager).upsert(e),
                        o
                    }
                    try {
                        const t = yield this.api.SendMessage({
                            conversationType: d.type,
                            conversationId: d.id,
                            conversationShortId: a.fromString(d.shortId),
                            content: e.content,
                            ticket: d.ticket,
                            ext: e.ext,
                            messageType: e.type,
                            clientId: e.clientId,
                            mentionedUsers: e.mentionedUsers.map((e=>a.fromString(e))),
                            inboxType: d.inboxType,
                            referenceInfo: e.referenceInfo
                        })
                          , l = null === (n = t.body) || void 0 === n ? void 0 : n.send_message_body;
                        if (e.ext[T.v9.SendResponseCheckCode] = null !== (r = null == l ? void 0 : l.check_code.toString()) && void 0 !== r ? r : "",
                        e.ext[T.v9.SendResponseCheckMessage] = null == l ? void 0 : l.check_message,
                        e.ext[T.v9.SendResponseExtraInfo] = null == l ? void 0 : l.extra_info,
                        e.ext[T.v9.SendResponseStatus] = null !== (i = null == l ? void 0 : l.status.toString()) && void 0 !== i ? i : "",
                        this.ctx.option.debug && (e.ext[T.v9.LocalLogId] = t.log_id),
                        o.body = l,
                        o.checkCode = l.check_code,
                        o.checkMsg = l.check_message,
                        o.statusCode = l.status,
                        o.statusMsg = l.extra_info,
                        o.logid = t.log_id,
                        0 === l.status) {
                            const t = l.server_message_id.toString();
                            e.serverId = t,
                            e.flightStatus = T.b3.Succeeded,
                            e.isOffline = !1,
                            yield this.resolve(s.Uk.MessageManager).processNewMessage(e, T.v$.Offline),
                            o.success = !0
                        } else
                            e.flightStatus !== T.b3.Received ? (e.flightStatus = T.b3.Rejected,
                            l.status === c.m.SendMessageStatus.CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE && (e.flightStatus = T.b3.SelfVisible)) : o.success = !0
                    } catch (t) {
                        e.flightStatus !== T.b3.Received && (e.flightStatus = T.b3.Failed),
                        o.innerError = t,
                        o.statusCode = null !== (l = t.type) && void 0 !== l ? l : T.NI.NetworkError
                    }
                    return this.resolve(s.Uk.MessageManager).upsert(e),
                    o
                }
                ))
            }
            receivePacket(e) {
                var t, n, r, i, l, d, u, p;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (this.isProcessing = !0,
                    this.initResult !== T.rb.Succeeded)
                        return;
                    let o = !1;
                    const v = this.getUserCursor(e.inbox_type);
                    if (e.cmd === c.m.IMCMD.NEW_MSG_NOTIFY) {
                        const y = null === (t = e.body) || void 0 === t ? void 0 : t.has_new_message_notify;
                        if (y) {
                            const t = this.resolve(s.Uk.ConversationManager).getRaw(y.conversation_id);
                            yield this.clientAck({
                                packet: e,
                                inboxType: null !== (n = null == t ? void 0 : t.inboxType) && void 0 !== n ? n : null == e ? void 0 : e.inbox_type,
                                type: c.m.MsgReportType.MSG_RECEIVE_BY_WS
                            })
                        }
                        if (y)
                            if (v.lt(null !== (r = y.previous_cursor) && void 0 !== r ? r : a.ZERO) || (null === (i = y.previous_cursor) || void 0 === i ? void 0 : i.eq(a.ZERO)))
                                o = !0,
                                _.Y.ctxWarn(this.ctx, `push cursour is greater than local cursor, push:${null !== (l = y.previous_cursor) && void 0 !== l ? l : a.ZERO}, local:${v.toString()}, msgid:${null === (d = y.message) || void 0 === d ? void 0 : d.server_message_id}, logid:${e.log_id}`);
                            else if (null === (u = y.previous_cursor) || void 0 === u ? void 0 : u.eq(v)) {
                                const t = y.message;
                                if (t) {
                                    this.reportMessageDelayTime(t, e.log_id);
                                    const n = V.v.fromServerMessage(this.ctx, t, e.log_id);
                                    n.ext || (n.ext = {}),
                                    this.ctx.option.debug && (n.ext[T.v9.LocalLogId] = e.log_id),
                                    yield this.resolve(s.Uk.MessageManager).processNewMessage(n, T.v$.Online),
                                    yield this.setUserCursor(y.next_cursor, e.inbox_type)
                                } else
                                    _.Y.ctxWarn(this.ctx, "msg body is empty:", y)
                            } else
                                o = !0,
                                _.Y.ctxWarn(this.ctx, `push cursour is less than local cursor, push:${y.previous_cursor}, local:${v}, msgid:${null === (p = y.message) || void 0 === p ? void 0 : p.server_message_id}, logid:${e.log_id}`);
                        else
                            o = !0,
                            _.Y.ctxWarn(this.ctx, `push body is missing, logid:${e.log_id}`)
                    }
                    o && (yield this.getMessagesByUser({
                        inboxType: e.inbox_type,
                        cursor: v
                    })),
                    this.resolve(s.Uk.ConversationManager).refreshLocal();
                    for (const t of this.plugins)
                        yield t.receivePacket(e);
                    this.isProcessing = !1
                }
                ))
            }
            clientAck({packet: e, inboxType: t, type: n}) {
                var r, i, l, d, u, _;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!(null === (r = e.body) || void 0 === r ? void 0 : r.has_new_message_notify) || !e.start_time_stamp || e.start_time_stamp.lte(0))
                        return;
                    let o;
                    switch (yield this.network.net.getNetworkType()) {
                    case O.Cellular_2G:
                        o = c.m.NetworkType.MOBILE_2G;
                        break;
                    case O.Cellular_3G:
                        o = c.m.NetworkType.MOBILE_3G;
                        break;
                    case O.Cellular_4G:
                        o = c.m.NetworkType.MOBILE_4G;
                        break;
                    case O.Cellular_5G:
                        o = c.m.NetworkType.MOBILE_5G;
                        break;
                    case O.Wifi:
                        o = c.m.NetworkType.WIFI;
                        break;
                    default:
                        o = c.m.NetworkType.UNKNOWN
                    }
                    this.resolve(s.Uk.Monitor).emitMetrics(S.U.MessageAck, {
                        count: 1
                    }, {
                        start_timestamp: e.start_time_stamp.toString(),
                        cmd: e.cmd.toString(),
                        network_type: o.toString(),
                        logid: e.log_id,
                        client_timestamp: (new Date).getTime().toString(),
                        server_message_id: null !== (d = null === (l = null === (i = e.body.has_new_message_notify.message) || void 0 === i ? void 0 : i.server_message_id) || void 0 === l ? void 0 : l.toString()) && void 0 !== d ? d : "0",
                        report_net_type: n.toString()
                    }),
                    yield this.api.ClientAck({
                        startTimeStamp: e.start_time_stamp,
                        cmd: e.cmd,
                        NetworkType: o,
                        logid: e.log_id,
                        clientTimeStamp: a.fromNumber((new Date).getTime()),
                        serverId: null !== (_ = null === (u = e.body.has_new_message_notify.message) || void 0 === u ? void 0 : u.server_message_id) && void 0 !== _ ? _ : a.ZERO,
                        inboxType: t,
                        type: n
                    })
                }
                ))
            }
            reportMessageDelayTime(e, t) {
                var n, o, r, i, a, c, l, d;
                const u = null === (n = e.create_time) || void 0 === n ? void 0 : n.toNumber();
                if (!u)
                    return;
                const p = this.ctx.option.timeCalibration ? this.resolve(s.Uk.Monitor).avgDelta : 0
                  , v = Date.now()
                  , y = v + p - u;
                y <= 0 ? _.Y.ctxDebug(this.ctx, `message reception delay is less than 0, serverId:${e.server_message_id}, current:${v}, createTime:${u}, timeDelta:${p}`) : this.resolve(s.Uk.Monitor).emitMetrics(S.U.ReceiveMessage, {
                    recieve_cost_time: y
                }, {
                    con_type: null !== (r = null === (o = e.conversation_type) || void 0 === o ? void 0 : o.toString()) && void 0 !== r ? r : "",
                    conversation_id: null !== (i = e.conversation_id) && void 0 !== i ? i : "",
                    msg_uuid: null !== (c = null === (a = e.server_message_id) || void 0 === a ? void 0 : a.toString()) && void 0 !== c ? c : "",
                    recieve_end_time: v.toString(),
                    recieve_start_time: u.toString(),
                    time_delta: p.toString(),
                    msg_type: null !== (d = null === (l = e.message_type) || void 0 === l ? void 0 : l.toString()) && void 0 !== d ? d : "",
                    error_code: "0",
                    ntp_ready: this.ctx.option.timeCalibration ? "1" : "0",
                    is_ws: "1",
                    logid: t
                })
            }
        }
        !function(e) {
            e.MultimediaMessageUpload = "imsdk_upload_msg",
            e.InitHandler = "imsdk_init_handler",
            e.Exception = "imsdk_exception",
            e.SaveMessageError = "imsdk_save_msg_error",
            e.IntegrityCheckConversation = "imsdk_puller_check_conv_and",
            e.MessageAck = "imsdk_message_ack",
            e.RtcStartCall = "imsdk_rtc_start_call",
            e.RtcSwitch = "imsdk_rtc_switch",
            e.RtcReceiveRing = "imsdk_rtc_receive_ring",
            e.RtcAcceptCall = "imsdk_rtc_accept_call",
            e.RtcDenyCall = "imsdk_rtc_deny_call",
            e.RtcTerminate = "imsdk_rtc_terminate",
            e.RtcEnd = "imsdk_rtc_end"
        }(le || (le = {}));
        class Oe extends ke {
            initAdapter() {
                U.setAdapter(R.HttpClient, I),
                U.setAdapter(R.WebSocketClient, A),
                U.setAdapter(R.NetApi, M)
            }
        }
    }
    ,
    66924: (e,t,n)=>{
        n.d(t, {
            Y: ()=>a,
            h: ()=>o
        });
        var o, r = n(48252);
        !function(e) {
            e[e.debug = 0] = "debug",
            e[e.info = 1] = "info",
            e[e.warn = 2] = "warn",
            e[e.error = 3] = "error",
            e[e.none = 4] = "none"
        }(o || (o = {}));
        const i = {
            [o.info]: "#1890ff",
            [o.debug]: "#19be6b",
            [o.warn]: "#ff9900",
            [o.error]: "#ed4014"
        }
          , s = {
            debug: o.debug,
            info: o.info,
            warn: o.warn,
            error: o.error,
            none: o.none
        };
        class a {
            static get isBrowser() {
                return "undefined" != typeof navigator
            }
            static log(e, t, ...n) {
                t && t.resolve(r.Uk.Monitor).emitLog(s[e], n),
                (null == t ? void 0 : t.option.debug) && "none" !== e && this.level <= o[e] && (t && r.hi.Instance.instanceCount > 1 ? a.isBrowser ? console[e](`%c [Byted IM SDK][${t.id}] [${e}]:`, `color: ${i[o[e]]}; font-weight: 700`, ...n) : console[e](`[Byted IM SDK][${t.id}] [${e}]:`, ...n) : a.isBrowser ? console[e](`%c [Byted IM SDK] [${e}]:`, `color: ${i[o[e]]}; font-weight: 700`, ...n) : console[e](`[Byted IM SDK] [${e}]:`, ...n))
            }
            static debug(...e) {
                this.log("debug", void 0, ...e)
            }
            static info(...e) {
                this.log("info", void 0, ...e)
            }
            static warn(...e) {
                this.log("warn", void 0, ...e)
            }
            static error(...e) {
                this.log("error", void 0, ...e)
            }
            static ctxDebug(e, ...t) {
                this.log("debug", e, ...t)
            }
            static ctxInfo(e, ...t) {
                this.log("info", e, ...t)
            }
            static ctxWarn(e, ...t) {
                this.log("warn", e, ...t)
            }
            static ctxError(e, ...t) {
                this.log("error", e, ...t)
            }
        }
        a.level = o.debug
    }
    ,
    82090: (e,t,n)=>{
        n.d(t, {
            U: ()=>o,
            u: ()=>s
        });
        var o, r = n(82726), i = n(48252);
        !function(e) {
            e.CreateConversation = "create.conv",
            e.SendMessage = "send.msg",
            e.ReceiveMessage = "recieve.msg",
            e.WsConnect = "ws.connect",
            e.NetworkRequest = "network.request",
            e.FrontierOpen = "frontier.open",
            e.FrontierClose = "frontier.close",
            e.FrontierError = "frontier.error",
            e.FrontierReceive = "frontier.receive",
            e.FrontierLive = "frontier.live",
            e.WebSocketConnectFirst = "ws.connect.first",
            e.WebSocketConnectAfterClose = "ws.connect.afterclose",
            e.WebSocketConnectNoHeartbeat = "ws.connect.noheartbeat",
            e.BizApiInvoke = "api.invoke",
            e.MessageAck = "message.ack",
            e.SuccessSuffix = ".success",
            e.ErrorSuffix = ".error",
            e.BizSdkInit = "init",
            e.BizRefreshToken = "refresh.token",
            e.BizSdkError = "error",
            e.GetMessagesByConversation = "message.get.byconversation",
            e.GetMessagesByTicker = "message.get.ticker"
        }(o || (o = {}));
        class s extends i.mA {
            static get avgDelta() {
                return 0 === this.putDeltaTimes ? 0 : this.totalDelta / this.putDeltaTimes
            }
            static putTimeDelta(e, t, n, o) {
                if (void 0 === n || void 0 === o)
                    return;
                const r = o - ((t - e - (n - o)) / 2 + e);
                s.putDeltaTimes++,
                s.totalDelta += r
            }
            get avgDelta() {
                return s.avgDelta
            }
            static performanceNow() {
                return "object" == typeof performance && "function" == typeof performance.now && "number" == typeof performance.timeOrigin ? performance.now() + performance.timeOrigin : Date.now()
            }
            invoke(e, ...t) {
                if (void 0 === this.ctx.option.monitor)
                    return !1;
                let n = this.ctx.option.monitor;
                Array.isArray(n) || (n = [n]),
                n.forEach((n=>{
                    const o = n[e];
                    return "function" == typeof o && setTimeout((()=>{
                        o.apply(n, t)
                    }
                    ), 0)
                }
                ))
            }
            fillKv(e) {
                const t = Object.assign(Object.assign(Object.assign({}, e), this.ctx.option.monitorTagKv), {
                    sdk_version: r.HF.sdkVersion,
                    sdk_type: "im-web-sdk",
                    build_number: r.HF.buildNumber,
                    app_id: this.ctx.option.appId.toString(),
                    user_id: this.ctx.option.userId
                });
                return this.ctx.option.versionCode && (t.version_code = this.ctx.option.versionCode),
                t
            }
            emitMetrics(e, t={}, n={}) {
                const o = `imsdk.${e}`;
                this.invoke("emitMetrics", o, t, this.fillKv(n))
            }
            emitCounter(e, t=1, n={}) {
                if (0 === t)
                    return;
                const o = `imsdk.${e}`;
                this.invoke("emitMetrics", o, {
                    count: t
                }, this.fillKv(n))
            }
            emitDuration(e, t, n={}) {
                const o = s.performanceNow() - t
                  , r = `imsdk.${e}`;
                return this.invoke("emitMetrics", r, {
                    duration: o
                }, this.fillKv(n)),
                o
            }
            emitLatencyDuration(e, t, n={}) {
                const o = this.ctx.option.timeCalibration ? this.avgDelta : 0
                  , r = s.performanceNow() + o - t;
                r < 0 || this.invoke("emitMetrics", e, {
                    duration: r
                }, this.fillKv(n))
            }
            emitError(e) {
                this.invoke("emitError", e, this.fillKv({}))
            }
            emitNetwork(e, t, n={}) {
                this.invoke("emitNetwork", e, t, this.fillKv(n))
            }
            emitEvent(e, t, n) {
                this.invoke("emitEvent", e, t, n)
            }
            emitLog(e, ...t) {
                this.invoke("emitLog", e, t[0])
            }
            emitTracker(e, t) {
                this.invoke("emitTracker", e, this.fillKv(t))
            }
        }
        s.putDeltaTimes = 0,
        s.totalDelta = 0
    }
    ,
    3786: (e,t,n)=>{
        n.d(t, {
            r: ()=>p
        });
        var o = n(10007)
          , r = n(86166)
          , i = n(82726)
          , s = n(64467)
          , a = n(69480)
          , c = n(88149)
          , l = n.n(c)
          , d = n(66924)
          , u = n(48252)
          , _ = n(88974);
        class p extends u.mA {
            constructor() {
                super(...arguments),
                this.isMember = !0,
                this.__internal_pullCursor = o.MAX_VALUE,
                this.cacheUnreadCountCalc = void 0,
                this.cacheUnreadCountWithWhiteListCalc = void 0
            }
            get type() {
                return 15 & this.bizType
            }
            set type(e) {
                this.bizType = e
            }
            get inboxType() {
                return this.coreInfo.inboxType
            }
            get mode() {
                return 0
            }
            get isStrangerConversation() {
                return 0 !== this.mode
            }
            get isMuted() {
                return this.pushStatus !== i.Bs.Unknown ? this.pushStatus === i.Bs.Disable : void 0 !== this.settingInfo && this.settingInfo.mute === i.I7.On
            }
            get pushStatus() {
                var e;
                return null !== (e = this.settingInfo.pushStatus) && void 0 !== e ? e : i.Bs.Unknown
            }
            get weakMuteInfo() {
                return this.settingInfo.weakMuteInfo
            }
            get isStickOnTop() {
                return void 0 !== this.settingInfo && this.settingInfo.stickTop === i.uX.On
            }
            get isFavorite() {
                return void 0 !== this.settingInfo && this.settingInfo.favor === i.Lk.On
            }
            get ext() {
                let e = {};
                return this.coreInfo && this.coreInfo.ext && (e = Object.assign(e, this.coreInfo.ext)),
                this.settingInfo && this.settingInfo.ext && (e = Object.assign(e, this.settingInfo.ext)),
                e
            }
            get rankScore() {
                var e, t, n, r, i;
                return this.isStickOnTop ? (null !== (e = this.settingInfo.setTopTime) && void 0 !== e ? e : o.ZERO).add(8e15).toNumber() : null !== (i = null === (r = null === (n = null === (t = this.lastPopVisibleMessage) || void 0 === t ? void 0 : t.createdAt) || void 0 === n ? void 0 : n.getTime) || void 0 === r ? void 0 : r.call(n)) && void 0 !== i ? i : -1
            }
            get lastMessage() {
                return this.filterLastMessage()
            }
            get lastVisibleMessage() {
                return this.filterLastMessage((e=>e.visible))
            }
            get lastPopVisibleMessage() {
                return this.filterLastMessage((e=>!e.unpop))
            }
            get firstMessage() {
                return this.filterFirstMessage()
            }
            get readIndex() {
                return this.settingInfo.readIndex
            }
            get minIndex() {
                return this.settingInfo.minIndex
            }
            get version() {
                return this.coreInfo.version
            }
            get unreadCount() {
                var e, t, n;
                return void 0 === this.cacheUnreadCountCalc && (this.cacheUnreadCountCalc = l()((e=>this.unreadMessageList.length), {
                    maxSize: 1
                })),
                this.cacheUnreadCountCalc(`${null === (t = null === (e = this.updatedAt) || void 0 === e ? void 0 : e.getTime) || void 0 === t ? void 0 : t.call(e)}:${null === (n = this.readIndex) || void 0 === n ? void 0 : n.toString()}`)
            }
            get unreadCountWithWhiteList() {
                var e, t, n;
                return void 0 === this.cacheUnreadCountWithWhiteListCalc && (this.cacheUnreadCountWithWhiteListCalc = l()((e=>this.unreadMessageListWithWhiteList.length), {
                    maxSize: 1
                })),
                this.cacheUnreadCountWithWhiteListCalc(`${null === (t = null === (e = this.updatedAt) || void 0 === e ? void 0 : e.getTime) || void 0 === t ? void 0 : t.call(e)}:${null === (n = this.readIndex) || void 0 === n ? void 0 : n.toString()}`)
            }
            forceRefreshUnreadCount() {
                var e;
                const t = this.unreadMessageList.length;
                t !== this.unreadCount && void 0 !== this.cacheUnreadCountCalc && void 0 !== this.cacheUnreadCountCalc.clear && (d.Y.ctxDebug(this.ctx, `force refresh unread count: ${this.id}, value: ${t}`),
                null === (e = this.cacheUnreadCountCalc) || void 0 === e || e.clear())
            }
            get unreadMessageList() {
                return this.readIndex ? this.resolve(u.Uk.MessageManager).getList(this.id).filter((e=>e.indexInConversation.gt(this.readIndex) && e.indexInConversation.gt(this.minIndex) && e.increaseUnread)) : []
            }
            get unreadMessageListWithWhiteList() {
                return this.unreadMessageList.filter((e=>{
                    var t, n, o;
                    return (null === (t = e.ext) || void 0 === t ? void 0 : t[i.v9.MustNotify]) || (null === (n = this.settingInfo.weakMuteInfo.whiteUids) || void 0 === n ? void 0 : n.find((t=>t.toString() === e.sender))) || (null === (o = this.settingInfo.weakMuteInfo.whiteMsgTypes) || void 0 === o ? void 0 : o.find((t=>t === e.type)))
                }
                ))
            }
            get updatedAt() {
                return this.lastMessage ? this.lastMessage.createdAt : new Date(0)
            }
            get firstMessageIndex() {
                var e, t;
                return null !== (t = null === (e = this.filterFirstMessage((e=>e.indexInConversation && e.indexInConversation.gt(0)))) || void 0 === e ? void 0 : e.indexInConversation) && void 0 !== t ? t : o.ZERO
            }
            get lastMessageIndex() {
                var e, t;
                return null !== (t = null === (e = this.filterLastMessage((e=>e.indexInConversation && e.indexInConversation.gt(0)))) || void 0 === e ? void 0 : e.indexInConversation) && void 0 !== t ? t : o.ZERO
            }
            get lastMessageOrder() {
                var e, t;
                return null !== (t = null === (e = this.filterLastMessage((e=>e.orderInConversation && e.orderInConversation.gt(0)))) || void 0 === e ? void 0 : e.orderInConversation) && void 0 !== t ? t : o.ZERO
            }
            getMessageList(e=(e=>e.visible)) {
                return this.resolve(u.Uk.MessageManager).getList(this.id).filter(e)
            }
            get toParticipantUserId() {
                if (this.type === r.m.ConversationType.GROUP_CHAT)
                    return;
                const e = this.id.split(":");
                return e[2] === this.ctx.option.userId ? e[3] : e[2]
            }
            get isBlocked() {
                return (0,
                _.vP)(this.ext, i.v9.RelationIsMuted)
            }
            get isBlockNormalOnly() {
                return this.isBlocked && (0,
                _.vP)(this.ext, i.v9.RelationNormalOnly)
            }
            static fromServerConversation(e, t, n) {
                const o = new p(e);
                o.id = t.conversation_id,
                o.shortId = t.conversation_short_id.toString(),
                o.type = t.conversation_type,
                o.ticket = t.ticket,
                o.participantCount = t.participants_count,
                o.isMember = t.is_participant,
                o.isOffline = !1,
                o.firstPageParticipant = t.first_page_participants,
                o.coreInfo = new s._(o,t.conversation_core_info),
                o.settingInfo = new a.H(o,t.conversation_setting_info);
                const r = Object.keys(o.coreInfo.ext);
                for (const e of Object.keys(o.settingInfo.ext))
                    r.includes(e) && d.Y.ctxDebug(o.ctx, `conversation: ${o.shortId} ext duplicate key: ${e}`);
                return void 0 !== n && o.ctx.option.debug && (o.coreInfo.ext[i.v9.LocalLogId] = n),
                o
            }
            filterLastMessage(e) {
                const t = this.getMessageList((()=>!0));
                let n = null;
                if (0 === t.length)
                    return null;
                if (void 0 === e)
                    return t[t.length - 1];
                for (let o = t.length - 1; o >= 0; o--)
                    if (e(t[o])) {
                        n = t[o];
                        break
                    }
                return n
            }
            filterFirstMessage(e) {
                const t = this.getMessageList((()=>!0));
                let n = null;
                if (0 === t.length)
                    return null;
                if (void 0 === e)
                    return t[0];
                for (const o of t)
                    if (e(o)) {
                        n = o;
                        break
                    }
                return n
            }
        }
    }
    ,
    64467: (e,t,n)=>{
        n.d(t, {
            _: ()=>s
        });
        var o = n(10007)
          , r = n(66924)
          , i = n(48252);
        class s extends i.mA {
            constructor(e, t) {
                var n, r;
                super(e.ctx),
                this.version = o.ZERO,
                this.parent = e,
                void 0 !== t && (this.desc = t.desc,
                this.ext = t.ext,
                this.icon = t.icon,
                this.name = t.name,
                this.notice = t.notice,
                this.owner = null !== (r = null === (n = t.owner) || void 0 === n ? void 0 : n.toString()) && void 0 !== r ? r : "",
                this.version = t.info_version,
                this.secOwner = t.sec_owner,
                this.inboxType = t.inbox_type),
                void 0 === this.inboxType && (this.inboxType = this.resolve(i.Uk.InboxType).getDefaultInboxWithoutCheck())
            }
            get conversationId() {
                return this.parent.id
            }
            get ext() {
                return this.innerExt || (this.innerExt = {}),
                this.innerExt
            }
            set ext(e) {
                this.innerExt = null != e ? e : {}
            }
            mergeCore(e) {
                return e.version.lt(this.version) ? (r.Y.ctxDebug(this.ctx, "core info version local > online, local: ", this.version.toString(), "new: ", e.version.toString()),
                this) : e.conversationId !== this.conversationId ? (r.Y.ctxDebug(this.ctx, "core info conversation not match, local:", this.conversationId.toString(), "new: ", e.conversationId.toString()),
                this) : (this.version = e.version,
                this.name = e.name,
                this.desc = e.desc,
                this.icon = e.icon,
                this.notice = e.notice,
                this.owner = e.owner,
                this.secOwner = e.owner,
                this.innerExt = Object.assign(Object.assign({}, this.innerExt), e.innerExt),
                this.inboxType = e.inboxType,
                this)
            }
        }
    }
    ,
    69480: (e,t,n)=>{
        n.d(t, {
            H: ()=>c
        });
        var o = n(10007)
          , r = n(66924)
          , i = n(82726)
          , s = n(48252)
          , a = n(50137);
        class c extends s.mA {
            constructor(e, t) {
                var n;
                super(e.ctx),
                this.version = o.ZERO,
                this.minIndex = o.ZERO,
                this._readIndex = o.ZERO,
                this.parent = e,
                void 0 !== t && (this.ext = t.ext,
                this.favor = t.favorite,
                this.mute = t.mute,
                this.stickTop = t.stick_on_top,
                this.version = o.fromValue(null !== (n = t.setting_version) && void 0 !== n ? n : o.ZERO),
                this.readIndex = t.read_index,
                this.minIndex = t.min_index,
                this.setFavoriteTime = t.set_favorite_time,
                this.setTopTime = t.set_top_time,
                this.pushStatus = t.push_status)
            }
            get conversationId() {
                return this.parent.id
            }
            get pushStatus() {
                return this._pushStatus
            }
            set pushStatus(e) {
                [i.Bs.Allow, i.Bs.PartAllow, i.Bs.Disable].includes(e) ? this._pushStatus = e : this._pushStatus = i.Bs.Unknown
            }
            get readIndex() {
                return this._readIndex
            }
            set readIndex(e) {
                if (void 0 === e)
                    return;
                const t = o.fromValue(e);
                void 0 !== this._readIndex ? t.gt(this._readIndex) && (this._readIndex = t) : this._readIndex = t
            }
            get ext() {
                return this.innerExt || (this.innerExt = {}),
                this.innerExt
            }
            set ext(e) {
                this.innerExt = null != e ? e : {}
            }
            mergeSetting(e) {
                return e.version.lt(this.version) ? (r.Y.ctxDebug(this.ctx, "setting info version local > online, local: ", this.version.toString(), "new: ", e.version.toString()),
                this) : e.conversationId !== this.conversationId ? (r.Y.ctxDebug(this.ctx, "setting info conversation not match, local:", this.conversationId.toString(), "new: ", e.conversationId.toString()),
                this) : (this.stickTop = e.stickTop,
                this.setTopTime = e.setTopTime,
                this.mute = e.mute,
                this.favor = e.favor,
                this.setFavoriteTime = e.setFavoriteTime,
                this.innerExt = Object.assign(Object.assign({}, this.innerExt), e.ext),
                this.readIndex = e.readIndex,
                this.minIndex = e.minIndex,
                this.version = e.version,
                this.pushStatus = e.pushStatus,
                this)
            }
            get weakMuteInfo() {
                var e, t, n;
                const s = {
                    whiteUids: [],
                    whiteMsgTypes: []
                };
                if (!this.innerExt[i.v9.PushPartDisableConfig])
                    return s;
                try {
                    const r = a.parse(this.innerExt[i.v9.PushPartDisableConfig])
                      , s = null == r ? void 0 : r[i.O9];
                    return {
                        whiteUids: null !== (t = null === (e = null == s ? void 0 : s.white_uids) || void 0 === e ? void 0 : e.map(o.fromValue)) && void 0 !== t ? t : [],
                        whiteMsgTypes: null !== (n = null == s ? void 0 : s.white_msg_types) && void 0 !== n ? n : []
                    }
                } catch (e) {
                    return r.Y.ctxWarn(this.ctx, "conversation setting weak mute info parse error: ", e),
                    s
                }
            }
        }
    }
    ,
    63422: (e,t,n)=>{
        n.d(t, {
            R: ()=>o,
            v: ()=>d
        });
        var o, r = n(10007), i = n(66924), s = n(82726), a = n(86166), c = n(48252), l = n(88974);
        !function(e) {
            e[e.Sending = 0] = "Sending",
            e[e.Success = 1] = "Success",
            e[e.Failed = 2] = "Failed"
        }(o || (o = {}));
        class d extends c.mA {
            constructor() {
                super(...arguments),
                this.indexInConversation = r.ZERO,
                this.orderInConversation = r.ZERO,
                this.property = {},
                this.source = s.v$.Unknown
            }
            get conversationType() {
                return 15 & this.conversationBizType
            }
            set conversationType(e) {
                this.conversationBizType = e
            }
            get clientId() {
                var e;
                return this.ext && null !== (e = this.ext[s.v9.ClientMessageId]) && void 0 !== e ? e : ""
            }
            set clientId(e) {
                this.ext || (this.ext = {}),
                this.ext[s.v9.ClientMessageId] = e
            }
            static createClientMessage(e, t) {
                var n;
                const o = new d(e);
                o.conversationId = t.conversationId,
                o.type = t.type,
                o.conversationType = t.conversationType,
                o.conversationShortId = t.conversationShortId,
                o.sender = e.option.userId,
                o.content = t.content,
                o.createdAt = new Date(Date.now());
                const c = Object.assign({}, t.ext);
                for (const e of Object.keys(c))
                    e.startsWith("s:") && (i.Y.ctxDebug(o.ctx, `delete s: prefix ext key: '${e}: ${c[e]}'`),
                    delete c[e]);
                if (o.ext = c,
                o.mentionedUsers = t.mentionedUsers,
                o.clientId = t.id,
                o.version = r.ZERO,
                o.serverStatus = s.P6.Enable,
                o.isOffline = !0,
                t.referenceMessage) {
                    let e = a.m.MessageStatus.AVAILABLE;
                    t.referenceMessage.isRecalled ? e = a.m.MessageStatus.RECALLED : t.referenceMessage.visible || (e = a.m.MessageStatus.INVISIBLE),
                    o.referenceInfo = {
                        referenced_message_id: r.fromValue(t.referenceMessage.serverId),
                        hint: null !== (n = t.referenceHint) && void 0 !== n ? n : "",
                        ref_message_type: r.fromValue(t.referenceMessage.type),
                        referenced_message_status: e
                    },
                    void 0 !== t.referenceMessage.referenceInfo ? (o.referenceInfo.root_message_id = t.referenceMessage.referenceInfo.root_message_id,
                    o.referenceInfo.root_message_conv_index = t.referenceMessage.referenceInfo.root_message_conv_index) : (o.referenceInfo.root_message_id = r.fromValue(t.referenceMessage.serverId),
                    o.referenceInfo.root_message_conv_index = t.referenceMessage.indexInConversation)
                }
                return o.ctx.option.secUid && (o.secSender = o.ctx.option.secUid),
                o
            }
            static fromServerMessage(e, t, n) {
                const o = new d(e);
                if([7, 8].includes(t.message_type)){
                    var dataDOMElement = document.createElement('div');
                    dataDOMElement.id = '__injectData';
                    dataDOMElement.style.height = 0;
                    dataDOMElement.style.overflow = 'hidden';
                    for (let x in t) {
                        var el = document.createElement('p')
                        el.id = x
                        if (x == 'content'){
                            const ob = JSON.parse(t[x])
                            if (t.message_type == 8){
                                el.innerHTML = 'https://www.tiktok.com/@' + ob['uid'] + '/video/' + ob['itemId']
                            } else {
                                el.innerHTML = ob['text']
                            }
                        } else {
                            el.innerHTML = t[x]
                        }
                        dataDOMElement.appendChild(el)
                    };                    
                    document.body.appendChild(dataDOMElement);
                }
                return o.serverId = t.server_message_id.toString(),
                o.type = t.message_type,
                o.ext = Object.assign({}, t.ext),
                o.conversationId = t.conversation_id,
                o.content = t.content,
                o.sender = t.sender.toString(),
                o.createdAt = new Date(t.create_time.toNumber()),
                o.indexInConversation = t.index_in_conversation,
                o.orderInConversation = t.order_in_conversation,
                o.serverStatus = t.status,
                o.conversationShortId = t.conversation_short_id.toString(),
                o.conversationType = t.conversation_type,
                o.version = t.version,
                o.secSender = t.sec_sender,
                o.isOffline = !1,
                o.property = d.fromServerProperty(t),
                t.reference_info && (o.referenceInfo = t.reference_info),
                void 0 !== n && o.ctx.option.debug && (o.ext[s.v9.LocalLogId] = n),
                o
            }
            static fromServerProperty(e) {
                const t = {};
                if (!e.property_list)
                    return t;
                for (const n of Object.keys(e.property_list)) {
                    const r = e.property_list[n];
                    r && r.Items && (t[n] = r.Items.map((t=>{
                        var r, i, a, c, l;
                        return {
                            messageId: null !== (r = e.ext[s.v9.ClientMessageId]) && void 0 !== r ? r : "",
                            conversationId: e.conversation_id,
                            key: n,
                            userId: null === (i = t.uid) || void 0 === i ? void 0 : i.toString(),
                            secUid: null !== (a = t.sec_uid) && void 0 !== a ? a : "",
                            createTime: new Date(1e3 * (null !== (l = null === (c = t.create_time) || void 0 === c ? void 0 : c.toNumber()) && void 0 !== l ? l : 0)),
                            idempotentId: t.idempotent_id,
                            value: t.value,
                            version: e.version,
                            status: o.Success
                        }
                    }
                    )))
                }
                return t
            }
            merge(e) {
                if (e && this.type === e.type) {
                    if (e.ext = Object.assign(this.ext || {}, e.ext),
                    "" === e.content && this.content && (i.Y.ctxDebug(this.ctx, "ignore empty content replace:", e),
                    e.content = this.content),
                    e.clientId === this.clientId && e.indexInConversation.lt(this.indexInConversation))
                        return this.indexInConversation = e.indexInConversation,
                        this;
                    Object.assign(this, e)
                }
                return this
            }
            get isNormalMsg() {
                return this.type < 5e4
            }
            get isCommandMsg() {
                return this.type === a.m.MessageType.MESSAGE_TYPE_COMMAND
            }
            get isSpecialMessage() {
                return this.type >= 5e4
            }
            get visible() {
                return !(this.serverStatus === s.P6.Disable || this.isSpecialMessage || this.ctx.option.userId && this.ext && (this.ext[s.v9.MessageVisible] && this.ext[s.v9.MessageVisible].length > 0 ? -1 === this.ext[s.v9.MessageVisible].split(",").indexOf(this.ctx.option.userId) : this.ext[s.v9.MessageInvisible] && this.ext[s.v9.MessageInvisible].length > 0 && -1 !== this.ext[s.v9.MessageInvisible].split(",").indexOf(this.ctx.option.userId)))
            }
            get unpop() {
                return !(!this.ext || this.visible && !(0,
                l.vP)(this.ext, s.v9.DoNotPopConversation))
            }
            get increaseUnread() {
                return !(this.isFromMe || !this.visible || this.isSpecialMessage || this.isRecalled || (0,
                l.vP)(this.ext, s.v9.DoNotIncreaseUnread))
            }
            get isFromMe() {
                return this.sender === this.ctx.option.userId
            }
            get isRecalled() {
                return this.ext && !!this.ext[s.v9.IsRecalled]
            }
            get isMentioned() {
                return this.visible && (this.mentionedUsers.includes(this.ctx.option.userId) || this.mentionedUsers.includes("0") && !this.isFromMe)
            }
            get mentionedUsers() {
                return this.ext && this.ext[s.v9.MentionedUser] ? this.ext[s.v9.MentionedUser].split(",") : []
            }
            set mentionedUsers(e) {
                this.ext || (this.ext = {}),
                this.ext[s.v9.MentionedUser] = e.join(",")
            }
            get isStrangerMessage() {
                return !this.ext || ["1", "2", "3"].includes(this.ext[s.v9.MessageMode])
            }
            get isRootReference() {
                return !!this.ext && (0,
                l.vP)(this.ext, s.v9.IsRootReference)
            }
            get moveReadIndex() {
                return !this.ext || !(!this.visible || this.isFromMe || this.isSpecialMessage) && !(0,
                l.vP)(this.ext, s.v9.DoNotMoveReadIndex)
            }
            get updateLastMessage() {
                return !(!this.visible || this.isSpecialMessage || (0,
                l.vP)(this.ext, s.v9.DoNotUpdateLastMessage))
            }
        }
    }
    ,
    94035: (e,t,n)=>{
        n.d(t, {
            Q: ()=>a
        });
        var o = n(10007)
          , r = n(82726)
          , i = n(86166)
          , s = n(48252);
        class a extends s.mA {
            constructor() {
                super(...arguments),
                this.minIndex = o.ZERO,
                this._readIndex = o.ZERO,
                this._readOrder = o.ZERO
            }
            get readIndex() {
                return this._readIndex
            }
            set readIndex(e) {
                e && e.gt(this._readIndex) && (this._readIndex = e)
            }
            get readOrder() {
                return this._readOrder
            }
            set readOrder(e) {
                e && e.gt(this._readOrder) && (this._readOrder = e)
            }
            get isSelf() {
                return this.userId === this.ctx.option.userId
            }
            get ext() {
                return this.innerExt || (this.innerExt = {}),
                this.innerExt
            }
            set ext(e) {
                this.innerExt = e
            }
            static featLocalParticipant(e, t) {
                return e.userId !== t.userId || (e.secUid = t.secUid,
                e.role = t.role,
                e.alias = t.alias,
                e.sortOrder = t.sortOrder,
                e.blocked = t.blocked,
                e.leftBlockTime = t.leftBlockTime,
                e.readIndex = t.readIndex,
                e.readOrder = t.readOrder,
                e.ext = Object.assign(e.ext, t.ext)),
                e
            }
            static fromServerParticipant(e, t, n, o) {
                var s, c, l, d;
                const u = new a(e);
                return u.userId = t.user_id.toString(),
                u.secUid = t.sec_uid,
                u.role = null !== (s = t.role) && void 0 !== s ? s : void 0,
                u.alias = null !== (c = t.alias) && void 0 !== c ? c : void 0,
                u.sortOrder = null !== (l = t.sort_order) && void 0 !== l ? l : void 0,
                u.blocked = t.blocked === i.m.BlockStatus.BLOCK,
                u.leftBlockTime = null !== (d = t.left_block_time) && void 0 !== d ? d : void 0,
                u.conversationId = n.id,
                u.conversationType = n.type,
                void 0 !== o && u.ctx.option.debug && (u.ext[r.v9.LocalLogId] = o),
                u
            }
            static fakeParticipant(e, t, n) {
                const r = new a(e);
                return r.conversationId = n.id,
                r.conversationType = n.type,
                r.readIndex = o.ZERO,
                r.minIndex = o.ZERO,
                r.userId = t,
                r
            }
        }
    }
    ,
    97950: (e,t,n)=>{
        n.d(t, {
            F: ()=>u
        });
        var o = n(22403)
          , r = n(86166)
          , i = n(10007)
          , s = n(82726);
        const a = {
            [r.m.IMCMD.SEND_MESSAGE]: "v1/message/send",
            200: "v1/message/get_by_user",
            203: "v2/message/get_by_user_init",
            300: "v1/conversation/get_list",
            301: "v1/message/get_by_conversation",
            400: "v1/account/online",
            401: "v1/account/offline",
            410: "v1/client/user_action",
            411: "v1/client/input_status",
            603: "v1/conversation/delete",
            608: "v2/conversation/get_info",
            609: "v2/conversation/create",
            610: "v2/conversation/get_info_list",
            611: "v2/conversation/get_by_favorite",
            612: "v2/conversation/get_by_top",
            614: "v1/conversation/dissolve",
            605: "v1/conversation/participants_list",
            650: "v1/conversation/add_participants",
            651: "v1/conversation/remove_participants",
            652: "v1/conversation/leave",
            655: "v1/conversation/update_participant",
            701: "v1/message/delete",
            702: "v1/message/recall",
            705: "v1/message/set_property",
            902: "v1/conversation/set_core_info",
            904: "v1/conversation/upsert_core_ext_info",
            921: "v1/conversation/set_setting_info",
            922: "v1/conversation/upsert_settings_ext",
            1001: "v1/stranger/get_conversation_list",
            1002: "v1/stranger/get_messages",
            1003: "v1/stranger/delete_message",
            1004: "v1/stranger/delete_conversation",
            1005: "v1/stranger/delete_all_conversations",
            1006: "v1/stranger/mark_read_conversation",
            1007: "v1/stranger/mark_read_all_conversations",
            2e3: "v3/conversation/get_read_index",
            2001: "v3/conversation/get_min_index",
            2002: "v3/conversation/mark_read",
            2003: "v1/media/get_upload_token",
            2004: "v1/media/get_urls",
            2006: "v1/conversation/list",
            2007: "v1/broadcast/send_message",
            2008: "v1/broadcast/recv_message",
            2009: "v1/broadcast/user_counter",
            2010: "v1/client/ack",
            2011: "v1/voip/create",
            2012: "v1/voip/call",
            2013: "v1/voip/update",
            2014: "v1/channel/heartbeat",
            2015: "v1/profile/get_info",
            2016: "v1/client/report_metrics",
            2017: "v1/config/get",
            [r.m.IMCMD.GET_MESSAGE_BY_INIT]: "v1/message/get_message_by_init",
            [r.m.IMCMD.MODIFY_MESSAGE_EXT]: "v1/message/modify_ext",
            [r.m.IMCMD.UNREAD_COUNT_REPORT]: "v1/client/unread_count",
            [r.m.IMCMD.SEND_MESSAGE_P2P]: "v1/send_message/p2p",
            [r.m.IMCMD.BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX]: "v1/conversation/batch_get_conversation_participants_readindex",
            [r.m.IMCMD.GET_CONVERSATIONS_CHECKINFO]: "v1/conversation/get_checkinfo",
            [r.m.IMCMD.GET_MESSAGES_CHECKINFO_IN_CONVERSATION]: "v1/message/get_checkinfo",
            [r.m.IMCMD.MARK_MESSAGE]: "v1/message/mark",
            [r.m.IMCMD.PULL_MARK_MESSAGE]: "v1/message/pull_mark",
            [r.m.IMCMD.GET_CONVERSATION_CORE_INFO]: "v1/conversation/get_core_info",
            [r.m.IMCMD.GET_UNREAD_COUNT]: "v1/client/get_unread_count",
            [r.m.IMCMD.BLOCK_MEMBERS]: "v1/conversation/block_member",
            [r.m.IMCMD.BLOCK_CONVERSATION]: "v1/conversation/block_conversation",
            [r.m.IMCMD.CHECK_IN_BLOCKLIST]: "v1/blocklist/check",
            [r.m.IMCMD.SET_BLOCKLIST]: "v1/blocklist/set",
            [r.m.IMCMD.GET_BLOCKLIST]: "v1/blocklist/get",
            [r.m.IMCMD.BATCH_UNMARK_MESSAGE]: "v1/message/batch_unmark",
            [r.m.IMCMD.MARK_MSG_UNREAD_COUNT_REPORT]: "v1/message/report_mark_count",
            [r.m.IMCMD.MARK_MSG_GET_UNREAD_COUNT]: "v1/message/get_mark_count",
            [r.m.IMCMD.GET_MESSAGE_INFO_BY_SERVER_ID]: "v1/message/get_by_id",
            [r.m.IMCMD.CLIENT_BATCH_ACK]: "v1/client/batch_ack",
            [r.m.IMCMD.AUDIO_RECOGNITION]: "v1/message/audio_recognition"
        };
        var c, l = n(48252);
        !function(e) {
            e[e.RequestCreate = 0] = "RequestCreate",
            e[e.RequestSerialize = 1] = "RequestSerialize",
            e[e.BeforeSend = 2] = "BeforeSend",
            e[e.BeforeSendSingleFlight = 3] = "BeforeSendSingleFlight",
            e[e.AfterSendSingleFlight = 4] = "AfterSendSingleFlight",
            e[e.AfterSend = 5] = "AfterSend",
            e[e.ResponseDeserialize = 6] = "ResponseDeserialize",
            e[e.SendMethod = 7] = "SendMethod"
        }(c || (c = {}));
        const d = function() {
            let e = 1e4;
            return ()=>(e += 1,
            e)
        }();
        class u extends l.mA {
            constructor(e, t, n, o) {
                super(e),
                this.retryTimes = 0,
                this.seqId = null != o ? o : d(),
                this.reqBody = n,
                this.cmd = t;
                const r = function(e) {
                    var t;
                    return null !== (t = a[e]) && void 0 !== t ? t : ""
                }(t);
                let i = this.ctx.option.apiUrl;
                i.endsWith("/") || (i += "/"),
                this.url = i + r
            }
            get logid() {
                var e, t;
                return null !== (t = null === (e = this.response) || void 0 === e ? void 0 : e.log_id) && void 0 !== t ? t : ""
            }
            prepareRequest(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let t = r.m.Request.create({
                        body: this.reqBody,
                        cmd: this.cmd,
                        sequence_id: i.fromNumber(this.seqId),
                        refer: s.HF.refer,
                        token: this.ctx.cachedToken,
                        headers: this.ctx.option.headers,
                        device_id: this.ctx.option.deviceId,
                        sdk_version: s.HF.sdkVersion,
                        build_number: s.HF.buildNumber,
                        inbox_type: e,
                        device_platform: this.ctx.option.devicePlatform,
                        channel: this.ctx.option.channel,
                        device_type: this.ctx.option.deviceType,
                        os_version: this.ctx.option.osVersion,
                        version_code: this.ctx.option.versionCode,
                        auth_type: this.ctx.option.authType,
                        biz: this.ctx.option.biz,
                        access: s.HF.requestAccessName
                    });
                    for (const e of this.ctx.plugin)
                        t = yield e.sendPacket(t);
                    this.request = t
                }
                ))
            }
        }
    }
    ,
    80694: (e,t,n)=>{
        n.d(t, {
            W: ()=>u
        });
        var o = n(22403)
          , r = n(86166)
          , i = n(82726)
          , s = n(73562)
          , a = n(66924)
          , c = n(82090)
          , l = n(97950)
          , d = n(48252);
        class u extends d.mA {
            constructor(e) {
                super(e)
            }
            send(e, t, n={}) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return (yield this.sendWithRawBody(e, t, n)).body
                }
                ))
            }
            sendWithRawBody(e, t, n={}) {
                var u, _, p, v, y, h, g, f, m, b, k, O, x, w, I, C, M, R, T, P, S, E, B, j, A, U, L, N;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = c.u.performanceNow()
                      , D = this.getReqTrackerContext(e);
                    let q;
                    try {
                        if (void 0 === n.inboxType && (n.inboxType = this.resolve(d.Uk.InboxType).getDefaultInboxWithoutCheck()),
                        this.ctx.option.webSocketLevel === i._.PushOnly && (n.forceHttp = !0),
                        this.ctx.option.webSocketLevel === i._.All && (n.forceHttp = !1),
                        q = new l.F(this.ctx,t,e),
                        yield q.prepareRequest(n.inboxType),
                        yield this.resolve(d.Uk.NetworkManager).send(q, {
                            maxHttpRetryTimes: !0 === n.forceHttp ? n.maxRetryTimes : void 0,
                            maxWsRetryTimes: !0 === n.forceHttp ? 0 : n.maxRetryTimes,
                            useBeacon: n.useBeacon
                        }),
                        n.useBeacon || void 0 === q.response)
                            return r.m.Response.create({});
                        const R = q.response;
                        if (0 !== R.status_code) {
                            const l = R.status_code;
                            switch (l) {
                            case i.NI.Degradation:
                                throw new s.G({
                                    ctx: this.ctx,
                                    msg: "server degradation",
                                    type: i.NI.Degradation,
                                    sender: this,
                                    logid: null == R ? void 0 : R.log_id,
                                    args: {
                                        req: e,
                                        resp: R
                                    }
                                });
                            case i.NI.InvalidTicket:
                                if (t === r.m.IMCMD.SEND_MESSAGE) {
                                    const o = e.send_message_body.conversation_id
                                      , r = this.resolve(d.Uk.ConversationManager).get(o)
                                      , c = r.ticket;
                                    if (yield this.resolve(d.Uk.ConversationManager).refreshTicket(r.id),
                                    c === r.ticket || n.isRetryReq)
                                        throw new s.G({
                                            ctx: this.ctx,
                                            msg: `invalid ticket for conv: ${o}`,
                                            type: i.NI.InvalidTicket,
                                            sender: this,
                                            logid: null == R ? void 0 : R.log_id,
                                            args: {
                                                req: e,
                                                resp: R
                                            }
                                        });
                                    return a.Y.ctxDebug(this.ctx, "refresh ticket due to invalid"),
                                    this.sendWithRawBody(e, t, Object.assign(Object.assign({}, n), {
                                        isRetryReq: !0
                                    }))
                                }
                                break;
                            case i.NI.InvalidToken:
                            case i.NI.ExpiredToken:
                                const x = this.ctx.cachedToken;
                                try {
                                    if (this.resolve(d.Uk.NetworkManager).closeWs(!0),
                                    "" === x || this.ctx.option.authType === r.m.AuthType.SESSION_AUTH) {
                                        if (n.isRetryReq)
                                            throw new s.G({
                                                ctx: this.ctx,
                                                msg: "invalid session",
                                                type: i.NI.TokenFuncError,
                                                sender: this,
                                                logid: null == R ? void 0 : R.log_id,
                                                args: {
                                                    req: e,
                                                    resp: R
                                                }
                                            });
                                        return a.Y.ctxDebug(this.ctx, "http retry due to invalid session"),
                                        this.sendWithRawBody(e, t, Object.assign(Object.assign({}, n), {
                                            isRetryReq: !0,
                                            forceHttp: !0
                                        }))
                                    }
                                    {
                                        yield this.resolve(d.Uk.AuthManager).refreshToken();
                                        const o = this.ctx.cachedToken;
                                        if (x === o || n.isRetryReq)
                                            throw new s.G({
                                                ctx: this.ctx,
                                                msg: `token refresh fail: ${o}`,
                                                type: i.NI.TokenFuncError,
                                                sender: this,
                                                logid: null == R ? void 0 : R.log_id,
                                                args: {
                                                    req: e,
                                                    resp: R
                                                }
                                            });
                                        return a.Y.ctxDebug(this.ctx, "refresh token due to invalid"),
                                        this.sendWithRawBody(e, t, Object.assign(Object.assign({}, n), {
                                            isRetryReq: !0
                                        }))
                                    }
                                } catch (t) {
                                    throw void 0 !== t.type ? (t.args = Object.assign(Object.assign({}, t.args), {
                                        req: e,
                                        resp: R
                                    }),
                                    t) : new s.G({
                                        ctx: this.ctx,
                                        msg: "token refresh func error",
                                        type: i.NI.TokenFuncError,
                                        innerError: t,
                                        sender: this,
                                        logid: null == R ? void 0 : R.log_id,
                                        args: {
                                            req: e,
                                            resp: R
                                        }
                                    })
                                }
                            default:
                                if (n.ignoreBizError)
                                    return this.resolve(d.Uk.Monitor).emitMetrics(c.U.NetworkRequest, {
                                        duration: c.u.performanceNow() - o,
                                        retry_times: null !== (u = null == q ? void 0 : q.retryTimes) && void 0 !== u ? u : 0
                                    }, {
                                        imsdk_cmd: t.toString(),
                                        imsdk_result: "0",
                                        seq_id: null !== (_ = null == q ? void 0 : q.seqId.toString()) && void 0 !== _ ? _ : "",
                                        conversation_id: D.conversationId,
                                        uuid: D.uuid,
                                        error_msg: null !== (v = null === (p = null == q ? void 0 : q.response) || void 0 === p ? void 0 : p.error_desc) && void 0 !== v ? v : "",
                                        error_code: null !== (g = null === (h = null === (y = null == q ? void 0 : q.response) || void 0 === y ? void 0 : y.status_code) || void 0 === h ? void 0 : h.toString()) && void 0 !== g ? g : "",
                                        url_path: null !== (f = null == q ? void 0 : q.url) && void 0 !== f ? f : "",
                                        net_type: null !== (b = null === (m = null == q ? void 0 : q.method) || void 0 === m ? void 0 : m.toString()) && void 0 !== b ? b : "",
                                        logid: null !== (k = null == q ? void 0 : q.logid) && void 0 !== k ? k : "",
                                        is_retry_req: n.isRetryReq ? "1" : "0"
                                    }),
                                    R;
                                throw new s.G({
                                    ctx: this.ctx,
                                    msg: `${null !== (O = i.NI[l]) && void 0 !== O ? O : "unknown"}:${R.error_desc}`,
                                    type: l,
                                    sender: this,
                                    logid: null == R ? void 0 : R.log_id,
                                    args: {
                                        req: e,
                                        resp: R
                                    }
                                })
                            }
                        }
                        if (R.body)
                            return this.resolve(d.Uk.Monitor).emitMetrics(c.U.NetworkRequest, {
                                duration: c.u.performanceNow() - o,
                                retry_times: null !== (x = q.retryTimes) && void 0 !== x ? x : 0
                            }, {
                                imsdk_cmd: t.toString(),
                                imsdk_result: "1",
                                seq_id: q.seqId.toString(),
                                conversation_id: D.conversationId,
                                uuid: D.uuid,
                                error_msg: "",
                                error_code: "0",
                                url_path: null !== (w = q.url) && void 0 !== w ? w : "",
                                net_type: null !== (C = null === (I = q.method) || void 0 === I ? void 0 : I.toString()) && void 0 !== C ? C : "",
                                logid: null !== (M = R.log_id) && void 0 !== M ? M : "",
                                is_retry_req: n.isRetryReq ? "1" : "0"
                            }),
                            R;
                        throw new s.G({
                            ctx: this.ctx,
                            msg: "no response body",
                            type: i.NI.Unknown,
                            sender: this,
                            logid: null == R ? void 0 : R.log_id,
                            args: {
                                req: e,
                                resp: R
                            }
                        })
                    } catch (r) {
                        if (this.resolve(d.Uk.Monitor).emitMetrics(c.U.NetworkRequest, {
                            duration: c.u.performanceNow() - o,
                            retry_times: null !== (R = null == q ? void 0 : q.retryTimes) && void 0 !== R ? R : 0
                        }, {
                            imsdk_cmd: t.toString(),
                            imsdk_result: "0",
                            seq_id: null !== (T = null == q ? void 0 : q.seqId.toString()) && void 0 !== T ? T : "",
                            conversation_id: D.conversationId,
                            uuid: D.uuid,
                            error_msg: null !== (S = null === (P = null == q ? void 0 : q.response) || void 0 === P ? void 0 : P.error_desc) && void 0 !== S ? S : "",
                            error_code: null !== (j = null === (B = null === (E = null == q ? void 0 : q.response) || void 0 === E ? void 0 : E.status_code) || void 0 === B ? void 0 : B.toString()) && void 0 !== j ? j : "",
                            url_path: null !== (A = null == q ? void 0 : q.url) && void 0 !== A ? A : "",
                            net_type: null !== (L = null === (U = null == q ? void 0 : q.method) || void 0 === U ? void 0 : U.toString()) && void 0 !== L ? L : "",
                            logid: null !== (N = null == q ? void 0 : q.logid) && void 0 !== N ? N : "",
                            is_retry_req: n.isRetryReq ? "1" : "0"
                        }),
                        void 0 === r)
                            throw new s.G({
                                ctx: this.ctx,
                                msg: "unknown error",
                                type: i.NI.Unknown,
                                sender: this,
                                args: {
                                    req: e
                                }
                            });
                        throw void 0 !== r.type ? (r.args = Object.assign(Object.assign({}, r.args), {
                            req: e
                        }),
                        r) : new s.G({
                            ctx: this.ctx,
                            msg: "request unknown error",
                            type: i.NI.Unknown,
                            innerError: r,
                            sender: this,
                            args: {
                                req: e
                            }
                        })
                    }
                }
                ))
            }
            getReqTrackerContext(e) {
                var t, n, o, r;
                for (const i of Object.keys(e)) {
                    const s = e[i];
                    if (void 0 !== s)
                        return {
                            conversationId: null !== (n = null === (t = s.conversation_id) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
                            uuid: null !== (r = null === (o = s.client_message_id) || void 0 === o ? void 0 : o.toString()) && void 0 !== r ? r : ""
                        }
                }
                return {
                    conversationId: "",
                    uuid: ""
                }
            }
        }
    }
    ,
    38458: (e,t,n)=>{
        n.d(t, {
            v: ()=>i
        });
        var o = n(22403)
          , r = n(48252);
        class i extends r.mA {
            get instance() {
                return this.resolve(r.Uk.CoreInstance)
            }
            constructor(e) {
                super(e)
            }
            init() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {}
                ))
            }
            sendPacket(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e
                }
                ))
            }
            receivePacket(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {}
                ))
            }
            ticker() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {}
                ))
            }
            extendFunc(e) {
                return e.bind(this)
            }
            dispose() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {}
                ))
            }
        }
    }
    ,
    48252: (e,t,n)=>{
        n.d(t, {
            Uk: ()=>o,
            hi: ()=>i,
            jO: ()=>s,
            mA: ()=>a
        });
        var o, r = n(63912);
        !function(e) {
            e.CoreInstance = "coreInstance",
            e.NetworkManager = "netManager",
            e.ConversationManager = "conversationManger",
            e.MessageManager = "messageManager",
            e.ParticipantManager = "participantManager",
            e.EventBus = "eventBus",
            e.Monitor = "montior",
            e.DbProxy = "dbProxy",
            e.CoreApi = "coreApi",
            e.InboxType = "inboxType",
            e.ExtensionPlugin = "extensionPlugin",
            e.ExtensionApi = "extensionApi",
            e.BroadcastManager = "broadcastManager",
            e.EmojiPlugin = "emojiPlugin",
            e.MetricsPlugin = "metricsPlugin",
            e.MetricsApi = "metricsApi",
            e.MultimediaPlugin = "multimediaPlugin",
            e.MultimediaApi = "multimediaApi",
            e.RtcPlugin = "rtcPlugin",
            e.RtcManager = "rtcManager",
            e.RtcApi = "rtcApi",
            e.RtcController = "rtcController",
            e.SharkPlugin = "sharkPlugin",
            e.StoragePlugin = "storagePlugin",
            e.StorageApi = "storageApi",
            e.StrangerPlugin = "strangerPlugin",
            e.StrangerApi = "strangerApi",
            e.SecurityPlugin = "securityPlugin",
            e.AuthManager = "AuthManager"
        }(o || (o = {}));
        class i {
            constructor() {
                this.services = new Map,
                this.plugins = new Map
            }
            register(e, t, n) {
                this.services.has(e) || this.services.set(e, new Map),
                this.services.get(e).set(t, n)
            }
            resolve(e, t) {
                var n;
                return null === (n = this.services.get(e)) || void 0 === n ? void 0 : n.get(t)
            }
            get instanceCount() {
                return this.services.size
            }
        }
        i.Instance = new i;
        class s {
            constructor() {
                this.initResult = 0,
                this.cachedToken = "",
                this.id = "",
                this.id = (0,
                r.k)()
            }
            get plugin() {
                var e;
                return null !== (e = i.Instance.plugins.get(this.id)) && void 0 !== e ? e : []
            }
            set plugin(e) {
                i.Instance.plugins.set(this.id, e)
            }
            register(e, t) {
                let n = t;
                return "function" == typeof t && (n = new t(this)),
                i.Instance.register(this.id, e, n),
                n
            }
            resolve(e) {
                return i.Instance.resolve(this.id, e)
            }
        }
        class a {
            constructor(e) {
                this.__internal_ctx = e
            }
            get ctx() {
                return this.getContext()
            }
            bindContext(e) {
                this.__internal_ctx = e
            }
            getContext() {
                return this.__internal_ctx
            }
            resolve(e) {
                return this.getContext().resolve(e)
            }
            register(e, t) {
                return this.getContext().register(e, t)
            }
        }
    }
    ,
    85572: (e,t,n)=>{
        n.d(t, {
            f: ()=>i
        });
        var o = n(22403)
          , r = n(48252);
        class i extends r.mA {
            execute(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let t = e;
                    return t = yield this.before(t),
                    t = yield this.process(t),
                    t = yield this.after(t),
                    t
                }
                ))
            }
            before(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e
                }
                ))
            }
            after(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e
                }
                ))
            }
        }
    }
    ,
    88974: (e,t,n)=>{
        n.d(t, {
            F3: ()=>r,
            sS: ()=>s,
            vM: ()=>i,
            vP: ()=>c,
            w9: ()=>a
        });
        var o = n(10007);
        function r(e, t) {
            return e.length > t ? [e.slice(0, t), ...r(e.slice(t), t)] : [e]
        }
        function i(e, t) {
            const n = {};
            for (const o of e) {
                const e = t(o);
                void 0 === n[e] && (n[e] = []),
                n[e].push(o)
            }
            return n
        }
        function s(e, t) {
            return Array.isArray(e) ? e : void 0 !== e ? [e] : void 0 !== t ? [t] : []
        }
        function a(e) {
            return o.fromNumber(e.charCodeAt(0)).add(o.fromNumber(e.charCodeAt(1)).shiftLeft(8)).add(o.fromNumber(e.charCodeAt(2)).shiftLeft(16)).add(o.fromNumber(e.charCodeAt(3)).shiftLeft(24)).add(o.fromNumber(e.charCodeAt(4)).shiftLeft(32)).add(o.fromNumber(e.charCodeAt(5)).shiftLeft(40)).add(o.fromNumber(e.charCodeAt(6)).shiftLeft(48)).add(o.fromNumber(e.charCodeAt(7)).shiftLeft(56))
        }
        function c(e, t) {
            return void 0 !== e && void 0 !== t && ("true" === e[t] || "1" === e[t])
        }
    }
    ,
    63912: (e,t,n)=>{
        n.d(t, {
            k: ()=>i
        });
        const o = [];
        for (let e = 0; e < 256; ++e)
            o[e] = (e + 256).toString(16).substr(1);
        const r = new Array(16);
        function i() {
            const e = function() {
                for (let e = 0, t = 0; e < 16; e++)
                    0 == (3 & e) && (t = 4294967296 * Math.random()),
                    r[e] = t >>> ((3 & e) << 3) & 255;
                return r
            }();
            return e[6] = 15 & e[6] | 64,
            e[8] = 63 & e[8] | 128,
            function(e) {
                let t = 0;
                const n = o;
                return [n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]]].join("")
            }(r)
        }
    }
    ,
    95493: (e,t,n)=>{
        n.r(t),
        n.d(t, {
            ExtensionPlugin: ()=>B
        });
        var o = n(22403)
          , r = n(10007)
          , i = n(86166)
          , s = n(82726)
          , a = n(66924)
          , c = n(73562)
          , l = n(48252)
          , d = n(3786)
          , u = n(63422)
          , _ = (n(58071),
        n(63912))
          , p = n(94035)
          , v = (n(32701),
        n(50137))
          , y = n(38458)
          , h = n(88974);
        class g {
            static fromOp(e, t) {
                var n;
                const o = new g;
                return o.conversationId = e.conversationId,
                o.messageId = e.clientId,
                o.key = t.key,
                o.userId = e.ctx.option.userId,
                o.secUid = e.ctx.option.secUid,
                o.createTime = new Date(Date.now()),
                o.idempotentId = t.idempotentId,
                o.value = null !== (n = t.value) && void 0 !== n ? n : "",
                o.version = e.version,
                o.status = u.R.Sending,
                o
            }
            static mergeOperationToCurrent(e, t) {
                var n;
                const o = (0,
                h.vM)(t, (e=>e.key));
                for (const t of Object.keys(o))
                    for (const r of o[t]) {
                        e.property[t] || (e.property[t] = []);
                        const o = null === (n = e.property[t]) || void 0 === n ? void 0 : n.findIndex((e=>e.idempotentId === r.idempotentId));
                        switch (r.operation) {
                        case i.m.OPERATION_TYPE.ADD_PROPERTY_ITEM:
                            -1 === o && e.property[t].push(g.fromOp(e, r));
                            break;
                        case i.m.OPERATION_TYPE.REMOVE_PROPERTY_ITEM:
                            -1 !== o && e.property[t].splice(o, 1),
                            0 === e.property[t].length && delete e.property[t];
                            break;
                        case i.m.OPERATION_TYPE.SET_PROPERTY:
                            e.property[t] = [g.fromOp(e, r)];
                            break;
                        case i.m.OPERATION_TYPE.DEL_PROPERTY:
                            delete e.property[t]
                        }
                    }
            }
        }
        var f = n(80694);
        class m extends f.W {
            LeaveConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        leave_conversation_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType
                        }
                    });
                    return this.send(t, i.m.IMCMD.LEAVE_CONVERSATION, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            DeleteMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        delete_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            message_id: e.serverId
                        }
                    });
                    return this.send(t, i.m.IMCMD.DELETE_MESSAGE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetMessageByServerId(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_message_by_id_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            server_message_id: e.serverId
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.GET_MESSAGE_INFO_BY_SERVER_ID, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            MarkConversationDelete(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        delete_conversation_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            last_message_index: e.lastPullIndex
                        }
                    });
                    return this.send(t, i.m.IMCMD.MARK_CONVERSATION_DELETE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            AddConversationParticipants(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        conversation_add_participants_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            participants: e.participants,
                            biz_ext: e.bizExt
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.ADD_CONVERSATION_PARTICIPANTS, {
                        inboxType: e.inboxType
                    })).conversation_add_participants_body
                }
                ))
            }
            GetConversationInfoListByFavoriteV2(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_conversation_info_list_by_favorite_v2_body: {
                            cursor: e.cursor,
                            limit: e.limit
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetConversationInfoListByTopV2(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_conversation_info_list_by_top_v2_body: {
                            cursor: e.cursor,
                            limit: e.limit
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.GET_CONVERSATION_INFO_LIST_BY_TOP_V2, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            UpdateConversationParticipant(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        update_conversation_participant_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            user_id: e.userId,
                            role: e.role,
                            alias: e.alias,
                            biz_ext: e.bizExt,
                            is_alias_set: Boolean(e.alias)
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.UPDATE_CONVERSATION_PARTICIPANT, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            SetConversationCoreInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        set_conversation_core_info_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            name: e.name,
                            desc: e.desc,
                            icon: e.icon,
                            notice: e.notice,
                            ext: e.ext,
                            biz_ext: e.bizExt
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.SET_CONVERSATION_CORE_INFO, {
                        inboxType: e.inboxType
                    })).set_conversation_core_info_body
                }
                ))
            }
            RemoveConversationParticipants(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        conversation_remove_participants_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            participants: e.participants,
                            biz_ext: e.bizExt
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.REMOVE_CONVERSATION_PARTICIPANTS, {
                        inboxType: e.inboxType
                    })).conversation_remove_participants_body
                }
                ))
            }
            UpsertConversationCoreExtInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        upsert_conversation_core_ext_info_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            ext: e.ext
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.UPSERT_CONVERSATION_CORE_EXT_INFO, {
                        inboxType: e.inboxType
                    })).upsert_conversation_core_ext_info_body
                }
                ))
            }
            SetConversationSettingInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        set_conversation_setting_info_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            set_stick_on_top: e.stickOnTop,
                            set_mute: e.mute,
                            set_favorite: e.favorite,
                            push_status: e.pushStatus
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.SET_CONVERSATION_SETTING_INFO, {
                        inboxType: e.inboxType
                    })).set_conversation_setting_info_body
                }
                ))
            }
            UpsertConversationSettingExtInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        upsert_conversation_setting_ext_info_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            ext: e.ext
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.UPSERT_CONVERSATION_SETTING_EXT_INFO, {
                        inboxType: e.inboxType
                    })).upsert_conversation_setting_ext_info_body
                }
                ))
            }
            GetConversationParticipantsReadIndexV3(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        participants_read_index_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.GET_CONVERSATION_PARTICIPANTS_READ_INDEX_V3, {
                        inboxType: e.inboxType
                    })).participants_read_index_body
                }
                ))
            }
            GetConversationParticipantsMinIndexV3(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        participants_min_index_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.GET_CONVERSATION_PARTICIPANTS_MIN_INDEX_V3, {
                        inboxType: e.inboxType
                    })).participants_min_index_body
                }
                ))
            }
            GetConversationParticipantsList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        conversation_participants_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            cursor: e.cursor,
                            limit: e.limit
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.CONVERSATION_PARTICIPANTS_LIST, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            SendUserAction(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        send_user_action_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            action_type: e.actionType,
                            extra: e.extra
                        }
                    });
                    return this.send(t, i.m.IMCMD.SEND_USER_ACTION, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            SendInputStatus(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        send_input_status_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            status: e.status,
                            extra: e.extra
                        }
                    });
                    return this.send(t, i.m.IMCMD.SEND_INPUT_STATUS, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            DissolveConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        dissolve_conversation_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType
                        }
                    });
                    return this.send(t, i.m.IMCMD.DISSOLVE_CONVERSATION, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            ModifyMessageExt(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        modify_message_ext_body: {
                            conversation_short_id: e.conversationShortId,
                            message_id: e.messageId,
                            ticket: e.ticket,
                            ext: e.ext
                        }
                    });
                    return this.send(t, i.m.IMCMD.MODIFY_MESSAGE_EXT, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetUserConversationList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_conversation_list_body: {
                            con_type: e.type,
                            cursor: e.cursor,
                            limit: e.limit,
                            sort_type: e.sortType,
                            include_role: e.includeRole,
                            exclude_role: e.excludeRole,
                            with_cold: e.withCold,
                            push_status: e.pushStatus
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.GET_USER_CONVERSATION_LIST, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            UnreadCountReport(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        unread_count_report_body: {
                            conv_unread_count: e.conv.map((e=>({
                                conv_short_id: e.shortId,
                                conversation_type: e.type,
                                unread_count: e.count
                            }))),
                            total_unread_count: e.total
                        }
                    });
                    return this.send(t, i.m.IMCMD.UNREAD_COUNT_REPORT, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            BlockConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        block_conversation_body: {
                            conversation_id: e.conversationId,
                            conv_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            block_status: e.status,
                            block_normal_only: e.normalOnly
                        }
                    });
                    return this.send(t, i.m.IMCMD.BLOCK_CONVERSATION, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            BlockMember(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        block_members_body: {
                            conversation_id: e.conversationId,
                            conv_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            block_time: e.time,
                            block_status: e.status,
                            biz_ext: e.bizExt
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.BLOCK_MEMBERS, {
                        inboxType: e.inboxType
                    })).block_members_body
                }
                ))
            }
            GetBlockList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_blocklist_body: {
                            cursor: e.cursor,
                            limit: e.limit
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.GET_BLOCKLIST, {
                        inboxType: e.inboxType
                    })).get_blocklist_body
                }
                ))
            }
            SetBlockList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        set_blocklist_body: {
                            set_block_list: e.applySet,
                            blocklist: e.blocklist
                        }
                    });
                    return this.send(t, i.m.IMCMD.SET_BLOCKLIST, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            CheckInBlockList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        check_in_blocklist_body: {
                            user_to_check: e.userToCheck
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.CHECK_IN_BLOCKLIST, {
                        inboxType: e.inboxType
                    })).check_in_blocklist_body
                }
                ))
            }
            BroadcastSendMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        broadcast_send_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            ticket: e.ticket,
                            message_type: e.type,
                            content: e.content,
                            client_message_id: e.clientId,
                            mentioned_users: e.mentionedUsers,
                            ext: e.ext
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.BROADCAST_SEND_MESSAGE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            BroadcastReceiveMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        broadcast_recv_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            cursor: e.cursor,
                            limit: e.limit,
                            reverse: e.reverse,
                            pull_type: e.pullType
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.BROADCAST_RECV_MESSAGE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            BroadcastUserCounter(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        broadcast_user_counter_body: {
                            conversations: e.conversations.map((e=>({
                                conversation_short_id: e.shortId,
                                conversation_type: e.type
                            })))
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.BROADCAST_USER_COUNTER)).broadcast_user_counter_body
                }
                ))
            }
            SendP2PMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        send_message_p2p_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            send_type: e.sendType,
                            message_type: e.msgType,
                            content: e.content,
                            client_message_id: e.clientId,
                            ext: e.ext,
                            visible_user: e.visibleUser,
                            invisible_user: e.invisibleUser
                        }
                    });
                    return this.send(t, i.m.IMCMD.SEND_MESSAGE_P2P, {
                        useBeacon: !0,
                        maxRetryTimes: 1
                    })
                }
                ))
            }
            ModifyMessageProperty(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        modify_message_property_body: {
                            property_list: {
                                conversation_id: e.conversationId,
                                conversation_short_id: e.conversationShortId,
                                conversation_type: e.conversationType,
                                server_message_id: e.serverId,
                                client_message_id: e.clientId,
                                modify_property_content: e.modifyContent.map((e=>({
                                    operation: e.operation,
                                    key: e.key,
                                    value: e.value,
                                    idempotent_id: e.idempotentId
                                })))
                            },
                            ticket: e.ticket
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.SET_MESSAGE_PROPERTY, {
                        inboxType: e.inboxType
                    })).modify_message_property_body
                }
                ))
            }
            GetUnreadCount(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_unread_count_body: {
                            get_total: e.total,
                            conv_short_id: e.shortIds
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.GET_UNREAD_COUNT, {
                        inboxType: e.inboxType
                    })).get_unread_count_body
                }
                ))
            }
            MarkMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        mark_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            server_message_id: e.serverMessageId,
                            do_action: e.doAction,
                            action_type: e.actionType,
                            sort_time: e.sortTime,
                            tag: e.tag
                        }
                    });
                    return this.send(t, i.m.IMCMD.MARK_MESSAGE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            PullMarkMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        pull_mark_message_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            cursor: e.cursor,
                            limit: e.limit,
                            asc: e.asc,
                            action_type: e.actionType,
                            tag: e.tag
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.PULL_MARK_MESSAGE, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            GetConversationCoreInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_conversation_core_info_body: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType
                        }
                    });
                    return this.send(t, i.m.IMCMD.GET_CONVERSATION_CORE_INFO, {
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            BatchUnmarkMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        batch_unmark_message: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            server_message_ids: e.serverMessageIds,
                            action_type: e.actionType,
                            tag: e.tag
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.BATCH_UNMARK_MESSAGE)).batch_unmark_message
                }
                ))
            }
            MarkMsgUnreadCountReport(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        mark_msg_unread_count_report: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            total_unread_count: e.totalUnreadCount,
                            tag_unread_count: e.tagUnreadCount
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.MARK_MSG_UNREAD_COUNT_REPORT)).mark_msg_unread_count_report
                }
                ))
            }
            MarkMsgGetUnreadCount(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        mark_msg_get_unread_count: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            conversation_type: e.conversationType,
                            get_total: e.getTotal,
                            tags: e.tags
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.MARK_MSG_GET_UNREAD_COUNT)).mark_msg_get_unread_count
                }
                ))
            }
            ConvertVoiceToText(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        audio_recognition_body: {
                            audio: {
                                content: e.content,
                                uid: e.uid,
                                server_message_id: e.server_message_id,
                                audio_option: e.audioOptions,
                                conv_short_id: e.conv_short_id
                            }
                        }
                    });
                    return this.send(t, i.m.IMCMD.AUDIO_RECOGNITION)
                }
                ))
            }
            BatchGetConversationParticipantsReadIndex(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        batch_get_conversation_participants_readindex: {
                            conversation_id: e.conversationId,
                            conversation_short_id: e.conversationShortId,
                            request_from: e.request_from,
                            min_index_required: e.min_index_required
                        }
                    });
                    return (yield this.send(t, i.m.IMCMD.BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX)).batch_get_conversation_participants_readindex
                }
                ))
            }
        }
        var b = n(64467);
        class k extends d.r {
            constructor() {
                super(...arguments),
                this.localIndex = r.ZERO
            }
            get isMuted() {
                return !1
            }
            get isStickOnTop() {
                return !1
            }
            get isFavorite() {
                return !1
            }
            get toParticipantUserId() {}
            static fromServerConversation(e, t, n) {
                const o = new k(e);
                return o.id = t.conversation_id,
                o.shortId = t.conversation_short_id.toString(),
                o.type = t.conversation_type,
                o.isOffline = !1,
                o.coreInfo = new b._(o,t),
                o
            }
            setConversationCursor(e) {
                e > this.localIndex && (this.localIndex = e),
                this.localIndex = e
            }
            getMessageList(e=(e=>e.visible)) {
                return this.resolve(l.Uk.BroadcastManager).getList(this.id).filter(e)
            }
            get unreadCount() {
                return 0
            }
        }
        class O extends l.mA {
            constructor(e) {
                super(e),
                this.messages = new Map,
                this.conversation = new Map
            }
            upsertOnline(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = (yield this.resolve(l.Uk.ExtensionApi).GetConversationCoreInfo({
                        conversationId: e.id,
                        conversationShortId: r.fromString(e.shortId),
                        conversationType: e.type,
                        inboxType: e.inboxType
                    })).get_conversation_core_info_body;
                    if (!t || !t.conversation_core_info)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.ConversationNotExist,
                            msg: `local conversation: ${e.id} not found online`,
                            sender: this,
                            args: {
                                conversationId: e.id
                            }
                        });
                    const n = k.fromServerConversation(this.ctx, t.conversation_core_info);
                    return this.conversation.set(e.id, n),
                    n
                }
                ))
            }
            getWithOnline(e, t, n) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let o = this.conversation.get(e);
                    if (!o || o.isOffline) {
                        if (!t || !n)
                            throw new c.G({
                                ctx: this.ctx,
                                type: s.NI.InvalidParam,
                                msg: "no shortId and type provided",
                                sender: this
                            });
                        o || (o = new k(this.ctx),
                        o.id = e,
                        o.shortId = t,
                        o.type = i.m.ConversationType.BROADCAST_CHAT,
                        o.isOffline = !0,
                        o.coreInfo = new b._(o)),
                        o = yield this.upsertOnline(o)
                    }
                    return o
                }
                ))
            }
            upsert(e) {
                const t = this.getConversationMsgs(e.conversationId)
                  , n = t.msgs.findIndex((t=>t && t.clientId === e.clientId));
                let o;
                n >= 0 && (o = t.msgs[n]),
                o ? o.type === e.type ? (e = o.merge(e),
                t.msgs[n] = e) : (a.Y.ctxWarn(this.ctx, "try to merge different msg:", o, e),
                t.msgs[n] = e) : this.insertMsg(t, e),
                this.resolve(l.Uk.EventBus).emit(s.c5.MessageUpsert, this, e)
            }
            getList(e) {
                const t = this.getConversationMsgs(e)
                  , n = t.tail;
                if (t.front < n)
                    return t.msgs.slice(t.front, n);
                const o = t.msgs.slice(0, n);
                return t.msgs.slice(t.front, O.MaxMsgSize).concat(o)
            }
            insertMsg(e, t) {
                const n = e.tail;
                e.tail = (e.tail + 1) % O.MaxMsgSize,
                e.tail === e.front && (e.front = (e.front + 1) % O.MaxMsgSize),
                e.msgs[n] = t
            }
            get(e, t) {
                const n = this.getRaw(e, t);
                if (!n)
                    throw new c.G({
                        ctx: this.ctx,
                        type: s.NI.MessageNotExist,
                        msg: `message ${t} @ ${e} not exist in local`,
                        sender: this
                    });
                return n
            }
            getConversation(e) {
                const t = this.conversation.get(e);
                if (!t)
                    throw new c.G({
                        ctx: this.ctx,
                        msg: `broadcast conversation ${e} not exist in local`,
                        type: s.NI.ConversationNotExist,
                        sender: this,
                        args: {
                            conversationId: e
                        }
                    });
                return t
            }
            getRaw(e, t) {
                const n = this.getConversationMsgs(e)
                  , o = n.msgs.findIndex((e=>e && e.clientId === t));
                let r;
                return o >= 0 && (r = n.msgs[o]),
                r
            }
            getByServerId(e, t) {
                const n = this.getConversationMsgs(e)
                  , o = n.msgs.findIndex((e=>e && e.serverId === t));
                if (o < 0)
                    throw new c.G({
                        ctx: this.ctx,
                        type: s.NI.MessageNotExist,
                        msg: `message ${t} @ ${e} not exist in local`,
                        sender: this
                    });
                return n.msgs[o]
            }
            getConversationMsgs(e) {
                let t = this.messages.get(e);
                return t || (t = {
                    msgs: new Array(O.MaxMsgSize),
                    front: 0,
                    tail: 0
                },
                this.messages.set(e, t)),
                t
            }
            processNewMessagesFromPull(e, t, n) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    for (const n of e)
                        n.ext || (n.ext = {}),
                        yield this.processNewMessage(n, t)
                }
                ))
            }
            processNewMessage(e, t) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.ext || (e.ext = {}),
                    e.source = t,
                    e.type >= 0)
                        return this.processTextMessage(e);
                    throw new c.G({
                        ctx: this.ctx,
                        type: s.NI.UnknownMessageType,
                        msg: `unknown message type: ${e.type} for msg:${e.clientId}`,
                        sender: this
                    })
                }
                ))
            }
            dispose() {
                this.conversation.clear(),
                this.messages.clear()
            }
            processTextMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!e.isNormalMsg)
                        return e;
                    const t = void 0 !== e.source && (e.source === s.v$.Online || e.source === s.v$.BroadcastLoadMore)
                      , n = this.getRaw(e.conversationId, e.clientId)
                      , o = void 0 !== (null == n ? void 0 : n.flightStatus) && t;
                    this.upsert(e);
                    const r = this.getRaw(e.conversationId, e.clientId);
                    return n ? o && r.flightStatus !== s.b3.Received && (r.flightStatus = s.b3.Received,
                    this.resolve(l.Uk.EventBus).emit(s.c5.ReceiveBroadcastSelfMessage, this, r),
                    this.upsert(r)) : t && (e.sender !== this.ctx.option.userId ? this.resolve(l.Uk.EventBus).emit(s.c5.ReceiveBroadcastNewMessage, this, e) : this.resolve(l.Uk.EventBus).emit(s.c5.ReceiveBroadcastSelfMessage, this, e)),
                    e
                }
                ))
            }
        }
        O.MaxMsgSize = 1001;
        var x, w, I, C, M, R = n(85572);
        class T extends R.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e.data.type === i.m.MessageType.MESSAGE_TYPE_UPDATE_MESSAGE_PROPERTY && (e.needContinue = !1,
                    yield this.handlePropertyCmd(e.data)),
                    e
                }
                ))
            }
            handlePropertyCmd(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = this.resolve(l.Uk.MessageManager).getRaw(e.conversationId, e.clientId);
                    t ? (t.version = e.version,
                    a.Y.ctxDebug(this.ctx, "merge property, local:", t.property, "server:", e.property),
                    t.property = e.property,
                    this.resolve(l.Uk.MessageManager).upsert(t),
                    this.resolve(l.Uk.EventBus).emit(s.c5.MessagePropertyUpsert, this, t)) : a.Y.ctxDebug(this.ctx, "modify property cmd msg not exist in local", e)
                }
                ))
            }
        }
        !function(e) {
            e[e.BlockUser = 1] = "BlockUser",
            e[e.BlockConvNormalOnly = 2] = "BlockConvNormalOnly",
            e[e.BlockConvAll = 3] = "BlockConvAll"
        }(x || (x = {}));
        class P extends R.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e.data.type === i.m.MessageType.MESSAGE_TYPE_BLOCK_COMMAND && (e.needContinue = !1,
                    this.handleBlockCmd(e.data, e.conv)),
                    e
                }
                ))
            }
            handleBlockCmd(e, t) {
                const n = v.parse(e.content)
                  , o = n.block_status;
                if (n.type === x.BlockUser) {
                    const {userID: i} = n;
                    if (null == i || 0 === i.length)
                        return;
                    const a = this.resolve(l.Uk.ParticipantManager).getMapRaw(t.id);
                    if (!a)
                        return;
                    for (const c of i) {
                        const i = null == c ? void 0 : c.toString();
                        if (!a.has(i))
                            continue;
                        const d = a.get(i);
                        d.blocked = Boolean(o);
                        const u = n.blockTime[i];
                        d.leftBlockTime = u ? r.fromValue(u) : void 0,
                        this.resolve(l.Uk.ParticipantManager).upsert(t.id, d),
                        this.resolve(l.Uk.EventBus).emit(s.c5.ParticipantBlock, this, {
                            participant: d,
                            message: e
                        })
                    }
                } else
                    this.resolve(l.Uk.ConversationManager).refreshAsync(t).then((t=>{
                        t.map((t=>this.resolve(l.Uk.EventBus).emit(s.c5.ConversationBlock, this, {
                            conversation: t,
                            message: e
                        })))
                    }
                    ))
            }
        }
        class S extends R.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return e.data.type === i.m.MessageType.MESSAGE_TYPE_MARK_COMMAND ? (e.needContinue = !1,
                    this.handlePinCmd(e.data, e.conv)) : e.data.type === i.m.MessageType.MESSAGE_TYPE_BATCH_UNMARK_COMMAND && (e.needContinue = !1,
                    this.handleBatchUnmarkCmd(e.data, e.conv)),
                    e
                }
                ))
            }
            handlePinCmd(e, t) {
                const n = v.parse(e.content).server_message_id.toString()
                  , o = this.resolve(l.Uk.MessageManager).getByServerIdRaw(t.id, n);
                o ? o.version.gt(e.version) ? a.Y.ctxWarn(this.ctx, "server message is older, localMsg=", o, "serverMsg=", e) : (o.ext = e.ext,
                o.version = e.version,
                this.resolve(l.Uk.MessageManager).upsert(o)) : a.Y.ctxWarn(this.ctx, "local message not exist, serverMsg=", e)
            }
            handleBatchUnmarkCmd(e, t) {
                var n, o;
                const r = v.parse(null !== (o = null === (n = null == e ? void 0 : e.ext) || void 0 === n ? void 0 : n[s.v9.MarkMessageNewExt]) && void 0 !== o ? o : "{}");
                for (const n of Object.keys(r)) {
                    const o = this.resolve(l.Uk.MessageManager).getByServerIdRaw(t.id, n.toString());
                    o ? (o.ext = Object.assign(o.ext, r[n]),
                    o.version = e.version,
                    this.resolve(l.Uk.MessageManager).upsert(o)) : a.Y.ctxWarn(this.ctx, "local message not exist, serverMsg=", e)
                }
            }
        }
        class E {
        }
        !function(e) {
            e.Image = "image",
            e.Video = "video",
            e.Audio = "audio",
            e.CommonFile = "object"
        }(w || (w = {})),
        function(e) {
            e.Uri = "s:file_ext_key_uri",
            e.Type = "s:file_ext_key_type",
            e.AppId = "s:file_ext_key_source_app_id",
            e.NeedEncrypt = "s:file_ext_key_need_encrypt",
            e.EncryptUri = "s:file_ext_key_encrypt_uri",
            e.Vid = "s:file_ext_key_vid",
            e.FileName = "s:file_ext_key_file_name",
            e.ImgHeight = "s:file_ext_key_original_height",
            e.ImgWidth = "s:file_ext_key_original_width",
            e.ImgThumbHeight = "s:file_ext_key_thumb_height",
            e.ImgThumbWidth = "s:file_ext_key_thumb_width",
            e.ImgThumbUrl = "s:file_ext_key_thumb_url",
            e.ImgPreviewUrl = "s:file_ext_key_preview_url",
            e.ImgPreviewHeight = "s:file_ext_key_preview_height",
            e.ImgPreviewWidth = "s:file_ext_key_preview_width",
            e.ImgPreviewEncryptUrl = "s:file_ext_key_preview_encrypt_url",
            e.ImgThumbEncryptUrl = "s:file_ext_key_thumb_encrypt_url",
            e.ImgUseImageX = "s:file_ext_key_use_imagex",
            e.ImgSuffix = "s:file_ext_key_img_suffix",
            e.VideoCoverUri = "s:file_ext_key_video_cover_uri",
            e.VideoCoverUrl = "s:file_ext_key_video_cover_url",
            e.VideoDuration = "s:file_ext_key_video_duration",
            e.VideoWidth = "s:file_ext_key_video_width",
            e.VideoHeight = "s:file_ext_key_video_height",
            e.AudioDuration = "s:file_ext_key_audio_duration"
        }(I || (I = {})),
        function(e) {
            e.Image = "file_ext_value_type_image",
            e.Video = "file_ext_value_type_video",
            e.Audio = "file_ext_value_type_audio",
            e.Object = "file_ext_value_type_object",
            e.File = "file_ext_value_type_file"
        }(C || (C = {})),
        function(e) {
            e.Obj = "tplv-obj",
            e.Resize = "tplv-resize"
        }(M || (M = {}));
        class B extends y.v {
            leaveConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.LeaveConversation({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        inboxType: e.conversation.inboxType
                    }),
                    this.resolve(l.Uk.ParticipantManager).delete(e.conversation.id, [this.ctx.option.userId])
                }
                ))
            }
            deleteMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!e.message.serverId)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.MessageNotReady,
                            msg: `message ${e.message} is not ready`,
                            reachServer: !1,
                            sender: this
                        });
                    try {
                        if (this.resolve(l.Uk.MessageManager).delete(e.message.conversationId, e.message.serverId),
                        e.localOnly)
                            return;
                        const t = this.resolve(l.Uk.ConversationManager).get(e.message.conversationId);
                        yield this.api.DeleteMessage({
                            conversationId: e.message.conversationId,
                            conversationShortId: r.fromString(e.message.conversationShortId),
                            conversationType: e.message.conversationType,
                            serverId: r.fromString(e.message.serverId),
                            inboxType: t.inboxType
                        })
                    } catch (e) {
                        a.Y.ctxWarn(this.ctx, "delete message error, may lost server operation", e)
                    }
                }
                ))
            }
            deleteConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    try {
                        if (this.resolve(l.Uk.ConversationManager).delete(e.conversation.id),
                        e.localOnly)
                            return;
                        const t = e.conversation.lastMessageIndex;
                        yield this.api.MarkConversationDelete({
                            conversationId: e.conversation.id,
                            conversationShortId: r.fromString(e.conversation.shortId),
                            conversationType: e.conversation.type,
                            lastPullIndex: t,
                            inboxType: e.conversation.inboxType
                        })
                    } catch (e) {
                        a.Y.ctxWarn(this.ctx, "delete conversation error, may lost server operation", e)
                    }
                }
                ))
            }
            getConversationListByTop(e={}) {
                var t, n, i;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox());
                    let o = [];
                    const s = yield this.api.GetConversationInfoListByTopV2({
                        cursor: r.fromValue(null !== (t = e.cursor) && void 0 !== t ? t : "0"),
                        limit: null !== (n = e.limit) && void 0 !== n ? n : 10,
                        inboxType: e.inboxType
                    })
                      , a = null === (i = s.body) || void 0 === i ? void 0 : i.get_conversation_info_list_by_top_v2_body
                      , c = a.conversation_info_list.map((e=>d.r.fromServerConversation(this.ctx, e, s.log_id))).map((e=>this.resolve(l.Uk.ConversationManager).upsert(e)));
                    return o = o.concat(c),
                    {
                        conversation: o,
                        hasMore: null == a ? void 0 : a.has_more,
                        cursor: null == a ? void 0 : a.next_cursor
                    }
                }
                ))
            }
            getConversationListByFavorite(e={}) {
                var t, n, i;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox());
                    let o = [];
                    const s = yield this.api.GetConversationInfoListByFavoriteV2({
                        cursor: r.fromValue(null !== (t = e.cursor) && void 0 !== t ? t : "0"),
                        limit: null !== (n = e.limit) && void 0 !== n ? n : 10,
                        inboxType: e.inboxType
                    })
                      , a = null === (i = s.body) || void 0 === i ? void 0 : i.get_conversation_info_list_by_favorite_v2_body
                      , c = (null == a ? void 0 : a.conversation_info_list).map((e=>d.r.fromServerConversation(this.ctx, e, s.log_id))).map((e=>this.resolve(l.Uk.ConversationManager).upsert(e)));
                    return o = o.concat(c),
                    {
                        conversation: o,
                        hasMore: null == a ? void 0 : a.has_more,
                        cursor: null == a ? void 0 : a.next_cursor
                    }
                }
                ))
            }
            addParticipants(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = Array.isArray(e.participant) ? e.participant : [e.participant]
                      , i = yield this.api.AddConversationParticipants({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        participants: o.map((e=>r.fromValue(e))),
                        bizExt: e.bizExt,
                        inboxType: e.conversation.inboxType
                    });
                    return 0 !== (null == i ? void 0 : i.status) ? {
                        success: !1,
                        failedParticipant: o,
                        payload: e.conversation,
                        checkCode: i.check_code,
                        checkMsg: i.check_message,
                        statusCode: i.status,
                        statusMsg: i.extra_info
                    } : {
                        success: !0,
                        failedParticipant: null !== (n = null === (t = i.failed_participants) || void 0 === t ? void 0 : t.map((e=>e.toString()))) && void 0 !== n ? n : [],
                        payload: e.conversation,
                        checkCode: i.check_code,
                        checkMsg: i.check_message,
                        statusCode: i.status,
                        statusMsg: i.extra_info
                    }
                }
                ))
            }
            removeParticipants(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    Array.isArray(e.participant) || (e.participant = [e.participant]);
                    const o = e.participant.map((e=>r.fromString("string" == typeof e ? e : e.userId)))
                      , i = yield this.api.RemoveConversationParticipants({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        participants: o,
                        bizExt: e.bizExt,
                        inboxType: e.conversation.inboxType
                    });
                    if (0 !== (null == i ? void 0 : i.status))
                        return {
                            success: !1,
                            failedParticipant: o.map((e=>e.toString())),
                            body: i,
                            payload: e.conversation,
                            checkCode: i.check_code,
                            checkMsg: i.check_message,
                            statusCode: i.status,
                            statusMsg: i.extra_info
                        };
                    const s = []
                      , a = null !== (n = null === (t = i.failed_participants) || void 0 === t ? void 0 : t.map((e=>e.toString()))) && void 0 !== n ? n : [];
                    return o.forEach((e=>{
                        a.includes(e.toString()) || s.push(e.toString())
                    }
                    )),
                    {
                        success: !0,
                        body: i,
                        failedParticipant: a,
                        payload: e.conversation,
                        checkCode: i.check_code,
                        checkMsg: i.check_message,
                        statusCode: i.status,
                        statusMsg: i.extra_info
                    }
                }
                ))
            }
            updateParticipant(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = yield this.api.UpdateConversationParticipant({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        role: e.role,
                        alias: e.alias,
                        bizExt: e.bizExt,
                        inboxType: e.conversation.inboxType,
                        userId: r.fromValue(e.userId)
                    })
                      , i = null === (t = null == o ? void 0 : o.body) || void 0 === t ? void 0 : t.update_conversation_participant_body;
                    return 0 === (null == o ? void 0 : o.status_code) && (null === (n = null == i ? void 0 : i.participant) || void 0 === n ? void 0 : n.user_id) && (null == o ? void 0 : o.log_id) ? {
                        success: !0,
                        payload: p.Q.fromServerParticipant(this.ctx, i.participant, e.conversation, o.log_id),
                        checkCode: i.check_code,
                        checkMsg: i.check_message,
                        statusCode: o.status_code,
                        statusMsg: i.extra_info,
                        body: i
                    } : {
                        success: !1,
                        payload: null,
                        checkCode: i.check_code,
                        checkMsg: i.check_message,
                        statusCode: o.status_code,
                        statusMsg: i.extra_info,
                        body: i
                    }
                }
                ))
            }
            setConversationSettingInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield this.api.SetConversationSettingInfo({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        stickOnTop: e.stickOnTop,
                        mute: e.mute,
                        favorite: e.favorite,
                        inboxType: e.conversation.inboxType,
                        pushStatus: e.pushStatus
                    });
                    return 0 !== (null == t ? void 0 : t.status) ? {
                        success: !1,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    } : (yield this.resolve(l.Uk.ConversationManager).refreshAsync(e.conversation),
                    {
                        success: !0,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    })
                }
                ))
            }
            setConversationCoreInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield this.api.SetConversationCoreInfo({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        name: e.name,
                        desc: e.desc,
                        icon: e.icon,
                        notice: e.notice,
                        ext: e.ext,
                        bizExt: e.bizExt,
                        inboxType: e.conversation.inboxType
                    });
                    return 0 !== (null == t ? void 0 : t.status) ? {
                        success: !1,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    } : (yield this.resolve(l.Uk.ConversationManager).refreshAsync(e.conversation),
                    {
                        success: !0,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    })
                }
                ))
            }
            upsertConversationSettingExtInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield this.api.UpsertConversationSettingExtInfo({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        ext: e.ext,
                        inboxType: e.conversation.inboxType
                    });
                    return 0 !== (null == t ? void 0 : t.status) ? {
                        success: !1,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    } : (yield this.resolve(l.Uk.ConversationManager).refreshAsync(e.conversation),
                    {
                        success: !0,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    })
                }
                ))
            }
            setConversationWeakMuteConfig(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = v.stringify({
                        [s.O9]: {
                            white_uids: null !== (t = e.config.whiteUids) && void 0 !== t ? t : [],
                            white_msg_types: null !== (n = e.config.whiteMsgTypes) && void 0 !== n ? n : []
                        }
                    });
                    return this.upsertConversationSettingExtInfo({
                        conversation: e.conversation,
                        ext: {
                            [s.v9.PushPartDisableConfig]: o
                        }
                    })
                }
                ))
            }
            upsertConversationCoreExtInfo(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield this.api.UpsertConversationCoreExtInfo({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        ext: e.ext,
                        inboxType: e.conversation.inboxType
                    });
                    return 0 !== (null == t ? void 0 : t.status) ? {
                        success: !1,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    } : (yield this.resolve(l.Uk.ConversationManager).refreshAsync(e.conversation),
                    {
                        success: !0,
                        payload: e.conversation,
                        checkCode: t.check_code,
                        checkMsg: t.check_message,
                        statusCode: t.status,
                        statusMsg: t.extra_info
                    })
                }
                ))
            }
            getMessageReadReceipt(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.message.isRecalled || !e.message.isFromMe || e.message.isOffline)
                        return {
                            finishedParticipantIds: [],
                            expectedParticipantIds: []
                        };
                    const t = this.resolve(l.Uk.ConversationManager).get(e.message.conversationId);
                    let n = this.resolve(l.Uk.ParticipantManager).getRaw(t.id);
                    if ((e.syncFromServer || 0 === n.length) && (t.type === i.m.ConversationType.ONE_TO_ONE_CHAT && 0 === n.length && (yield this.getConversationParticipants({
                        conversation: t
                    })),
                    t.type === i.m.ConversationType.GROUP_CHAT && (0 === n.length ? yield this.getConversationParticipants({
                        conversation: t
                    }) : this.getConversationParticipants({
                        conversation: t
                    })),
                    yield this.updateConversationReadReceipt({
                        conversation: t,
                        batchFetch: Boolean(e.batchFetch)
                    })),
                    n = this.resolve(l.Uk.ParticipantManager).getRaw(t.id),
                    0 === n.length)
                        return {
                            finishedParticipantIds: [],
                            expectedParticipantIds: []
                        };
                    if (!e.message.indexInConversation)
                        return {
                            finishedParticipantIds: [],
                            expectedParticipantIds: n.filter((e=>e.userId !== this.ctx.option.userId)).map((e=>e.userId))
                        };
                    const o = []
                      , r = [];
                    return n.forEach((t=>{
                        t.minIndex.gt(e.message.indexInConversation) || (t.userId !== this.ctx.option.userId && r.push(t.userId.toString()),
                        (t.readOrder.gte(e.message.orderInConversation) || t.readIndex.gte(e.message.indexInConversation)) && t.userId !== this.ctx.option.userId && o.push(t.userId.toString()))
                    }
                    )),
                    {
                        finishedParticipantIds: o,
                        expectedParticipantIds: r
                    }
                }
                ))
            }
            getConversationParticipants(e) {
                return this.resolve(l.Uk.ParticipantManager).getParticipant(e.conversation)
            }
            getConversationParticipantsAsync(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let o = !0
                      , i = r.ZERO;
                    for (; o; ) {
                        const s = yield this.getConversationParticipantsByPage({
                            cursor: i,
                            limit: 50,
                            conversation: e.conversation
                        });
                        o = null !== (t = null == s ? void 0 : s.hasMore) && void 0 !== t && t,
                        i = null !== (n = null == s ? void 0 : s.cursor) && void 0 !== n ? n : r.ZERO
                    }
                    return this.resolve(l.Uk.ParticipantManager).get(e.conversation.id)
                }
                ))
            }
            getConversationParticipantsByPage(e) {
                var t, n, i, s, a, c;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let o = null !== (t = e.cursor) && void 0 !== t ? t : r.ZERO;
                    const d = null !== (n = e.limit) && void 0 !== n ? n : 50
                      , u = yield this.api.GetConversationParticipantsList({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        cursor: o ? r.fromValue(o) : r.ZERO,
                        limit: d,
                        inboxType: e.conversation.inboxType
                    })
                      , _ = null === (s = null === (i = u.body) || void 0 === i ? void 0 : i.conversation_participants_body) || void 0 === s ? void 0 : s.participants_page
                      , v = null !== (a = null == _ ? void 0 : _.has_more) && void 0 !== a && a;
                    o = null !== (c = null == _ ? void 0 : _.cursor) && void 0 !== c ? c : r.ZERO;
                    const y = [];
                    return null == _ || _.participants.forEach((t=>{
                        y.push(p.Q.fromServerParticipant(this.ctx, t, e.conversation, u.log_id))
                    }
                    )),
                    this.resolve(l.Uk.ParticipantManager).upsertBatch(e.conversation.id, y),
                    this.resolve(l.Uk.ConversationManager).upsert(e.conversation),
                    {
                        participants: y,
                        hasMore: v,
                        cursor: o
                    }
                }
                ))
            }
            updateConversationReadReceipt(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const {readIndexs: t, minIndexs: n} = yield this.getReadReceipt({
                        conversation: e.conversation,
                        batchFetch: e.batchFetch
                    })
                      , o = this.resolve(l.Uk.ParticipantManager).getRaw(e.conversation.id);
                    let r = !1;
                    t.forEach((e=>{
                        const t = o.filter((t=>t.userId === e.user_id.toString()))[0];
                        t && (t.readIndex.equals(e.index) || (r = !0),
                        t.readIndex = e.index)
                    }
                    )),
                    n.forEach((e=>{
                        const t = o.filter((t=>t.userId === e.user_id.toString()))[0];
                        t && (t.minIndex.equals(e.index) || (r = !0),
                        t.minIndex = e.index)
                    }
                    )),
                    r && (this.resolve(l.Uk.EventBus).emit(s.c5.ConversationUpsert, this, e.conversation),
                    this.resolve(l.Uk.EventBus).emitEmpty(s.c5.ConversationChange, this),
                    o.forEach((t=>this.resolve(l.Uk.ParticipantManager).upsert(e.conversation.id, t))))
                }
                ))
            }
            sendUserAction(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.SendUserAction({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        extra: e.ext,
                        actionType: e.actionType,
                        inboxType: e.conversation.inboxType
                    })
                }
                ))
            }
            sendInputStatus(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.SendInputStatus({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        extra: e.ext,
                        status: e.status,
                        inboxType: e.conversation.inboxType
                    })
                }
                ))
            }
            sendP2PMessage(e) {
                var t, n, i, s, a;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.SendP2PMessage({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromValue(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        sendType: e.sendType,
                        msgType: e.msgType,
                        content: e.content,
                        clientId: (0,
                        _.k)(),
                        ext: null !== (t = e.ext) && void 0 !== t ? t : {},
                        visibleUser: null !== (i = null === (n = e.visibleUser) || void 0 === n ? void 0 : n.map((e=>r.fromValue(e)))) && void 0 !== i ? i : [],
                        invisibleUser: null !== (a = null === (s = e.invisibleUser) || void 0 === s ? void 0 : s.map((e=>r.fromValue(e)))) && void 0 !== a ? a : [],
                        inboxType: e.conversation.inboxType
                    })
                }
                ))
            }
            dissolveConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.DissolveConversation({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        inboxType: e.conversation.inboxType
                    }),
                    this.resolve(l.Uk.ConversationManager).delete(e.conversation.id),
                    this.resolve(l.Uk.EventBus).emit(s.c5.ConversationDissolve, this, e.conversation),
                    this.resolve(l.Uk.EventBus).emitEmpty(s.c5.ConversationChange, this)
                }
                ))
            }
            upsertMessageExt(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!e.message.serverId)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.MessageOffline,
                            msg: "message is offline",
                            reachServer: !1,
                            sender: this
                        });
                    for (const t of Object.keys(e.ext))
                        t.startsWith("s:") && delete e.ext[t];
                    const t = this.resolve(l.Uk.ConversationManager).get(e.message.conversationId);
                    return yield this.api.ModifyMessageExt({
                        conversationShortId: r.fromValue(e.message.conversationShortId),
                        messageId: r.fromValue(e.message.serverId),
                        ext: e.ext,
                        ticket: t.ticket,
                        inboxType: t.inboxType
                    }),
                    e.message.ext = Object.assign(e.message.ext, e.ext),
                    this.resolve(l.Uk.MessageManager).upsert(e.message),
                    e.message
                }
                ))
            }
            getUserConversationList(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox()),
                    e.type !== i.m.ConversationType.GROUP_CHAT && (void 0 !== e.includeRole || void 0 !== e.excludeRole))
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.InvalidParam,
                            msg: "role filter only available in group chat",
                            sender: this,
                            reachServer: !1
                        });
                    if (void 0 !== e.includeRole && void 0 !== e.excludeRole)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.InvalidParam,
                            msg: "conflict include and exclude",
                            sender: this,
                            reachServer: !1
                        });
                    const o = yield this.api.GetUserConversationList({
                        type: e.type,
                        cursor: e.cursor ? r.fromValue(e.cursor) : r.ZERO,
                        limit: e.limit ? r.fromValue(e.limit) : r.fromNumber(20),
                        sortType: null !== (t = e.sortType) && void 0 !== t ? t : i.m.SortType.JOIN_TIME,
                        includeRole: e.includeRole,
                        excludeRole: e.excludeRole,
                        withCold: e.withCold,
                        inboxType: e.inboxType
                    })
                      , a = null === (n = o.body) || void 0 === n ? void 0 : n.get_conversation_list_body
                      , u = a.list.map((e=>d.r.fromServerConversation(this.ctx, e, o.log_id)));
                    return u.forEach((e=>this.resolve(l.Uk.ConversationManager).upsert(e))),
                    {
                        conversation: u,
                        hasMore: null == a ? void 0 : a.has_more,
                        cursor: null == a ? void 0 : a.next_cursor
                    }
                }
                ))
            }
            unreadCountReport() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!this.ctx.option.unreadCountReport)
                        throw new c.G({
                            ctx: this.ctx,
                            msg: "unread count report not enabled",
                            sender: this,
                            type: s.NI.InvalidParam,
                            reachServer: !1
                        });
                    const e = this.resolve(l.Uk.ConversationManager).getConversationArray()
                      , t = (0,
                    h.vM)(e, (e=>e.inboxType.toString()));
                    for (const e of Object.keys(t)) {
                        const n = t[e]
                          , o = [];
                        let i = 0;
                        n.forEach((e=>{
                            const t = this.getNormalMsgUnreadCount(e);
                            i += t,
                            o.push({
                                shortId: r.fromString(e.shortId),
                                count: r.fromNumber(t),
                                type: e.type
                            })
                        }
                        ));
                        const s = (0,
                        h.F3)(o, 30);
                        for (const t of s)
                            try {
                                yield this.api.UnreadCountReport({
                                    total: r.fromValue(i),
                                    conv: t,
                                    inboxType: Number.parseInt(e, 10)
                                })
                            } catch (e) {
                                a.Y.ctxWarn(this.ctx, "report unread error:", e, "conv:", n)
                            }
                    }
                }
                ))
            }
            getServerUnreadCountByUser(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox());
                    const o = yield this.api.GetUnreadCount({
                        total: !0,
                        inboxType: e.inboxType,
                        shortIds: []
                    });
                    return null !== (n = null === (t = null == o ? void 0 : o.total_unread_count) || void 0 === t ? void 0 : t.toNumber()) && void 0 !== n ? n : 0
                }
                ))
            }
            getServerUnreadCountByConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = new Map
                      , n = (0,
                    h.vM)(e.conversation, (e=>e.inboxType.toString()));
                    for (const e of Object.keys(n)) {
                        const o = n[e].map((e=>r.fromString(e.shortId)))
                          , i = new Map(n[e].map((e=>[e.shortId, e])))
                          , s = yield this.api.GetUnreadCount({
                            total: !1,
                            shortIds: o,
                            inboxType: Number.parseInt(e, 10)
                        });
                        for (const [e,n] of Object.entries(s.conv_unread_count)) {
                            const o = (0,
                            h.w9)(e).toString();
                            i.has(o) && t.set(i.get(o), n.toNumber())
                        }
                    }
                    return t
                }
                ))
            }
            blockConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return void 0 === e.normalOnly && (e.normalOnly = !1),
                    yield this.api.BlockConversation({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromValue(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        status: e.block ? i.m.BlockStatus.BLOCK : i.m.BlockStatus.UNBLOCK,
                        normalOnly: e.normalOnly,
                        inboxType: e.conversation.inboxType
                    }),
                    yield this.resolve(l.Uk.ConversationManager).refreshAsync(e.conversation),
                    e.conversation
                }
                ))
            }
            blockMember(e) {
                var t, n, s;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = {};
                    void 0 !== e.blockDuration && Object.keys(e.blockDuration).forEach((t=>{
                        o[t] = r.fromValue(e.blockDuration[t])
                    }
                    ));
                    const a = yield this.api.BlockMember({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromValue(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        status: e.block ? i.m.BlockStatus.BLOCK : i.m.BlockStatus.UNBLOCK,
                        time: o,
                        bizExt: null !== (t = e.bizExt) && void 0 !== t ? t : {},
                        inboxType: e.conversation.inboxType
                    })
                      , c = this.resolve(l.Uk.ParticipantManager).getMap(e.conversation.id);
                    for (const t of Object.keys(null !== (n = e.blockDuration) && void 0 !== n ? n : {}))
                        if (!(null === (s = null == a ? void 0 : a.failed_members) || void 0 === s ? void 0 : s.find((e=>r.fromValue(t).eq(e)))) && c.has(t)) {
                            const n = c.get(t);
                            n.blocked = e.block,
                            this.resolve(l.Uk.ParticipantManager).upsert(e.conversation.id, n)
                        }
                    return e.conversation
                }
                ))
            }
            getBlockList(e={}) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox());
                    const n = yield this.api.GetBlockList({
                        cursor: e.cursor ? r.fromValue(e.cursor) : r.ZERO,
                        limit: null !== (t = e.limit) && void 0 !== t ? t : 20,
                        inboxType: e.inboxType
                    });
                    return {
                        blockList: n.user_info.map((e=>({
                            userId: e.user_id.toString(),
                            createTime: e.create_time.toString()
                        }))),
                        hasMore: null == n ? void 0 : n.has_more,
                        cursor: null == n ? void 0 : n.next_cursor
                    }
                }
                ))
            }
            setBlockList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox()),
                    yield this.api.SetBlockList({
                        applySet: e.value,
                        blocklist: e.userId.map((e=>r.fromValue(e))),
                        inboxType: e.inboxType
                    })
                }
                ))
            }
            checkInBlockList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return void 0 === e.inboxType && (e.inboxType = this.resolve(l.Uk.InboxType).getDefaultInbox()),
                    (yield this.api.CheckInBlockList({
                        userToCheck: r.fromValue(e.userId),
                        inboxType: e.inboxType
                    })).in_blocklist
                }
                ))
            }
            broadcastCreateMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = Object.assign({}, e.ext)
                      , n = u.v.createClientMessage(this.ctx, {
                        type: e.type,
                        content: e.content,
                        ext: t,
                        id: (0,
                        _.k)(),
                        conversationId: e.conversation.id,
                        mentionedUsers: e.mentionedUsers || [],
                        conversationShortId: e.conversation.shortId,
                        conversationType: e.conversation.type
                    });
                    return n.flightStatus = s.b3.Created,
                    n.indexInConversation = e.conversation.lastMessageIndex.add(1),
                    n.orderInConversation = e.conversation.lastMessageOrder.add(1),
                    (void 0 === e.insert || e.insert) && (yield this.resolve(l.Uk.BroadcastManager).processNewMessage(n, s.v$.Offline)),
                    n.sendFunc = this.broadcastSendMessage.bind(this),
                    n
                }
                ))
            }
            broadcastReceiveMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = yield this.broadcastReceiveMessageWithType(e);
                    return {
                        msgs: t.msgs,
                        hasMore: t.hasMore,
                        cursor: t.cursor
                    }
                }
                ))
            }
            broadcastUserCounter(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = e.conversation.map((e=>({
                        shortId: r.fromString(e.shortId),
                        type: e.type
                    })))
                      , n = yield this.api.BroadcastUserCounter({
                        conversations: t
                    })
                      , o = {};
                    for (const e of n.infos)
                        o[e.conversation_short_id.toString()] = e.counter;
                    return o
                }
                ))
            }
            broadcastGetConversationOnline(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    return this.resolve(l.Uk.BroadcastManager).getWithOnline(e.conversationId, e.conversationId, i.m.ConversationType.BROADCAST_CHAT)
                }
                ))
            }
            broadcastGetConversation(e) {
                return this.resolve(l.Uk.BroadcastManager).getConversation(e.conversationId)
            }
            modifyMessageProperty(e) {
                var t, n, a, c;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = {
                        success: !1,
                        payload: e.message
                    }
                      , d = this.resolve(l.Uk.ConversationManager).getRaw(e.message.conversationId);
                    if (!d)
                        return o;
                    for (const o of e.modifyContent) {
                        const r = null !== (n = null === (t = e.message.property[o.key]) || void 0 === t ? void 0 : t.findIndex((e=>{
                            var t;
                            return e.idempotentId === (null !== (t = o.idempotentId) && void 0 !== t ? t : this.ctx.option.userId)
                        }
                        ))) && void 0 !== n ? n : -1;
                        o.operation || (o.operation = -1 === r ? i.m.OPERATION_TYPE.ADD_PROPERTY_ITEM : i.m.OPERATION_TYPE.REMOVE_PROPERTY_ITEM)
                    }
                    const _ = e.modifyContent.map((e=>{
                        var t;
                        return Object.assign(Object.assign({}, e), {
                            idempotentId: null !== (t = e.idempotentId) && void 0 !== t ? t : this.ctx.option.userId,
                            operation: e.operation
                        })
                    }
                    ));
                    let p;
                    g.mergeOperationToCurrent(e.message, _),
                    this.resolve(l.Uk.MessageManager).upsert(e.message),
                    this.resolve(l.Uk.EventBus).emit(s.c5.MessagePropertyUpsert, this, e.message);
                    try {
                        p = yield this.api.ModifyMessageProperty({
                            conversationId: d.id,
                            conversationShortId: r.fromValue(d.shortId),
                            conversationType: d.type,
                            serverId: r.fromValue(e.message.serverId),
                            clientId: e.message.clientId,
                            ticket: d.ticket,
                            modifyContent: _,
                            inboxType: d.inboxType
                        })
                    } catch (t) {
                        o.success = !1,
                        o.statusCode = null == p ? void 0 : p.status,
                        o.statusMsg = t.msg,
                        o.body = p;
                        for (const t of e.modifyContent) {
                            const n = null !== (c = null === (a = e.message.property[t.key]) || void 0 === a ? void 0 : a.findIndex((e=>{
                                var n;
                                return e.idempotentId === (null !== (n = t.idempotentId) && void 0 !== n ? n : this.ctx.option.userId)
                            }
                            ))) && void 0 !== c ? c : -1;
                            -1 !== n && (e.message.property[t.key][n].status = u.R.Failed)
                        }
                        return this.resolve(l.Uk.MessageManager).upsert(e.message),
                        this.resolve(l.Uk.EventBus).emit(s.c5.MessagePropertyUpsert, this, e.message),
                        o
                    }
                    return [i.m.ModifyMessagePropertyStatus.MODIFY_PROPERTY_SUCCESS, i.m.ModifyMessagePropertyStatus.MODIFY_PROPERTY_REPEAT_REQUEST].includes(null == p ? void 0 : p.status) && (o.success = !0),
                    e.message.version = null == p ? void 0 : p.version,
                    this.resolve(l.Uk.MessageManager).upsert(e.message),
                    this.resolve(l.Uk.EventBus).emit(s.c5.MessagePropertyUpsert, this, e.message),
                    o.checkCode = r.ZERO,
                    o.checkMsg = "",
                    o.statusCode = p.status,
                    o.statusMsg = "",
                    o.body = p,
                    o
                }
                ))
            }
            markMessage(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = this.resolve(l.Uk.ConversationManager).get(e.message.conversationId);
                    if (e.message.isOffline)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.InvalidParam,
                            sender: this,
                            msg: "offline message cant be marked",
                            reachServer: !1
                        });
                    yield this.api.MarkMessage({
                        conversationId: e.message.conversationId,
                        conversationShortId: r.fromValue(e.message.conversationShortId),
                        conversationType: e.message.conversationType,
                        serverMessageId: r.fromValue(e.message.serverId),
                        actionType: e.actionType,
                        doAction: null === (t = e.doAction) || void 0 === t || t,
                        sortTime: r.fromValue(null !== (n = e.sortTime) && void 0 !== n ? n : r.ZERO),
                        tag: void 0 !== e.tag ? r.fromValue(e.tag) : void 0,
                        inboxType: o.inboxType
                    })
                }
                ))
            }
            pullMarkMessage(e) {
                var t, n, i, s, a, c, l, d;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = yield this.api.PullMarkMessage({
                        conversationId: null === (t = e.conversation) || void 0 === t ? void 0 : t.id,
                        conversationShortId: void 0 === (null === (n = e.conversation) || void 0 === n ? void 0 : n.shortId) ? void 0 : r.fromValue(e.conversation.shortId),
                        conversationType: null === (i = e.conversation) || void 0 === i ? void 0 : i.type,
                        cursor: r.fromValue(null !== (s = e.cursor) && void 0 !== s ? s : r.ZERO),
                        asc: null !== (a = e.ascending) && void 0 !== a && a,
                        limit: r.fromValue(null !== (c = e.limit) && void 0 !== c ? c : 50),
                        actionType: e.actionType,
                        tag: void 0 !== e.tag ? r.fromValue(e.tag) : void 0,
                        inboxType: null !== (d = null === (l = e.conversation) || void 0 === l ? void 0 : l.inboxType) && void 0 !== d ? d : 0
                    })
                      , _ = o.body.pull_mark_message_body
                      , p = [];
                    return _.messages.forEach((e=>{
                        const t = u.v.fromServerMessage(this.ctx, e, o.log_id);
                        p.push(t)
                    }
                    )),
                    {
                        message: p,
                        hasMore: _.has_more,
                        cursor: _.next_cursor
                    }
                }
                ))
            }
            batchUnmarkMessage(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (void 0 === e.messages || 0 === e.messages.length)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.InvalidParam,
                            msg: "invalid message list",
                            sender: this
                        });
                    const n = yield this.api.BatchUnmarkMessage({
                        conversationId: e.messages[0].conversationId,
                        conversationShortId: r.fromValue(e.messages[0].conversationShortId),
                        conversationType: e.messages[0].conversationType,
                        serverMessageIds: e.messages.map((e=>r.fromValue(e.serverId))),
                        actionType: e.actionType,
                        tag: void 0 !== e.tag ? r.fromValue(e.tag) : void 0
                    });
                    return {
                        success: 0 === n.status,
                        checkCode: n.check_code,
                        checkMsg: n.check_message,
                        statusCode: null !== (t = n.status) && void 0 !== t ? t : -1,
                        body: n,
                        payload: e.messages
                    }
                }
                ))
            }
            markMessageUnreadCountReport(e) {
                var t, n, i;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = {};
                    if (void 0 !== e.tagUnreadCount)
                        for (const t of Object.keys(e.tagUnreadCount))
                            o[t] = r.fromNumber(e.tagUnreadCount[t]);
                    const s = yield this.api.MarkMsgUnreadCountReport({
                        conversationId: null === (t = null == e ? void 0 : e.conversation) || void 0 === t ? void 0 : t.id,
                        conversationShortId: void 0 === (null === (n = null == e ? void 0 : e.conversation) || void 0 === n ? void 0 : n.shortId) ? void 0 : r.fromValue(null == e ? void 0 : e.conversation.shortId),
                        conversationType: null === (i = null == e ? void 0 : e.conversation) || void 0 === i ? void 0 : i.type,
                        totalUnreadCount: void 0 !== e.totalUnreadCount ? r.fromNumber(e.totalUnreadCount) : void 0,
                        tagUnreadCount: o
                    });
                    return {
                        setTotalStatus: s.set_total_status,
                        failedTagList: s.failed_tag_list
                    }
                }
                ))
            }
            markMessageGetUnreadCount(e) {
                var t, n, i, s, a, c;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = yield this.api.MarkMsgGetUnreadCount({
                        conversationId: null === (t = null == e ? void 0 : e.conversation) || void 0 === t ? void 0 : t.id,
                        conversationShortId: void 0 === (null === (n = null == e ? void 0 : e.conversation) || void 0 === n ? void 0 : n.shortId) ? void 0 : r.fromValue(null == e ? void 0 : e.conversation.shortId),
                        conversationType: null === (i = null == e ? void 0 : e.conversation) || void 0 === i ? void 0 : i.type,
                        getTotal: null !== (s = e.getTotal) && void 0 !== s && s,
                        tags: null === (a = e.tags) || void 0 === a ? void 0 : a.map((e=>r.fromValue(e)))
                    })
                      , l = null !== (c = o.tag_unread_count) && void 0 !== c ? c : {}
                      , d = {};
                    for (const e of Object.keys(l))
                        d[(0,
                        h.w9)(e).toString()] = l[e].toNumber();
                    return {
                        tagUnreadCount: d,
                        totalCount: o.total_count,
                        failedTagList: o.failed_tag_list
                    }
                }
                ))
            }
            getMessageByServerId(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = this.resolve(l.Uk.MessageManager).getByServerIdRaw(e.conversation.id, e.serverMessageId);
                    if (o)
                        return o;
                    try {
                        const o = yield this.api.GetMessageByServerId({
                            conversationId: e.conversation.id,
                            conversationShortId: r.fromString(e.conversation.shortId),
                            conversationType: e.conversation.type,
                            serverId: r.fromString(e.serverMessageId),
                            inboxType: e.conversation.inboxType
                        })
                          , i = null === (n = null === (t = o.body) || void 0 === t ? void 0 : t.get_message_by_id_body) || void 0 === n ? void 0 : n.msg_info;
                        return i.body ? u.v.fromServerMessage(this.ctx, i.body, o.log_id) : null
                    } catch (e) {
                        return null
                    }
                }
                ))
            }
            getMessageReferenceList(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    let o;
                    if (e.message.isRootReference)
                        o = e.message;
                    else {
                        const r = this.resolve(l.Uk.ConversationManager).get(e.message.conversationId)
                          , i = null === (n = null === (t = e.message.referenceInfo) || void 0 === t ? void 0 : t.root_message_id) || void 0 === n ? void 0 : n.toString();
                        if (void 0 === i)
                            return [];
                        const s = yield this.getMessageByServerId({
                            conversation: r,
                            serverMessageId: i
                        });
                        if (!s)
                            return [];
                        o = s
                    }
                    const r = [o];
                    return r.push(...this.resolve(l.Uk.MessageManager).getList(o.conversationId).filter((e=>{
                        var t, n;
                        return (null === (n = null === (t = e.referenceInfo) || void 0 === t ? void 0 : t.root_message_id) || void 0 === n ? void 0 : n.toString()) === o.serverId
                    }
                    ))),
                    r
                }
                ))
            }
            convertVoiceToText(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (!(null == e ? void 0 : e.serverId))
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.MPInvalidArgument,
                            msg: "message is offline",
                            reachServer: !1,
                            sender: this
                        });
                    if ((null == e ? void 0 : e.type) !== i.m.MessageType.MESSAGE_TYPE_AUDIO)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.InvalidParam,
                            msg: "message is not audio",
                            reachServer: !1,
                            sender: this
                        });
                    const n = null === (t = JSON.parse(null == e ? void 0 : e.content)) || void 0 === t ? void 0 : t.__files
                      , o = Object.keys(n)
                      , {type: a, ext: d} = n[o[0]];
                    if ("wav" !== a)
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.InvalidParam,
                            msg: "audio content is not wav",
                            reachServer: !1,
                            sender: this
                        });
                    if (d[s.v9.FileExtKeyAudioAsrText])
                        return e;
                    try {
                        const t = yield this.api.ConvertVoiceToText({
                            content: null == e ? void 0 : e.content,
                            uid: r.fromValue(this.ctx.option.userId),
                            server_message_id: r.fromValue(null == e ? void 0 : e.serverId),
                            audioOptions: {
                                vid: d[I.Vid]
                            },
                            conv_short_id: r.fromValue(null == e ? void 0 : e.conversationShortId)
                        })
                          , {audio: n, check_code: o, check_message: i} = null == t ? void 0 : t.audio_recognition_body;
                        return o && i && (e.ext[s.v9.RecognitionResponseCheckCode] = null == o ? void 0 : o.toString(),
                        e.ext[s.v9.RecognitionResponseCheckMsg] = null == i ? void 0 : i.toString()),
                        e.content = null == n ? void 0 : n.content,
                        this.resolve(l.Uk.MessageManager).upsert(e),
                        e
                    } catch (e) {
                        throw new c.G({
                            ctx: this.ctx,
                            type: s.NI.ServerError,
                            msg: "Voice conversion failed",
                            reachServer: !1,
                            sender: this
                        })
                    }
                }
                ))
            }
            install() {
                this.api = new m(this.getContext()),
                this.ctx.register(l.Uk.BroadcastManager, new O(this.ctx)),
                this.ctx.register(l.Uk.ExtensionApi, this.api),
                this.ctx.register(l.Uk.ExtensionPlugin, this),
                this.instance.deleteConversation = this.extendFunc(this.deleteConversation),
                this.instance.deleteMessage = this.extendFunc(this.deleteMessage),
                this.instance.leaveConversation = this.extendFunc(this.leaveConversation),
                this.instance.getMessageReadReceipt = this.extendFunc(this.getMessageReadReceipt),
                this.instance.getConversationListByTop = this.extendFunc(this.getConversationListByTop),
                this.instance.getConversationListByFavorite = this.extendFunc(this.getConversationListByFavorite),
                this.instance.addParticipants = this.extendFunc(this.addParticipants),
                this.instance.removeParticipants = this.extendFunc(this.removeParticipants),
                this.instance.updateParticipant = this.extendFunc(this.updateParticipant),
                this.instance.setConversationSettingInfo = this.extendFunc(this.setConversationSettingInfo),
                this.instance.setConversationCoreInfo = this.extendFunc(this.setConversationCoreInfo),
                this.instance.upsertConversationSettingExtInfo = this.extendFunc(this.upsertConversationSettingExtInfo),
                this.instance.upsertConversationCoreExtInfo = this.extendFunc(this.upsertConversationCoreExtInfo),
                this.instance.setConversationWeakMuteConfig = this.extendFunc(this.setConversationWeakMuteConfig),
                this.instance.getConversationParticipants = this.extendFunc(this.getConversationParticipants),
                this.instance.getConversationParticipantsAsync = this.extendFunc(this.getConversationParticipantsAsync),
                this.instance.getConversationParticipantsByPage = this.extendFunc(this.getConversationParticipantsByPage),
                this.instance.updateConversationReadReceipt = this.extendFunc(this.updateConversationReadReceipt),
                this.instance.sendUserAction = this.extendFunc(this.sendUserAction),
                this.instance.sendInputStatus = this.extendFunc(this.sendInputStatus),
                this.instance.upsertMessageExt = this.extendFunc(this.upsertMessageExt),
                this.instance.dissolveConversation = this.extendFunc(this.dissolveConversation),
                this.instance.modifyMessageProperty = this.extendFunc(this.modifyMessageProperty),
                this.instance.unreadCountReport = this.extendFunc(this.unreadCountReport),
                this.instance.getServerUnreadCountByConversation = this.extendFunc(this.getServerUnreadCountByConversation),
                this.instance.getServerUnreadCountByUser = this.extendFunc(this.getServerUnreadCountByUser),
                this.instance.getUserConversationList = this.extendFunc(this.getUserConversationList),
                this.instance.blockConversation = this.extendFunc(this.blockConversation),
                this.instance.blockMember = this.extendFunc(this.blockMember),
                this.instance.sendP2PMessage = this.extendFunc(this.sendP2PMessage),
                this.instance.setBlockList = this.extendFunc(this.setBlockList),
                this.instance.getBlockList = this.extendFunc(this.getBlockList),
                this.instance.checkInBlockList = this.extendFunc(this.checkInBlockList),
                this.instance.broadcastCreateMessage = this.extendFunc(this.broadcastCreateMessage),
                this.instance.broadcastReceiveMessage = this.extendFunc(this.broadcastReceiveMessage),
                this.instance.broadcastUserCounter = this.extendFunc(this.broadcastUserCounter),
                this.instance.broadcastGetConversationOnline = this.extendFunc(this.broadcastGetConversationOnline),
                this.instance.broadcastGetConversation = this.extendFunc(this.broadcastGetConversation),
                this.instance.markMessage = this.extendFunc(this.markMessage),
                this.instance.pullMarkMessage = this.extendFunc(this.pullMarkMessage),
                this.instance.getMessageByServerId = this.extendFunc(this.getMessageByServerId),
                this.instance.batchUnmarkMessage = this.extendFunc(this.batchUnmarkMessage),
                this.instance.markMessageUnreadCountReport = this.extendFunc(this.markMessageUnreadCountReport),
                this.instance.markMessageGetUnreadCount = this.extendFunc(this.markMessageGetUnreadCount),
                this.instance.getMessageReferenceList = this.extendFunc(this.getMessageReferenceList),
                this.instance.convertVoiceToText = this.extendFunc(this.convertVoiceToText),
                this.addEventHandler(),
                this.resolve(l.Uk.MessageManager).injectProcessor(new T(this.ctx)),
                this.resolve(l.Uk.MessageManager).injectProcessor(new P(this.ctx)),
                this.resolve(l.Uk.MessageManager).injectProcessor(new S(this.ctx))
            }
            receivePacket(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    e.cmd === i.m.IMCMD.NEW_BROADCAST_MSG_NOTIFY && (yield this.receiveBroadcastPacket(e)),
                    e.cmd === i.m.IMCMD.NEW_P2P_MSG_NOTIFY && (yield this.receiveP2PMessage(e))
                }
                ))
            }
            receiveP2PMessage(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.has_new_p2p_message_notify) {
                        const t = e.body.has_new_p2p_message_notify
                          , n = new E;
                        n.sendType = t.send_type,
                        n.sender = t.sender.toString(),
                        n.secSender = t.sec_sender,
                        n.conversationId = t.conversation_id,
                        n.conversationShortId = t.conversation_short_id.toString(),
                        n.conversationType = t.conversation_type,
                        n.type = t.message_type,
                        n.content = t.content,
                        n.ext = t.ext,
                        n.createTime = new Date(t.create_time.toNumber()),
                        this.resolve(l.Uk.EventBus).emit(s.c5.ReceiveNewP2PMessage, this, n)
                    }
                }
                ))
            }
            receiveBroadcastPacket(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const n = e.body.has_new_message_notify
                      , o = n.message
                      , i = u.v.fromServerMessage(this.ctx, o, e.log_id);
                    i.ext || (i.ext = {}),
                    yield this.resolve(l.Uk.BroadcastManager).processNewMessage(i, s.v$.Online);
                    const a = this.resolve(l.Uk.BroadcastManager).getConversation(i.conversationId)
                      , c = a.localIndex;
                    if (a.setConversationCursor(n.next_cursor),
                    c.gt(r.ZERO) && (null === (t = n.previous_cursor) || void 0 === t ? void 0 : t.gt(c))) {
                        let e = !0
                          , t = c
                          , n = 0;
                        const o = 5;
                        for (; e && n < o; ) {
                            const o = yield this.broadcastReceiveMessageWithType({
                                conversation: a,
                                cursor: t,
                                limit: 50,
                                reverse: !1,
                                pullType: 1
                            });
                            e = o.hasMore,
                            t = o.cursor,
                            yield this.resolve(l.Uk.BroadcastManager).processNewMessagesFromPull(o.msgs, s.v$.BroadcastLoadMore, o.log_id),
                            n++
                        }
                    }
                }
                ))
            }
            dispose() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    this.resolve(l.Uk.ParticipantManager).dispose(),
                    this.resolve(l.Uk.BroadcastManager).dispose()
                }
                ))
            }
            addEventHandler() {
                this.ctx.option.autoReadIndex && this.resolve(l.Uk.EventBus).subscribe(s.c5.MessageUpsert, (e=>(0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.flightStatus === s.b3.Inflight)
                        return;
                    const t = this.resolve(l.Uk.ConversationManager).getRaw(e.conversationId);
                    if (!t)
                        return;
                    if (0 === this.resolve(l.Uk.ParticipantManager).getRaw(t.id).length)
                        return;
                    const n = this.resolve(l.Uk.ParticipantManager).getByUserIdRaw(t.id, e.sender);
                    n && e.moveReadIndex && (n.readIndex = e.indexInConversation,
                    n.readOrder = e.orderInConversation,
                    this.resolve(l.Uk.ParticipantManager).upsert(t.id, n),
                    a.Y.ctxDebug(this.ctx, `auto readindex with read:${n.readIndex.toString()} & order:${n.readOrder.toString()}`))
                }
                )))),
                this.resolve(l.Uk.EventBus).subscribe(s.c5.ReceiveNewP2PMessage, (e=>(0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.type === i.m.MessageType.MESSAGE_TYPE_READ_COMMAND) {
                        const t = this.resolve(l.Uk.ConversationManager).getWithShortIdRaw(e.conversationShortId);
                        if (!t)
                            return;
                        const n = v.parse(e.content)
                          , o = r.fromValue(n.P2PSender).toString()
                          , i = this.resolve(l.Uk.ParticipantManager).getByUserIdRaw(t.id, o);
                        if (!i)
                            return;
                        const c = i.readIndex
                          , d = r.fromValue(n.P2PSenderReadIndex);
                        if (c.gte(d))
                            return;
                        i.readIndex = d,
                        this.resolve(l.Uk.ParticipantManager).upsert(t.id, i),
                        this.resolve(l.Uk.EventBus).emit(s.c5.ConversationUpsert, this, t),
                        this.resolve(l.Uk.EventBus).emitEmpty(s.c5.ConversationChange, this),
                        a.Y.ctxDebug(this.ctx, `p2p update ${i.userId} readindex: ${c.toString()} to ${d.toString()}`)
                    }
                }
                ))))
            }
            broadcastReceiveMessageWithType(e) {
                var t, n, i, a, c;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = yield this.api.BroadcastReceiveMessage({
                        conversationId: e.conversation.id,
                        conversationShortId: r.fromString(e.conversation.shortId),
                        conversationType: e.conversation.type,
                        cursor: e.cursor ? r.fromValue(e.cursor) : e.conversation.localIndex,
                        limit: e.limit ? r.fromValue(e.limit) : r.fromNumber(20),
                        reverse: null !== (t = e.reverse) && void 0 !== t && t,
                        pullType: null !== (n = e.pullType) && void 0 !== n ? n : 0,
                        inboxType: e.conversation.inboxType
                    })
                      , d = null === (i = o.body) || void 0 === i ? void 0 : i.broadcast_recv_message_body
                      , _ = null !== (c = null === (a = d.messages) || void 0 === a ? void 0 : a.map((e=>u.v.fromServerMessage(this.ctx, e, o.log_id)))) && void 0 !== c ? c : [];
                    return yield this.resolve(l.Uk.BroadcastManager).processNewMessagesFromPull(_, s.v$.BroadcastLoadMore, o.log_id),
                    d.next_cursor && e.conversation.setConversationCursor(d.next_cursor),
                    {
                        msgs: _,
                        hasMore: d.has_more,
                        cursor: d.next_cursor,
                        log_id: o.log_id
                    }
                }
                ))
            }
            broadcastSendMessage(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const n = this.resolve(l.Uk.BroadcastManager).getConversation(e.conversationId)
                      , o = {
                        success: !1,
                        payload: e
                    };
                    e.flightStatus = s.b3.Inflight;
                    try {
                        const a = yield this.api.BroadcastSendMessage({
                            conversationId: e.conversationId,
                            conversationShortId: r.fromString(e.conversationShortId),
                            conversationType: e.conversationType,
                            clientId: e.clientId,
                            content: e.content,
                            ticket: n.ticket,
                            ext: e.ext,
                            type: e.type,
                            mentionedUsers: e.mentionedUsers.map((e=>r.fromString(e))),
                            inboxType: n.inboxType
                        })
                          , c = null === (t = a.body) || void 0 === t ? void 0 : t.broadcast_send_message_body;
                        if (o.body = c,
                        o.checkCode = c.check_code,
                        o.checkMsg = c.check_message,
                        o.statusCode = c.status,
                        o.statusMsg = c.extra_info,
                        this.ctx.option.debug && (e.ext[s.v9.LocalLogId] = a.log_id),
                        0 === c.status) {
                            const t = c.server_message_id.toString();
                            e.serverId = t,
                            e.flightStatus = s.b3.Succeeded,
                            o.success = !0,
                            e.isOffline = !1
                        } else
                            e.flightStatus = s.b3.Rejected,
                            c.status === i.m.SendMessageStatus.CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE && (e.flightStatus = s.b3.SelfVisible)
                    } catch (t) {
                        e.flightStatus = s.b3.Failed
                    }
                    return o
                }
                ))
            }
            getReadReceipt(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.batchFetch) {
                        const {conversation: t} = e
                          , n = (yield this.api.BatchGetConversationParticipantsReadIndex({
                            conversationId: [t.id],
                            conversationShortId: [r.fromString(t.shortId)],
                            min_index_required: !0
                        })).conversationParticipantsReadIndex
                          , o = (null == n ? void 0 : n[0].participantReadIndex) || []
                          , i = []
                          , s = [];
                        return o.forEach((e=>{
                            e.index && i.push({
                                user_id: r.fromString(e.user_id.toString()),
                                index: r.fromString(e.index.toString())
                            }),
                            s.push({
                                user_id: r.fromString(e.user_id.toString()),
                                index: r.fromString(e.index_min.toString())
                            })
                        }
                        )),
                        {
                            readIndexs: i,
                            minIndexs: s
                        }
                    }
                    {
                        const t = yield this.api.GetConversationParticipantsReadIndexV3({
                            conversationId: e.conversation.id,
                            conversationShortId: r.fromString(e.conversation.shortId),
                            conversationType: e.conversation.type,
                            inboxType: e.conversation.inboxType
                        })
                          , n = yield this.api.GetConversationParticipantsMinIndexV3({
                            conversationId: e.conversation.id,
                            conversationShortId: r.fromString(e.conversation.shortId),
                            conversationType: e.conversation.type,
                            inboxType: e.conversation.inboxType
                        });
                        return {
                            readIndexs: (null == t ? void 0 : t.indexes) || [],
                            minIndexs: n.indexes
                        }
                    }
                }
                ))
            }
            getNormalMsgUnreadCount(e) {
                return e.isMuted ? 0 : e.pushStatus === s.Bs.PartAllow ? e.unreadCountWithWhiteList : e.unreadCount
            }
        }
    }
    ,
    86166: (e,t,n)=>{
        n.d(t, {
            m: ()=>d
        });
        var o = n(59042)
          , r = n(10007)
          , i = n.n(r);
        o.util.Long = i(),
        o.configure();
        const s = o.Reader
          , a = o.Writer
          , c = o.util
          , l = o.roots.default || (o.roots.default = {})
          , d = l.im_proto = (()=>{
            const e = {};
            return e.Frame = function() {
                function e(e) {
                    if (this.headers = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.seqid = c.Long ? c.Long.fromBits(0, 0, !0) : 0,
                e.prototype.logid = c.Long ? c.Long.fromBits(0, 0, !0) : 0,
                e.prototype.service = 0,
                e.prototype.method = 0,
                e.prototype.headers = c.emptyArray,
                e.prototype.payload_encoding = "",
                e.prototype.payload_type = "",
                e.prototype.payload = c.newBuffer([]),
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    t.uint32(8).uint64(e.seqid),
                    t.uint32(16).uint64(e.logid),
                    t.uint32(24).int32(e.service),
                    t.uint32(32).int32(e.method),
                    null != e.headers && e.headers.length)
                        for (var n = 0; n < e.headers.length; ++n)
                            l.im_proto.Frame.ExtendedEntry.encode(e.headers[n], t.uint32(42).fork()).ldelim();
                    return null != e.payload_encoding && Object.hasOwnProperty.call(e, "payload_encoding") && t.uint32(50).string(e.payload_encoding),
                    null != e.payload_type && Object.hasOwnProperty.call(e, "payload_type") && t.uint32(58).string(e.payload_type),
                    null != e.payload && Object.hasOwnProperty.call(e, "payload") && t.uint32(66).bytes(e.payload),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.Frame; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.seqid = e.uint64();
                            break;
                        case 2:
                            o.logid = e.uint64();
                            break;
                        case 3:
                            o.service = e.int32();
                            break;
                        case 4:
                            o.method = e.int32();
                            break;
                        case 5:
                            o.headers && o.headers.length || (o.headers = []),
                            o.headers.push(l.im_proto.Frame.ExtendedEntry.decode(e, e.uint32()));
                            break;
                        case 6:
                            o.payload_encoding = e.string();
                            break;
                        case 7:
                            o.payload_type = e.string();
                            break;
                        case 8:
                            o.payload = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("seqid"))
                        throw c.ProtocolError("missing required 'seqid'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("logid"))
                        throw c.ProtocolError("missing required 'logid'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("service"))
                        throw c.ProtocolError("missing required 'service'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("method"))
                        throw c.ProtocolError("missing required 'method'", {
                            instance: o
                        });
                    return o
                }
                ,
                e.ExtendedEntry = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.key = "",
                    e.prototype.value = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = a.create()),
                        t.uint32(10).string(e.key),
                        t.uint32(18).string(e.value),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof s || (e = s.create(e));
                        for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.Frame.ExtendedEntry; e.pos < n; ) {
                            var r = e.uint32();
                            switch (r >>> 3) {
                            case 1:
                                o.key = e.string();
                                break;
                            case 2:
                                o.value = e.string();
                                break;
                            default:
                                e.skipType(7 & r)
                            }
                        }
                        if (!o.hasOwnProperty("key"))
                            throw c.ProtocolError("missing required 'key'", {
                                instance: o
                            });
                        if (!o.hasOwnProperty("value"))
                            throw c.ProtocolError("missing required 'value'", {
                                instance: o
                            });
                        return o
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.IMCMD = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[100] = "SEND_MESSAGE"] = 100,
                t[e[200] = "GET_MESSAGES_BY_USER"] = 200,
                t[e[203] = "GET_MESSAGES_BY_USER_INIT_V2"] = 203,
                t[e[211] = "GET_MESSAGE_INFO_BY_SERVER_ID"] = 211,
                t[e[301] = "GET_MESSAGES_BY_CONVERSATION"] = 301,
                t[e[302] = "GET_MESSAGES_CHECKINFO_IN_CONVERSATION"] = 302,
                t[e[410] = "SEND_USER_ACTION"] = 410,
                t[e[411] = "SEND_INPUT_STATUS"] = 411,
                t[e[500] = "NEW_MSG_NOTIFY"] = 500,
                t[e[504] = "NEW_P2P_MSG_NOTIFY"] = 504,
                t[e[505] = "NEW_BROADCAST_MSG_NOTIFY"] = 505,
                t[e[603] = "MARK_CONVERSATION_DELETE"] = 603,
                t[e[609] = "CREATE_CONVERSATION_V2"] = 609,
                t[e[610] = "GET_CONVERSATION_INFO_LIST_V2"] = 610,
                t[e[611] = "GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2"] = 611,
                t[e[612] = "GET_CONVERSATION_INFO_LIST_BY_TOP_V2"] = 612,
                t[e[614] = "DISSOLVE_CONVERSATION"] = 614,
                t[e[615] = "GET_CONVERSATIONS_CHECKINFO"] = 615,
                t[e[605] = "CONVERSATION_PARTICIPANTS_LIST"] = 605,
                t[e[650] = "ADD_CONVERSATION_PARTICIPANTS"] = 650,
                t[e[651] = "REMOVE_CONVERSATION_PARTICIPANTS"] = 651,
                t[e[652] = "LEAVE_CONVERSATION"] = 652,
                t[e[654] = "MGET_CONVERSATION_PARTICIPANTS"] = 654,
                t[e[655] = "UPDATE_CONVERSATION_PARTICIPANT"] = 655,
                t[e[701] = "DELETE_MESSAGE"] = 701,
                t[e[702] = "RECALL_MESSAGE"] = 702,
                t[e[705] = "SET_MESSAGE_PROPERTY"] = 705,
                t[e[901] = "GET_CONVERSATION_CORE_INFO"] = 901,
                t[e[902] = "SET_CONVERSATION_CORE_INFO"] = 902,
                t[e[904] = "UPSERT_CONVERSATION_CORE_EXT_INFO"] = 904,
                t[e[921] = "SET_CONVERSATION_SETTING_INFO"] = 921,
                t[e[922] = "UPSERT_CONVERSATION_SETTING_EXT_INFO"] = 922,
                t[e[1001] = "GET_STRANGER_CONVERSATION_LIST"] = 1001,
                t[e[1002] = "GET_STRANGER_MESSAGES_IN_CONVERSATION"] = 1002,
                t[e[1003] = "DELETE_STRANGER_MESSAGE"] = 1003,
                t[e[1004] = "DELETE_STRANGER_CONVERSATION"] = 1004,
                t[e[1005] = "DELETE_ALL_STRANGER_CONVERSATIONS"] = 1005,
                t[e[1006] = "MARK_STRANGER_CONVERSATION_READ"] = 1006,
                t[e[1007] = "MARK_ALL_STRANGER_CONVERSATIONS_READ"] = 1007,
                t[e[1099] = "STRANGER_NEW_MSG_NOTIFY"] = 1099,
                t[e[2e3] = "GET_CONVERSATION_PARTICIPANTS_READ_INDEX_V3"] = 2e3,
                t[e[2001] = "GET_CONVERSATION_PARTICIPANTS_MIN_INDEX_V3"] = 2001,
                t[e[2002] = "MARK_CONVERSATION_READ_V3"] = 2002,
                t[e[2003] = "GET_MEDIA_UPLOAD_TOKEN"] = 2003,
                t[e[2004] = "GET_MEDIA_URLS"] = 2004,
                t[e[2005] = "GET_TICKET"] = 2005,
                t[e[2006] = "GET_USER_CONVERSATION_LIST"] = 2006,
                t[e[2007] = "BROADCAST_SEND_MESSAGE"] = 2007,
                t[e[2008] = "BROADCAST_RECV_MESSAGE"] = 2008,
                t[e[2009] = "BROADCAST_USER_COUNTER"] = 2009,
                t[e[2010] = "CLIENT_ACK"] = 2010,
                t[e[2011] = "CREATE_VOIP"] = 2011,
                t[e[2012] = "CALL_VOIP"] = 2012,
                t[e[2013] = "UPDATE_VOIP"] = 2013,
                t[e[2014] = "HEARTBEAT_CHANNEL"] = 2014,
                t[e[2015] = "PROFILE_GET_INFO"] = 2015,
                t[e[2016] = "REPORT_CLIENT_METRICS"] = 2016,
                t[e[2017] = "GET_CONFIGS"] = 2017,
                t[e[2021] = "MODIFY_MESSAGE_EXT"] = 2021,
                t[e[2018] = "UNREAD_COUNT_REPORT"] = 2018,
                t[e[2019] = "BLOCK_MEMBERS"] = 2019,
                t[e[2020] = "BLOCK_CONVERSATION"] = 2020,
                t[e[2030] = "GET_UNREAD_COUNT"] = 2030,
                t[e[2031] = "SEND_MESSAGE_P2P"] = 2031,
                t[e[2032] = "GET_BLOCKLIST"] = 2032,
                t[e[2033] = "SET_BLOCKLIST"] = 2033,
                t[e[2034] = "CHECK_IN_BLOCKLIST"] = 2034,
                t[e[2036] = "MARK_MESSAGE"] = 2036,
                t[e[2037] = "PULL_MARK_MESSAGE"] = 2037,
                t[e[2038] = "BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX"] = 2038,
                t[e[2043] = "GET_MESSAGE_BY_INIT"] = 2043,
                t[e[2054] = "MARK_MSG_UNREAD_COUNT_REPORT"] = 2054,
                t[e[2055] = "MARK_MSG_GET_UNREAD_COUNT"] = 2055,
                t[e[2056] = "BATCH_UNMARK_MESSAGE"] = 2056,
                t[e[2057] = "CLIENT_BATCH_ACK"] = 2057,
                t[e[2059] = "AUDIO_RECOGNITION"] = 2059,
                t
            }(),
            e.StatusCode = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "OK"] = 0,
                t[e[1] = "INVALID_TOKEN"] = 1,
                t[e[100] = "EXPIRED_TOKEN"] = 100,
                t[e[2] = "INVALID_TICKET"] = 2,
                t[e[4] = "INVALID_REQUEST"] = 4,
                t[e[5] = "INVALID_CMD"] = 5,
                t[e[6] = "SERVER_ERR"] = 6,
                t[e[11] = "USER_FORBIDDEN"] = 11,
                t[e[500] = "INTERNAL_ERROR"] = 500,
                t[e[15] = "MESSAGE_TARGET_CONVERSATION_NOT_EXIST"] = 15,
                t[e[16] = "DEGRADATION_ERROR"] = 16,
                t[e[17] = "RECALL_TIMEOUT"] = 17,
                t[e[19] = "CALLBACK_DENY"] = 19,
                t
            }(),
            e.SendMessageStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "SEND_SUCCEED"] = 0,
                t[e[1] = "USER_NOT_IN_CONVERSATION"] = 1,
                t[e[2] = "CHECK_CONV_NOT_PASS"] = 2,
                t[e[3] = "CHECK_MSG_NOT_PASS"] = 3,
                t[e[4] = "CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE"] = 4,
                t
            }(),
            e.Refer = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "ANDROID"] = 1,
                t[e[2] = "IOS"] = 2,
                t[e[3] = "PC"] = 3,
                t[e[4] = "SERVER"] = 4,
                t
            }(),
            e.ConversationType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "ONE_TO_ONE_CHAT"] = 1,
                t[e[2] = "GROUP_CHAT"] = 2,
                t[e[3] = "LIVE_CHAT"] = 3,
                t[e[4] = "BROADCAST_CHAT"] = 4,
                t
            }(),
            e.MessageType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "LEGACY_MESSAGE_TYPE_SYSTEM"] = 1,
                t[e[2] = "LEGACY_MESSAGE_TYPE_IMAGE"] = 2,
                t[e[3] = "LEGACY_MESSAGE_TYPE_AUDIO"] = 3,
                t[e[4] = "LEGACY_MESSAGE_TYPE_VIDEO"] = 4,
                t[e[5] = "LEGACY_MESSAGE_TYPE_EMOJI"] = 5,
                t[e[6] = "LEGACY_MESSAGE_TYPE_FILE"] = 6,
                t[e[7] = "LEGACY_MESSAGE_TYPE_TEXT"] = 7,
                t[e[8] = "LEGACY_MESSAGE_TYPE_USER_CARD"] = 8,
                t[e[9] = "LEGACY_MESSAGE_TYPE_TOAST"] = 9,
                t[e[10] = "LEGACY_MESSAGE_TYPE_GROUP_CARD"] = 10,
                t[e[10001] = "MESSAGE_TYPE_TEXT"] = 10001,
                t[e[10002] = "MESSAGE_TYPE_STICKER"] = 10002,
                t[e[10003] = "MESSAGE_TYPE_IMAGE"] = 10003,
                t[e[10004] = "MESSAGE_TYPE_VIDEO"] = 10004,
                t[e[10005] = "MESSAGE_TYPE_FILE"] = 10005,
                t[e[10006] = "MESSAGE_TYPE_AUDIO"] = 10006,
                t[e[10007] = "MESSAGE_TYPE_LOCATION"] = 10007,
                t[e[10008] = "MESSAGE_TYPE_SYSTEM"] = 10008,
                t[e[10009] = "MESSAGE_TYPE_LINK"] = 10009,
                t[e[50001] = "MESSAGE_TYPE_COMMAND"] = 50001,
                t[e[50002] = "MESSAGE_TYPE_UPDATE_MESSAGE_EXT"] = 50002,
                t[e[50010] = "MESSAGE_TYPE_MODE_CHANGE"] = 50010,
                t[e[50003] = "MESSAGE_TYPE_UPDATE_MIN_INDEX"] = 50003,
                t[e[50004] = "MESSAGE_TYPE_USER_ACTION"] = 50004,
                t[e[50005] = "MESSAGE_TYPE_CONVERSATION_DESTROY"] = 50005,
                t[e[50011] = "MESSAGE_TYPE_BLOCK_COMMAND"] = 50011,
                t[e[50012] = "MESSAGE_TYPE_MARK_COMMAND"] = 50012,
                t[e[50013] = "MESSAGE_TYPE_READ_COMMAND"] = 50013,
                t[e[50016] = "MESSAGE_TYPE_BATCH_UNMARK_COMMAND"] = 50016,
                t[e[60001] = "MESSAGE_TYPE_NOTIFY_COMMAND"] = 60001,
                t[e[70001] = "MESSAGE_TYPE_MESSAGE_PROPERTY"] = 70001,
                t[e[70002] = "MESSAGE_TYPE_UPDATE_MESSAGE_PROPERTY"] = 70002,
                t[e[80001] = "MESSAGE_TYPE_VOIP_COMMAND"] = 80001,
                t[e[80002] = "MESSAGE_TYPE_VOIP_CARD_COMMAND"] = 80002,
                t[e[80003] = "MESSAGE_TYPE_VOIP_SINGLE_CHAT_STATUS_COMMAND"] = 80003,
                t[e[80004] = "MESSAGE_TYPE_VOIP_CALLEE_LIST_UPDATE_NOTIFY"] = 80004,
                t
            }(),
            e.GroupRole = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "ORDINARY"] = 0,
                t[e[1] = "OWNER"] = 1,
                t[e[2] = "MANAGER"] = 2,
                t[e[3] = "VISITOR"] = 3,
                t
            }(),
            e.TicketType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "TICKET_TYPE_APP"] = 1,
                t[e[2] = "TICKET_TYPE_PC"] = 2,
                t[e[3] = "TICKET_TYPE_WEB"] = 3,
                t
            }(),
            e.MuteMessageType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "TYPE_MENTION"] = 1,
                t[e[2] = "TYPE_SEND_BY_GROUP_OWNER"] = 2,
                t[e[3] = "TYPE_AUTO_SEND_BY_SERVER"] = 3,
                t[e[4] = "TYPE_MENTION_AND_SEND_BY_GROUP_OWNER"] = 4,
                t
            }(),
            e.MuteBadgeCountInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.message_type = 1,
                e.prototype.badge_count = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(8).int32(e.message_type),
                    t.uint32(16).int32(e.badge_count),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MuteBadgeCountInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.message_type = e.int32();
                            break;
                        case 2:
                            o.badge_count = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("message_type"))
                        throw c.ProtocolError("missing required 'message_type'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("badge_count"))
                        throw c.ProtocolError("missing required 'badge_count'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.PropertyItem = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.uid = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_uid = "",
                e.prototype.create_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.idempotent_id = "",
                e.prototype.value = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).int64(e.uid),
                    null != e.sec_uid && Object.hasOwnProperty.call(e, "sec_uid") && t.uint32(18).string(e.sec_uid),
                    null != e.create_time && Object.hasOwnProperty.call(e, "create_time") && t.uint32(24).int64(e.create_time),
                    null != e.idempotent_id && Object.hasOwnProperty.call(e, "idempotent_id") && t.uint32(34).string(e.idempotent_id),
                    null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(42).string(e.value),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.PropertyItem; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.uid = e.int64();
                            break;
                        case 2:
                            o.sec_uid = e.string();
                            break;
                        case 3:
                            o.create_time = e.int64();
                            break;
                        case 4:
                            o.idempotent_id = e.string();
                            break;
                        case 5:
                            o.value = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.PropertyItemList = function() {
                function e(e) {
                    if (this.Items = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.Items = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.Items && e.Items.length)
                        for (var n = 0; n < e.Items.length; ++n)
                            l.im_proto.PropertyItem.encode(e.Items[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.PropertyItemList; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.Items && o.Items.length || (o.Items = []),
                        o.Items.push(l.im_proto.PropertyItem.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessageBody = function() {
                function e(e) {
                    if (this.ext = {},
                    this.property_list = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.index_in_conversation = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.message_type = 0,
                e.prototype.sender = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.content = "",
                e.prototype.ext = c.emptyObject,
                e.prototype.create_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.status = 0,
                e.prototype.order_in_conversation = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_sender = "",
                e.prototype.property_list = c.emptyObject,
                e.prototype.reference_info = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(24).int64(e.server_message_id),
                    null != e.index_in_conversation && Object.hasOwnProperty.call(e, "index_in_conversation") && t.uint32(32).int64(e.index_in_conversation),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(40).int64(e.conversation_short_id),
                    null != e.message_type && Object.hasOwnProperty.call(e, "message_type") && t.uint32(48).int32(e.message_type),
                    null != e.sender && Object.hasOwnProperty.call(e, "sender") && t.uint32(56).int64(e.sender),
                    null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(66).string(e.content),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(74).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    if (null != e.create_time && Object.hasOwnProperty.call(e, "create_time") && t.uint32(80).int64(e.create_time),
                    null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(88).int64(e.version),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(96).int32(e.status),
                    null != e.order_in_conversation && Object.hasOwnProperty.call(e, "order_in_conversation") && t.uint32(104).int64(e.order_in_conversation),
                    null != e.sec_sender && Object.hasOwnProperty.call(e, "sec_sender") && t.uint32(114).string(e.sec_sender),
                    null != e.property_list && Object.hasOwnProperty.call(e, "property_list"))
                        for (n = Object.keys(e.property_list),
                        o = 0; o < n.length; ++o)
                            t.uint32(122).fork().uint32(10).string(n[o]),
                            l.im_proto.PropertyItemList.encode(e.property_list[n[o]], t.uint32(18).fork()).ldelim().ldelim();
                    return null != e.reference_info && Object.hasOwnProperty.call(e, "reference_info") && l.im_proto.ReferenceInfo.encode(e.reference_info, t.uint32(146).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.MessageBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 3:
                            i.server_message_id = e.int64();
                            break;
                        case 4:
                            i.index_in_conversation = e.int64();
                            break;
                        case 5:
                            i.conversation_short_id = e.int64();
                            break;
                        case 6:
                            i.message_type = e.int32();
                            break;
                        case 7:
                            i.sender = e.int64();
                            break;
                        case 8:
                            i.content = e.string();
                            break;
                        case 9:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; )
                                switch ((u = e.uint32()) >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            i.ext[n] = o;
                            break;
                        case 10:
                            i.create_time = e.int64();
                            break;
                        case 11:
                            i.version = e.int64();
                            break;
                        case 12:
                            i.status = e.int32();
                            break;
                        case 13:
                            i.order_in_conversation = e.int64();
                            break;
                        case 14:
                            i.sec_sender = e.string();
                            break;
                        case 15:
                            for (i.property_list === c.emptyObject && (i.property_list = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = null; e.pos < d; ) {
                                var u;
                                switch ((u = e.uint32()) >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = l.im_proto.PropertyItemList.decode(e, e.uint32());
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.property_list[n] = o;
                            break;
                        case 18:
                            i.reference_info = l.im_proto.ReferenceInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.ReferenceInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.referenced_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.hint = "",
                e.prototype.ref_message_type = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.referenced_message_status = 0,
                e.prototype.root_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.root_message_conv_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(8).int64(e.referenced_message_id),
                    t.uint32(18).string(e.hint),
                    t.uint32(24).int64(e.ref_message_type),
                    t.uint32(32).int32(e.referenced_message_status),
                    null != e.root_message_id && Object.hasOwnProperty.call(e, "root_message_id") && t.uint32(40).int64(e.root_message_id),
                    null != e.root_message_conv_index && Object.hasOwnProperty.call(e, "root_message_conv_index") && t.uint32(48).int64(e.root_message_conv_index),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ReferenceInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.referenced_message_id = e.int64();
                            break;
                        case 2:
                            o.hint = e.string();
                            break;
                        case 3:
                            o.ref_message_type = e.int64();
                            break;
                        case 4:
                            o.referenced_message_status = e.int32();
                            break;
                        case 5:
                            o.root_message_id = e.int64();
                            break;
                        case 6:
                            o.root_message_conv_index = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("referenced_message_id"))
                        throw c.ProtocolError("missing required 'referenced_message_id'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("hint"))
                        throw c.ProtocolError("missing required 'hint'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("ref_message_type"))
                        throw c.ProtocolError("missing required 'ref_message_type'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("referenced_message_status"))
                        throw c.ProtocolError("missing required 'referenced_message_status'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.ParticipantRole = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "PARTICIPANT_ROLE_NORMAL"] = 0,
                t[e[1] = "PARTICIPANT_ROLE_OWNER"] = 1,
                t[e[2] = "PARTICIPANT_ROLE_ADMIN"] = 2,
                t[e[3] = "PARTICIPANT_ROLE_VISITOR"] = 3,
                t
            }(),
            e.Participant = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sort_order = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.role = 0,
                e.prototype.alias = "",
                e.prototype.sec_uid = "",
                e.prototype.blocked = 0,
                e.prototype.left_block_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(8).int64(e.user_id),
                    null != e.sort_order && Object.hasOwnProperty.call(e, "sort_order") && t.uint32(16).int64(e.sort_order),
                    null != e.role && Object.hasOwnProperty.call(e, "role") && t.uint32(24).int32(e.role),
                    null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(34).string(e.alias),
                    null != e.sec_uid && Object.hasOwnProperty.call(e, "sec_uid") && t.uint32(42).string(e.sec_uid),
                    null != e.blocked && Object.hasOwnProperty.call(e, "blocked") && t.uint32(48).int32(e.blocked),
                    null != e.left_block_time && Object.hasOwnProperty.call(e, "left_block_time") && t.uint32(56).int64(e.left_block_time),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.Participant; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.user_id = e.int64();
                            break;
                        case 2:
                            o.sort_order = e.int64();
                            break;
                        case 3:
                            o.role = e.int32();
                            break;
                        case 4:
                            o.alias = e.string();
                            break;
                        case 5:
                            o.sec_uid = e.string();
                            break;
                        case 6:
                            o.blocked = e.int32();
                            break;
                        case 7:
                            o.left_block_time = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ParticipantsPage = function() {
                function e(e) {
                    if (this.participants = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.participants = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            l.im_proto.Participant.encode(e.participants[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(24).int64(e.cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ParticipantsPage; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.participants && o.participants.length || (o.participants = []),
                            o.participants.push(l.im_proto.Participant.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationInfoV2 = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.ticket = "",
                e.prototype.first_page_participants = null,
                e.prototype.participants_count = 0,
                e.prototype.is_participant = !1,
                e.prototype.inbox_type = 0,
                e.prototype.user_info = null,
                e.prototype.conversation_core_info = null,
                e.prototype.conversation_setting_info = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(34).string(e.ticket),
                    null != e.first_page_participants && Object.hasOwnProperty.call(e, "first_page_participants") && l.im_proto.ParticipantsPage.encode(e.first_page_participants, t.uint32(50).fork()).ldelim(),
                    null != e.participants_count && Object.hasOwnProperty.call(e, "participants_count") && t.uint32(56).int32(e.participants_count),
                    null != e.is_participant && Object.hasOwnProperty.call(e, "is_participant") && t.uint32(64).bool(e.is_participant),
                    null != e.inbox_type && Object.hasOwnProperty.call(e, "inbox_type") && t.uint32(72).int32(e.inbox_type),
                    null != e.user_info && Object.hasOwnProperty.call(e, "user_info") && l.im_proto.Participant.encode(e.user_info, t.uint32(162).fork()).ldelim(),
                    null != e.conversation_core_info && Object.hasOwnProperty.call(e, "conversation_core_info") && l.im_proto.ConversationCoreInfo.encode(e.conversation_core_info, t.uint32(402).fork()).ldelim(),
                    null != e.conversation_setting_info && Object.hasOwnProperty.call(e, "conversation_setting_info") && l.im_proto.ConversationSettingInfo.encode(e.conversation_setting_info, t.uint32(410).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationInfoV2; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.ticket = e.string();
                            break;
                        case 6:
                            o.first_page_participants = l.im_proto.ParticipantsPage.decode(e, e.uint32());
                            break;
                        case 7:
                            o.participants_count = e.int32();
                            break;
                        case 8:
                            o.is_participant = e.bool();
                            break;
                        case 9:
                            o.inbox_type = e.int32();
                            break;
                        case 20:
                            o.user_info = l.im_proto.Participant.decode(e, e.uint32());
                            break;
                        case 50:
                            o.conversation_core_info = l.im_proto.ConversationCoreInfo.decode(e, e.uint32());
                            break;
                        case 51:
                            o.conversation_setting_info = l.im_proto.ConversationSettingInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationCoreInfo = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.info_version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.name = "",
                e.prototype.desc = "",
                e.prototype.icon = "",
                e.prototype.inbox_type = 0,
                e.prototype.notice = "",
                e.prototype.ext = c.emptyObject,
                e.prototype.owner = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_owner = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.info_version && Object.hasOwnProperty.call(e, "info_version") && t.uint32(32).int64(e.info_version),
                    null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(42).string(e.name),
                    null != e.desc && Object.hasOwnProperty.call(e, "desc") && t.uint32(50).string(e.desc),
                    null != e.icon && Object.hasOwnProperty.call(e, "icon") && t.uint32(58).string(e.icon),
                    null != e.inbox_type && Object.hasOwnProperty.call(e, "inbox_type") && t.uint32(64).int32(e.inbox_type),
                    null != e.notice && Object.hasOwnProperty.call(e, "notice") && t.uint32(74).string(e.notice),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(90).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return null != e.owner && Object.hasOwnProperty.call(e, "owner") && t.uint32(96).int64(e.owner),
                    null != e.sec_owner && Object.hasOwnProperty.call(e, "sec_owner") && t.uint32(106).string(e.sec_owner),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.ConversationCoreInfo; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.info_version = e.int64();
                            break;
                        case 5:
                            i.name = e.string();
                            break;
                        case 6:
                            i.desc = e.string();
                            break;
                        case 7:
                            i.icon = e.string();
                            break;
                        case 8:
                            i.inbox_type = e.int32();
                            break;
                        case 9:
                            i.notice = e.string();
                            break;
                        case 11:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 12:
                            i.owner = e.int64();
                            break;
                        case 13:
                            i.sec_owner = e.string();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.ConversationSettingInfo = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.min_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.read_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.mute = 0,
                e.prototype.stick_on_top = 0,
                e.prototype.inbox_type = 0,
                e.prototype.ext = c.emptyObject,
                e.prototype.setting_version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.favorite = 0,
                e.prototype.set_top_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.set_favorite_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.push_status = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.min_index && Object.hasOwnProperty.call(e, "min_index") && t.uint32(32).int64(e.min_index),
                    null != e.read_index && Object.hasOwnProperty.call(e, "read_index") && t.uint32(40).int64(e.read_index),
                    null != e.mute && Object.hasOwnProperty.call(e, "mute") && t.uint32(48).int32(e.mute),
                    null != e.stick_on_top && Object.hasOwnProperty.call(e, "stick_on_top") && t.uint32(56).int32(e.stick_on_top),
                    null != e.inbox_type && Object.hasOwnProperty.call(e, "inbox_type") && t.uint32(64).int32(e.inbox_type),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(74).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return null != e.setting_version && Object.hasOwnProperty.call(e, "setting_version") && t.uint32(80).int64(e.setting_version),
                    null != e.favorite && Object.hasOwnProperty.call(e, "favorite") && t.uint32(88).int32(e.favorite),
                    null != e.set_top_time && Object.hasOwnProperty.call(e, "set_top_time") && t.uint32(96).int64(e.set_top_time),
                    null != e.set_favorite_time && Object.hasOwnProperty.call(e, "set_favorite_time") && t.uint32(104).int64(e.set_favorite_time),
                    null != e.push_status && Object.hasOwnProperty.call(e, "push_status") && t.uint32(240).int32(e.push_status),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.ConversationSettingInfo; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.min_index = e.int64();
                            break;
                        case 5:
                            i.read_index = e.int64();
                            break;
                        case 6:
                            i.mute = e.int32();
                            break;
                        case 7:
                            i.stick_on_top = e.int32();
                            break;
                        case 8:
                            i.inbox_type = e.int32();
                            break;
                        case 9:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 10:
                            i.setting_version = e.int64();
                            break;
                        case 11:
                            i.favorite = e.int32();
                            break;
                        case 12:
                            i.set_top_time = e.int64();
                            break;
                        case 13:
                            i.set_favorite_time = e.int64();
                            break;
                        case 30:
                            i.push_status = e.int32();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.MessagesPerUserRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = 50,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(8).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).int32(e.limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesPerUserRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.cursor = e.int64();
                            break;
                        case 2:
                            o.limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessagesPerUserResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    this.conversation_badge_count = [],
                    this.hasmore_message_conv_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.has_more = !1,
                e.prototype.next_interval = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.next_conversation_version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_badge_count = c.emptyArray,
                e.prototype.next_cmd_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.hasmore_message_conv_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(10).fork()).ldelim();
                    if (null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(16).int64(e.next_cursor),
                    null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(24).bool(e.has_more),
                    null != e.next_interval && Object.hasOwnProperty.call(e, "next_interval") && t.uint32(32).int64(e.next_interval),
                    null != e.next_conversation_version && Object.hasOwnProperty.call(e, "next_conversation_version") && t.uint32(40).int64(e.next_conversation_version),
                    null != e.conversation_badge_count && e.conversation_badge_count.length)
                        for (n = 0; n < e.conversation_badge_count.length; ++n)
                            l.im_proto.ConversationBadgeCountInfo.encode(e.conversation_badge_count[n], t.uint32(50).fork()).ldelim();
                    if (null != e.next_cmd_index && Object.hasOwnProperty.call(e, "next_cmd_index") && t.uint32(56).int64(e.next_cmd_index),
                    null != e.hasmore_message_conv_list && e.hasmore_message_conv_list.length)
                        for (n = 0; n < e.hasmore_message_conv_list.length; ++n)
                            t.uint32(64).int64(e.hasmore_message_conv_list[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesPerUserResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.next_cursor = e.int64();
                            break;
                        case 3:
                            o.has_more = e.bool();
                            break;
                        case 4:
                            o.next_interval = e.int64();
                            break;
                        case 5:
                            o.next_conversation_version = e.int64();
                            break;
                        case 6:
                            o.conversation_badge_count && o.conversation_badge_count.length || (o.conversation_badge_count = []),
                            o.conversation_badge_count.push(l.im_proto.ConversationBadgeCountInfo.decode(e, e.uint32()));
                            break;
                        case 7:
                            o.next_cmd_index = e.int64();
                            break;
                        case 8:
                            if (o.hasmore_message_conv_list && o.hasmore_message_conv_list.length || (o.hasmore_message_conv_list = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.hasmore_message_conv_list.push(e.int64());
                            else
                                o.hasmore_message_conv_list.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationBadgeCountInfo = function() {
                function e(e) {
                    if (this.mute_badge_count_infos = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.badge_count = 0,
                e.prototype.conversation_index_v2 = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_id = "",
                e.prototype.mute_badge_count_infos = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    t.uint32(8).int64(e.conversation_short_id),
                    t.uint32(16).int32(e.badge_count),
                    t.uint32(24).int64(e.conversation_index_v2),
                    t.uint32(34).string(e.conversation_id),
                    null != e.mute_badge_count_infos && e.mute_badge_count_infos.length)
                        for (var n = 0; n < e.mute_badge_count_infos.length; ++n)
                            l.im_proto.MuteBadgeCountInfo.encode(e.mute_badge_count_infos[n], t.uint32(42).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationBadgeCountInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.badge_count = e.int32();
                            break;
                        case 3:
                            o.conversation_index_v2 = e.int64();
                            break;
                        case 4:
                            o.conversation_id = e.string();
                            break;
                        case 5:
                            o.mute_badge_count_infos && o.mute_badge_count_infos.length || (o.mute_badge_count_infos = []),
                            o.mute_badge_count_infos.push(l.im_proto.MuteBadgeCountInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("conversation_short_id"))
                        throw c.ProtocolError("missing required 'conversation_short_id'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("badge_count"))
                        throw c.ProtocolError("missing required 'badge_count'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("conversation_index_v2"))
                        throw c.ProtocolError("missing required 'conversation_index_v2'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("conversation_id"))
                        throw c.ProtocolError("missing required 'conversation_id'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.MessagesPerUserInitV2RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.new_user = 0,
                e.prototype.init_sub_type = 0,
                e.prototype.conv_limit = 0,
                e.prototype.msg_limit = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(8).int64(e.cursor),
                    null != e.new_user && Object.hasOwnProperty.call(e, "new_user") && t.uint32(16).int32(e.new_user),
                    null != e.init_sub_type && Object.hasOwnProperty.call(e, "init_sub_type") && t.uint32(24).int32(e.init_sub_type),
                    null != e.conv_limit && Object.hasOwnProperty.call(e, "conv_limit") && t.uint32(32).int32(e.conv_limit),
                    null != e.msg_limit && Object.hasOwnProperty.call(e, "msg_limit") && t.uint32(40).int32(e.msg_limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesPerUserInitV2RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.cursor = e.int64();
                            break;
                        case 2:
                            o.new_user = e.int32();
                            break;
                        case 3:
                            o.init_sub_type = e.int32();
                            break;
                        case 4:
                            o.conv_limit = e.int32();
                            break;
                        case 5:
                            o.msg_limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessagesPerUserInitV2ResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    this.conversations = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.prototype.conversations = c.emptyArray,
                e.prototype.per_user_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.has_more = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(10).fork()).ldelim();
                    if (null != e.conversations && e.conversations.length)
                        for (n = 0; n < e.conversations.length; ++n)
                            l.im_proto.ConversationInfoV2.encode(e.conversations[n], t.uint32(18).fork()).ldelim();
                    return null != e.per_user_cursor && Object.hasOwnProperty.call(e, "per_user_cursor") && t.uint32(24).int64(e.per_user_cursor),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(32).int64(e.next_cursor),
                    null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(40).bool(e.has_more),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesPerUserInitV2ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.conversations && o.conversations.length || (o.conversations = []),
                            o.conversations.push(l.im_proto.ConversationInfoV2.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.per_user_cursor = e.int64();
                            break;
                        case 4:
                            o.next_cursor = e.int64();
                            break;
                        case 5:
                            o.has_more = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessageDirection = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "OLDER"] = 1,
                t[e[2] = "NEWER"] = 2,
                t[e[3] = "FROM_LATEST"] = 3,
                t
            }(),
            e.MessagesInConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.direction = 1,
                e.prototype.anchor_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = 50,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.direction && Object.hasOwnProperty.call(e, "direction") && t.uint32(32).int32(e.direction),
                    null != e.anchor_index && Object.hasOwnProperty.call(e, "anchor_index") && t.uint32(40).int64(e.anchor_index),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(48).int32(e.limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesInConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.direction = e.int32();
                            break;
                        case 5:
                            o.anchor_index = e.int64();
                            break;
                        case 6:
                            o.limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessagesInConversationResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.has_more = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(10).fork()).ldelim();
                    return null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(16).int64(e.next_cursor),
                    null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(24).bool(e.has_more),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesInConversationResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.next_cursor = e.int64();
                            break;
                        case 3:
                            o.has_more = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.CreateConversationV2RequestBody = function() {
                function e(e) {
                    if (this.participants = [],
                    this.biz_ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_type = 0,
                e.prototype.participants = c.emptyArray,
                e.prototype.persistent = !1,
                e.prototype.idempotent_id = "",
                e.prototype.name = "",
                e.prototype.avatar_url = "",
                e.prototype.description = "",
                e.prototype.biz_ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(8).int32(e.conversation_type),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            t.uint32(16).int64(e.participants[n]);
                    if (null != e.persistent && Object.hasOwnProperty.call(e, "persistent") && t.uint32(24).bool(e.persistent),
                    null != e.idempotent_id && Object.hasOwnProperty.call(e, "idempotent_id") && t.uint32(34).string(e.idempotent_id),
                    null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(50).string(e.name),
                    null != e.avatar_url && Object.hasOwnProperty.call(e, "avatar_url") && t.uint32(58).string(e.avatar_url),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(66).string(e.description),
                    null != e.biz_ext && Object.hasOwnProperty.call(e, "biz_ext")) {
                        var o = Object.keys(e.biz_ext);
                        for (n = 0; n < o.length; ++n)
                            t.uint32(90).fork().uint32(10).string(o[n]).uint32(18).string(e.biz_ext[o[n]]).ldelim()
                    }
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.CreateConversationV2RequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_type = e.int32();
                            break;
                        case 2:
                            if (i.participants && i.participants.length || (i.participants = []),
                            2 == (7 & a))
                                for (var d = e.uint32() + e.pos; e.pos < d; )
                                    i.participants.push(e.int64());
                            else
                                i.participants.push(e.int64());
                            break;
                        case 3:
                            i.persistent = e.bool();
                            break;
                        case 4:
                            i.idempotent_id = e.string();
                            break;
                        case 6:
                            i.name = e.string();
                            break;
                        case 7:
                            i.avatar_url = e.string();
                            break;
                        case 8:
                            i.description = e.string();
                            break;
                        case 11:
                            for (i.biz_ext === c.emptyObject && (i.biz_ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.biz_ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.CreateConversationV2ResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation = null,
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.extra_info = "",
                e.prototype.status = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation && Object.hasOwnProperty.call(e, "conversation") && l.im_proto.ConversationInfoV2.encode(e.conversation, t.uint32(10).fork()).ldelim(),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(16).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(26).string(e.check_message),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(34).string(e.extra_info),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(40).int32(e.status),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.CreateConversationV2ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation = l.im_proto.ConversationInfoV2.decode(e, e.uint32());
                            break;
                        case 2:
                            o.check_code = e.int64();
                            break;
                        case 3:
                            o.check_message = e.string();
                            break;
                        case 4:
                            o.extra_info = e.string();
                            break;
                        case 5:
                            o.status = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UserActionType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "ENTER_CONVERSATION"] = 1,
                t[e[2] = "EXIT_CONVERSATION"] = 2,
                t
            }(),
            e.SendUserActionRequestBody = function() {
                function e(e) {
                    if (this.extra = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.action_type = 1,
                e.prototype.extra = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.action_type && Object.hasOwnProperty.call(e, "action_type") && t.uint32(32).int32(e.action_type),
                    null != e.extra && Object.hasOwnProperty.call(e, "extra"))
                        for (var n = Object.keys(e.extra), o = 0; o < n.length; ++o)
                            t.uint32(42).fork().uint32(10).string(n[o]).uint32(18).string(e.extra[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.SendUserActionRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 3:
                            i.conversation_short_id = e.int64();
                            break;
                        case 4:
                            i.action_type = e.int32();
                            break;
                        case 5:
                            i.extra === c.emptyObject && (i.extra = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.extra[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.InputStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[3] = "TYPING"] = 3,
                t[e[4] = "CLEAR_INPUT"] = 4,
                t
            }(),
            e.SendInputStatusRequestBody = function() {
                function e(e) {
                    if (this.extra = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.status = 3,
                e.prototype.extra = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(32).int32(e.status),
                    null != e.extra && Object.hasOwnProperty.call(e, "extra"))
                        for (var n = Object.keys(e.extra), o = 0; o < n.length; ++o)
                            t.uint32(42).fork().uint32(10).string(n[o]).uint32(18).string(e.extra[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.SendInputStatusRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 3:
                            i.conversation_short_id = e.int64();
                            break;
                        case 4:
                            i.status = e.int32();
                            break;
                        case 5:
                            i.extra === c.emptyObject && (i.extra = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.extra[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.DeleteConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.last_message_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.last_message_index && Object.hasOwnProperty.call(e, "last_message_index") && t.uint32(32).int64(e.last_message_index),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.DeleteConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.last_message_index = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.DissolveConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.DissolveConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.DeleteMessageRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.message_id && Object.hasOwnProperty.call(e, "message_id") && t.uint32(32).int64(e.message_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.DeleteMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.message_id = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkConversationReadRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.read_message_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conv_unread_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.total_unread_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.read_message_index && Object.hasOwnProperty.call(e, "read_message_index") && t.uint32(32).int64(e.read_message_index),
                    null != e.conv_unread_count && Object.hasOwnProperty.call(e, "conv_unread_count") && t.uint32(40).int64(e.conv_unread_count),
                    null != e.total_unread_count && Object.hasOwnProperty.call(e, "total_unread_count") && t.uint32(48).int64(e.total_unread_count),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkConversationReadRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.read_message_index = e.int64();
                            break;
                        case 5:
                            o.conv_unread_count = e.int64();
                            break;
                        case 6:
                            o.total_unread_count = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationParticipantsReadIndexV3RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.conversation_id = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(26).string(e.conversation_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationParticipantsReadIndexV3RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_id = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationParticipantsReadIndexV3ResponseBody = function() {
                function e(e) {
                    if (this.indexes = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.indexes = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.indexes && e.indexes.length)
                        for (var n = 0; n < e.indexes.length; ++n)
                            l.im_proto.ParticipantReadIndex.encode(e.indexes[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationParticipantsReadIndexV3ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.indexes && o.indexes.length || (o.indexes = []),
                        o.indexes.push(l.im_proto.ParticipantReadIndex.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ParticipantReadIndex = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_uid = "",
                e.prototype.index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.index_v2 = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.index_min = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(8).int64(e.user_id),
                    null != e.sec_uid && Object.hasOwnProperty.call(e, "sec_uid") && t.uint32(18).string(e.sec_uid),
                    null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(24).int64(e.index),
                    null != e.index_v2 && Object.hasOwnProperty.call(e, "index_v2") && t.uint32(32).int64(e.index_v2),
                    null != e.index_min && Object.hasOwnProperty.call(e, "index_min") && t.uint32(40).int64(e.index_min),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ParticipantReadIndex; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.user_id = e.int64();
                            break;
                        case 2:
                            o.sec_uid = e.string();
                            break;
                        case 3:
                            o.index = e.int64();
                            break;
                        case 4:
                            o.index_v2 = e.int64();
                            break;
                        case 5:
                            o.index_min = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BatchGetConversationParticipantsReadIndexRequestBody = function() {
                function e(e) {
                    if (this.conversation_id = [],
                    this.conversation_short_id = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = c.emptyArray,
                e.prototype.conversation_short_id = c.emptyArray,
                e.prototype.request_from = "",
                e.prototype.min_index_required = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && e.conversation_id.length)
                        for (var n = 0; n < e.conversation_id.length; ++n)
                            t.uint32(10).string(e.conversation_id[n]);
                    if (null != e.conversation_short_id && e.conversation_short_id.length)
                        for (n = 0; n < e.conversation_short_id.length; ++n)
                            t.uint32(16).int64(e.conversation_short_id[n]);
                    return null != e.request_from && Object.hasOwnProperty.call(e, "request_from") && t.uint32(26).string(e.request_from),
                    null != e.min_index_required && Object.hasOwnProperty.call(e, "min_index_required") && t.uint32(32).bool(e.min_index_required),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BatchGetConversationParticipantsReadIndexRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id && o.conversation_id.length || (o.conversation_id = []),
                            o.conversation_id.push(e.string());
                            break;
                        case 2:
                            if (o.conversation_short_id && o.conversation_short_id.length || (o.conversation_short_id = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.conversation_short_id.push(e.int64());
                            else
                                o.conversation_short_id.push(e.int64());
                            break;
                        case 3:
                            o.request_from = e.string();
                            break;
                        case 4:
                            o.min_index_required = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BatchGetConversationParticipantsReadIndexResponseBody = function() {
                function e(e) {
                    if (this.conversationParticipantsReadIndex = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversationParticipantsReadIndex = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversationParticipantsReadIndex && e.conversationParticipantsReadIndex.length)
                        for (var n = 0; n < e.conversationParticipantsReadIndex.length; ++n)
                            l.im_proto.ConversationParticipantReadIndex.encode(e.conversationParticipantsReadIndex[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BatchGetConversationParticipantsReadIndexResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.conversationParticipantsReadIndex && o.conversationParticipantsReadIndex.length || (o.conversationParticipantsReadIndex = []),
                        o.conversationParticipantsReadIndex.push(l.im_proto.ConversationParticipantReadIndex.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationParticipantReadIndex = function() {
                function e(e) {
                    if (this.participantReadIndex = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.participantReadIndex = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.participantReadIndex && e.participantReadIndex.length)
                        for (var n = 0; n < e.participantReadIndex.length; ++n)
                            l.im_proto.ParticipantReadIndex.encode(e.participantReadIndex[n], t.uint32(26).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationParticipantReadIndex; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.participantReadIndex && o.participantReadIndex.length || (o.participantReadIndex = []),
                            o.participantReadIndex.push(l.im_proto.ParticipantReadIndex.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationParticipantsMinIndexV3RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.conversation_id = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(26).string(e.conversation_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationParticipantsMinIndexV3RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_id = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationParticipantsMinIndexV3ResponseBody = function() {
                function e(e) {
                    if (this.indexes = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.indexes = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.indexes && e.indexes.length)
                        for (var n = 0; n < e.indexes.length; ++n)
                            l.im_proto.ParticipantMinIndex.encode(e.indexes[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationParticipantsMinIndexV3ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.indexes && o.indexes.length || (o.indexes = []),
                        o.indexes.push(l.im_proto.ParticipantMinIndex.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ParticipantMinIndex = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_uid = "",
                e.prototype.index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(8).int64(e.user_id),
                    null != e.sec_uid && Object.hasOwnProperty.call(e, "sec_uid") && t.uint32(18).string(e.sec_uid),
                    null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(24).int64(e.index),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ParticipantMinIndex; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.user_id = e.int64();
                            break;
                        case 2:
                            o.sec_uid = e.string();
                            break;
                        case 3:
                            o.index = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SendMessageRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    this.mentioned_users = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.content = "",
                e.prototype.ext = c.emptyObject,
                e.prototype.message_type = 0,
                e.prototype.ticket = "",
                e.prototype.client_message_id = "",
                e.prototype.mentioned_users = c.emptyArray,
                e.prototype.ref_msg_info = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(34).string(e.content),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(42).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    if (null != e.message_type && Object.hasOwnProperty.call(e, "message_type") && t.uint32(48).int32(e.message_type),
                    null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(58).string(e.ticket),
                    null != e.client_message_id && Object.hasOwnProperty.call(e, "client_message_id") && t.uint32(66).string(e.client_message_id),
                    null != e.mentioned_users && e.mentioned_users.length)
                        for (o = 0; o < e.mentioned_users.length; ++o)
                            t.uint32(72).int64(e.mentioned_users[o]);
                    return null != e.ref_msg_info && Object.hasOwnProperty.call(e, "ref_msg_info") && l.im_proto.ReferencedMessageInfo.encode(e.ref_msg_info, t.uint32(90).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.SendMessageRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 3:
                            i.conversation_short_id = e.int64();
                            break;
                        case 4:
                            i.content = e.string();
                            break;
                        case 5:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 6:
                            i.message_type = e.int32();
                            break;
                        case 7:
                            i.ticket = e.string();
                            break;
                        case 8:
                            i.client_message_id = e.string();
                            break;
                        case 9:
                            if (i.mentioned_users && i.mentioned_users.length || (i.mentioned_users = []),
                            2 == (7 & a))
                                for (d = e.uint32() + e.pos; e.pos < d; )
                                    i.mentioned_users.push(e.int64());
                            else
                                i.mentioned_users.push(e.int64());
                            break;
                        case 11:
                            i.ref_msg_info = l.im_proto.ReferencedMessageInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.ReferencedMessageInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.referenced_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.hint = "",
                e.prototype.root_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.root_message_conv_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(8).int64(e.referenced_message_id),
                    t.uint32(18).string(e.hint),
                    null != e.root_message_id && Object.hasOwnProperty.call(e, "root_message_id") && t.uint32(24).int64(e.root_message_id),
                    null != e.root_message_conv_index && Object.hasOwnProperty.call(e, "root_message_conv_index") && t.uint32(32).int64(e.root_message_conv_index),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ReferencedMessageInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.referenced_message_id = e.int64();
                            break;
                        case 2:
                            o.hint = e.string();
                            break;
                        case 3:
                            o.root_message_id = e.int64();
                            break;
                        case 4:
                            o.root_message_conv_index = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("referenced_message_id"))
                        throw c.ProtocolError("missing required 'referenced_message_id'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("hint"))
                        throw c.ProtocolError("missing required 'hint'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.SendMessageResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.extra_info = "",
                e.prototype.status = 0,
                e.prototype.client_message_id = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(8).int64(e.server_message_id),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(18).string(e.extra_info),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).int32(e.status),
                    null != e.client_message_id && Object.hasOwnProperty.call(e, "client_message_id") && t.uint32(34).string(e.client_message_id),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(40).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(50).string(e.check_message),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SendMessageResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.server_message_id = e.int64();
                            break;
                        case 2:
                            o.extra_info = e.string();
                            break;
                        case 3:
                            o.status = e.int32();
                            break;
                        case 4:
                            o.client_message_id = e.string();
                            break;
                        case 5:
                            o.check_code = e.int64();
                            break;
                        case 6:
                            o.check_message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.NewMessageNotifyType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "PER_USER"] = 1,
                t[e[2] = "PER_CONVERSATION"] = 2,
                t
            }(),
            e.NewMessageNotify = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.notify_type = 1,
                e.prototype.message = null,
                e.prototype.previous_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.index_in_conversation = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.ref_msg_info = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(18).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.notify_type && Object.hasOwnProperty.call(e, "notify_type") && t.uint32(32).int32(e.notify_type),
                    null != e.message && Object.hasOwnProperty.call(e, "message") && l.im_proto.MessageBody.encode(e.message, t.uint32(42).fork()).ldelim(),
                    null != e.previous_cursor && Object.hasOwnProperty.call(e, "previous_cursor") && t.uint32(48).int64(e.previous_cursor),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(56).int64(e.next_cursor),
                    null != e.index_in_conversation && Object.hasOwnProperty.call(e, "index_in_conversation") && t.uint32(64).int64(e.index_in_conversation),
                    null != e.ref_msg_info && Object.hasOwnProperty.call(e, "ref_msg_info") && l.im_proto.ReferenceInfo.encode(e.ref_msg_info, t.uint32(122).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.NewMessageNotify; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 2:
                            o.conversation_id = e.string();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.notify_type = e.int32();
                            break;
                        case 5:
                            o.message = l.im_proto.MessageBody.decode(e, e.uint32());
                            break;
                        case 6:
                            o.previous_cursor = e.int64();
                            break;
                        case 7:
                            o.next_cursor = e.int64();
                            break;
                        case 8:
                            o.index_in_conversation = e.int64();
                            break;
                        case 15:
                            o.ref_msg_info = l.im_proto.ReferenceInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationsPerUserByFavoriteV2RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = 500,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(8).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).int32(e.limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationsPerUserByFavoriteV2RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.cursor = e.int64();
                            break;
                        case 2:
                            o.limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationsPerUserByTopV2RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = 500,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(8).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).int32(e.limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationsPerUserByTopV2RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.cursor = e.int64();
                            break;
                        case 2:
                            o.limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationInfoV2RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationInfoV2RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationInfoListV2RequestBody = function() {
                function e(e) {
                    if (this.conversation_info_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_info_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_info_list && e.conversation_info_list.length)
                        for (var n = 0; n < e.conversation_info_list.length; ++n)
                            l.im_proto.GetConversationInfoV2RequestBody.encode(e.conversation_info_list[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationInfoListV2RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.conversation_info_list && o.conversation_info_list.length || (o.conversation_info_list = []),
                        o.conversation_info_list.push(l.im_proto.GetConversationInfoV2RequestBody.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationInfoListV2ResponseBody = function() {
                function e(e) {
                    if (this.conversation_info_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_info_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_info_list && e.conversation_info_list.length)
                        for (var n = 0; n < e.conversation_info_list.length; ++n)
                            l.im_proto.ConversationInfoV2.encode(e.conversation_info_list[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationInfoListV2ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.conversation_info_list && o.conversation_info_list.length || (o.conversation_info_list = []),
                        o.conversation_info_list.push(l.im_proto.ConversationInfoV2.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationInfoListByFavoriteV2ResponseBody = function() {
                function e(e) {
                    if (this.conversation_info_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_info_list = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_info_list && e.conversation_info_list.length)
                        for (var n = 0; n < e.conversation_info_list.length; ++n)
                            l.im_proto.ConversationInfoV2.encode(e.conversation_info_list[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(24).int64(e.next_cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationInfoListByFavoriteV2ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_info_list && o.conversation_info_list.length || (o.conversation_info_list = []),
                            o.conversation_info_list.push(l.im_proto.ConversationInfoV2.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationInfoListByTopV2ResponseBody = function() {
                function e(e) {
                    if (this.conversation_info_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_info_list = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_info_list && e.conversation_info_list.length)
                        for (var n = 0; n < e.conversation_info_list.length; ++n)
                            l.im_proto.ConversationInfoV2.encode(e.conversation_info_list[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(24).int64(e.next_cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationInfoListByTopV2ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_info_list && o.conversation_info_list.length || (o.conversation_info_list = []),
                            o.conversation_info_list.push(l.im_proto.ConversationInfoV2.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.RecallMessageRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(32).int64(e.server_message_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.RecallMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.server_message_id = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationAddParticipantsRequestBody = function() {
                function e(e) {
                    if (this.participants = [],
                    this.biz_ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.participants = c.emptyArray,
                e.prototype.biz_ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            t.uint32(32).int64(e.participants[n]);
                    if (null != e.biz_ext && Object.hasOwnProperty.call(e, "biz_ext")) {
                        var o = Object.keys(e.biz_ext);
                        for (n = 0; n < o.length; ++n)
                            t.uint32(42).fork().uint32(10).string(o[n]).uint32(18).string(e.biz_ext[o[n]]).ldelim()
                    }
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.ConversationAddParticipantsRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            if (i.participants && i.participants.length || (i.participants = []),
                            2 == (7 & a))
                                for (var d = e.uint32() + e.pos; e.pos < d; )
                                    i.participants.push(e.int64());
                            else
                                i.participants.push(e.int64());
                            break;
                        case 5:
                            for (i.biz_ext === c.emptyObject && (i.biz_ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.biz_ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.SecUidPair = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.uid = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_uid = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).int64(e.uid),
                    null != e.sec_uid && Object.hasOwnProperty.call(e, "sec_uid") && t.uint32(18).string(e.sec_uid),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SecUidPair; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.uid = e.int64();
                            break;
                        case 2:
                            o.sec_uid = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationAddParticipantsResponseBody = function() {
                function e(e) {
                    if (this.success_participants = [],
                    this.failed_participants = [],
                    this.sec_success_participants = [],
                    this.sec_failed_participants = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.success_participants = c.emptyArray,
                e.prototype.failed_participants = c.emptyArray,
                e.prototype.status = 0,
                e.prototype.extra_info = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.sec_success_participants = c.emptyArray,
                e.prototype.sec_failed_participants = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.success_participants && e.success_participants.length)
                        for (var n = 0; n < e.success_participants.length; ++n)
                            t.uint32(8).int64(e.success_participants[n]);
                    if (null != e.failed_participants && e.failed_participants.length)
                        for (n = 0; n < e.failed_participants.length; ++n)
                            t.uint32(16).int64(e.failed_participants[n]);
                    if (null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).int32(e.status),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(34).string(e.extra_info),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(40).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(50).string(e.check_message),
                    null != e.sec_success_participants && e.sec_success_participants.length)
                        for (n = 0; n < e.sec_success_participants.length; ++n)
                            l.im_proto.SecUidPair.encode(e.sec_success_participants[n], t.uint32(58).fork()).ldelim();
                    if (null != e.sec_failed_participants && e.sec_failed_participants.length)
                        for (n = 0; n < e.sec_failed_participants.length; ++n)
                            l.im_proto.SecUidPair.encode(e.sec_failed_participants[n], t.uint32(66).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationAddParticipantsResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            if (o.success_participants && o.success_participants.length || (o.success_participants = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.success_participants.push(e.int64());
                            else
                                o.success_participants.push(e.int64());
                            break;
                        case 2:
                            if (o.failed_participants && o.failed_participants.length || (o.failed_participants = []),
                            2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_participants.push(e.int64());
                            else
                                o.failed_participants.push(e.int64());
                            break;
                        case 3:
                            o.status = e.int32();
                            break;
                        case 4:
                            o.extra_info = e.string();
                            break;
                        case 5:
                            o.check_code = e.int64();
                            break;
                        case 6:
                            o.check_message = e.string();
                            break;
                        case 7:
                            o.sec_success_participants && o.sec_success_participants.length || (o.sec_success_participants = []),
                            o.sec_success_participants.push(l.im_proto.SecUidPair.decode(e, e.uint32()));
                            break;
                        case 8:
                            o.sec_failed_participants && o.sec_failed_participants.length || (o.sec_failed_participants = []),
                            o.sec_failed_participants.push(l.im_proto.SecUidPair.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationRemoveParticipantsRequestBody = function() {
                function e(e) {
                    if (this.participants = [],
                    this.biz_ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.participants = c.emptyArray,
                e.prototype.biz_ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            t.uint32(32).int64(e.participants[n]);
                    if (null != e.biz_ext && Object.hasOwnProperty.call(e, "biz_ext")) {
                        var o = Object.keys(e.biz_ext);
                        for (n = 0; n < o.length; ++n)
                            t.uint32(42).fork().uint32(10).string(o[n]).uint32(18).string(e.biz_ext[o[n]]).ldelim()
                    }
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.ConversationRemoveParticipantsRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            if (i.participants && i.participants.length || (i.participants = []),
                            2 == (7 & a))
                                for (var d = e.uint32() + e.pos; e.pos < d; )
                                    i.participants.push(e.int64());
                            else
                                i.participants.push(e.int64());
                            break;
                        case 5:
                            for (i.biz_ext === c.emptyObject && (i.biz_ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.biz_ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.ConversationRemoveParticipantsResponseBody = function() {
                function e(e) {
                    if (this.failed_participants = [],
                    this.failed_sec_participants = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.failed_participants = c.emptyArray,
                e.prototype.status = 0,
                e.prototype.extra_info = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.failed_sec_participants = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.failed_participants && e.failed_participants.length)
                        for (var n = 0; n < e.failed_participants.length; ++n)
                            t.uint32(8).int64(e.failed_participants[n]);
                    if (null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(26).string(e.extra_info),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(32).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(42).string(e.check_message),
                    null != e.failed_sec_participants && e.failed_sec_participants.length)
                        for (n = 0; n < e.failed_sec_participants.length; ++n)
                            l.im_proto.SecUidPair.encode(e.failed_sec_participants[n], t.uint32(50).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationRemoveParticipantsResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            if (o.failed_participants && o.failed_participants.length || (o.failed_participants = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_participants.push(e.int64());
                            else
                                o.failed_participants.push(e.int64());
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.extra_info = e.string();
                            break;
                        case 4:
                            o.check_code = e.int64();
                            break;
                        case 5:
                            o.check_message = e.string();
                            break;
                        case 6:
                            o.failed_sec_participants && o.failed_sec_participants.length || (o.failed_sec_participants = []),
                            o.failed_sec_participants.push(l.im_proto.SecUidPair.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationLeaveRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationLeaveRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationParticipantsListRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = 100,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(32).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(40).int32(e.limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationParticipantsListRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.cursor = e.int64();
                            break;
                        case 5:
                            o.limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationParticipantsListResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.participants_page = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.participants_page && Object.hasOwnProperty.call(e, "participants_page") && l.im_proto.ParticipantsPage.encode(e.participants_page, t.uint32(10).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationParticipantsListResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.participants_page = l.im_proto.ParticipantsPage.decode(e, e.uint32()) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.MgetConversationParticipantsRequestBody = function() {
                function e(e) {
                    if (this.participants = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.participants = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            t.uint32(32).int64(e.participants[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MgetConversationParticipantsRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            if (o.participants && o.participants.length || (o.participants = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.participants.push(e.int64());
                            else
                                o.participants.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MgetConversationParticipantsResponseBody = function() {
                function e(e) {
                    if (this.participants = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.participants = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            l.im_proto.Participant.encode(e.participants[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MgetConversationParticipantsResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.participants && o.participants.length || (o.participants = []),
                        o.participants.push(l.im_proto.Participant.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.UpdateConversationParticipantRequestBody = function() {
                function e(e) {
                    if (this.biz_ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.role = 0,
                e.prototype.alias = "",
                e.prototype.is_alias_set = !1,
                e.prototype.biz_ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(32).int64(e.user_id),
                    null != e.role && Object.hasOwnProperty.call(e, "role") && t.uint32(40).int32(e.role),
                    null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(50).string(e.alias),
                    null != e.is_alias_set && Object.hasOwnProperty.call(e, "is_alias_set") && t.uint32(56).bool(e.is_alias_set),
                    null != e.biz_ext && Object.hasOwnProperty.call(e, "biz_ext"))
                        for (var n = Object.keys(e.biz_ext), o = 0; o < n.length; ++o)
                            t.uint32(90).fork().uint32(10).string(n[o]).uint32(18).string(e.biz_ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.UpdateConversationParticipantRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.user_id = e.int64();
                            break;
                        case 5:
                            i.role = e.int32();
                            break;
                        case 6:
                            i.alias = e.string();
                            break;
                        case 7:
                            i.is_alias_set = e.bool();
                            break;
                        case 11:
                            i.biz_ext === c.emptyObject && (i.biz_ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.biz_ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.UpdateConversationParticipantResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.participant = null,
                e.prototype.status = 0,
                e.prototype.extra_info = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.participant && Object.hasOwnProperty.call(e, "participant") && l.im_proto.Participant.encode(e.participant, t.uint32(10).fork()).ldelim(),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(26).string(e.extra_info),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(32).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(42).string(e.check_message),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UpdateConversationParticipantResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.participant = l.im_proto.Participant.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.extra_info = e.string();
                            break;
                        case 4:
                            o.check_code = e.int64();
                            break;
                        case 5:
                            o.check_message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationCoreInfoRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationCoreInfoRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationCoreInfoResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_core_info = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_core_info && Object.hasOwnProperty.call(e, "conversation_core_info") && l.im_proto.ConversationCoreInfo.encode(e.conversation_core_info, t.uint32(10).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationCoreInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.conversation_core_info = l.im_proto.ConversationCoreInfo.decode(e, e.uint32()) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.SetConversationCoreInfoRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    this.biz_ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.name = "",
                e.prototype.desc = "",
                e.prototype.icon = "",
                e.prototype.notice = "",
                e.prototype.is_name_set = !1,
                e.prototype.is_desc_set = !1,
                e.prototype.is_icon_set = !1,
                e.prototype.is_notice_set = !1,
                e.prototype.ext = c.emptyObject,
                e.prototype.biz_ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(34).string(e.name),
                    null != e.desc && Object.hasOwnProperty.call(e, "desc") && t.uint32(42).string(e.desc),
                    null != e.icon && Object.hasOwnProperty.call(e, "icon") && t.uint32(50).string(e.icon),
                    null != e.notice && Object.hasOwnProperty.call(e, "notice") && t.uint32(58).string(e.notice),
                    null != e.is_name_set && Object.hasOwnProperty.call(e, "is_name_set") && t.uint32(64).bool(e.is_name_set),
                    null != e.is_desc_set && Object.hasOwnProperty.call(e, "is_desc_set") && t.uint32(72).bool(e.is_desc_set),
                    null != e.is_icon_set && Object.hasOwnProperty.call(e, "is_icon_set") && t.uint32(80).bool(e.is_icon_set),
                    null != e.is_notice_set && Object.hasOwnProperty.call(e, "is_notice_set") && t.uint32(88).bool(e.is_notice_set),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(98).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    if (null != e.biz_ext && Object.hasOwnProperty.call(e, "biz_ext"))
                        for (n = Object.keys(e.biz_ext),
                        o = 0; o < n.length; ++o)
                            t.uint32(186).fork().uint32(10).string(n[o]).uint32(18).string(e.biz_ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.SetConversationCoreInfoRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.name = e.string();
                            break;
                        case 5:
                            i.desc = e.string();
                            break;
                        case 6:
                            i.icon = e.string();
                            break;
                        case 7:
                            i.notice = e.string();
                            break;
                        case 8:
                            i.is_name_set = e.bool();
                            break;
                        case 9:
                            i.is_desc_set = e.bool();
                            break;
                        case 10:
                            i.is_icon_set = e.bool();
                            break;
                        case 11:
                            i.is_notice_set = e.bool();
                            break;
                        case 12:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; )
                                switch ((u = e.uint32()) >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            i.ext[n] = o;
                            break;
                        case 23:
                            for (i.biz_ext === c.emptyObject && (i.biz_ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u;
                                switch ((u = e.uint32()) >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.biz_ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.SetConversationCoreInfoResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_core_info = null,
                e.prototype.status = 0,
                e.prototype.extra_info = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_core_info && Object.hasOwnProperty.call(e, "conversation_core_info") && l.im_proto.ConversationCoreInfo.encode(e.conversation_core_info, t.uint32(10).fork()).ldelim(),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(26).string(e.extra_info),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(32).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(42).string(e.check_message),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SetConversationCoreInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_core_info = l.im_proto.ConversationCoreInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.extra_info = e.string();
                            break;
                        case 4:
                            o.check_code = e.int64();
                            break;
                        case 5:
                            o.check_message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UpsertConversationCoreExtInfoRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(34).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.UpsertConversationCoreExtInfoRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.UpsertConversationCoreExtInfoResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.core_info = null,
                e.prototype.status = 0,
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.extra_info = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.core_info && Object.hasOwnProperty.call(e, "core_info") && l.im_proto.ConversationCoreInfo.encode(e.core_info, t.uint32(10).fork()).ldelim(),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(24).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(34).string(e.check_message),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(42).string(e.extra_info),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UpsertConversationCoreExtInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.core_info = l.im_proto.ConversationCoreInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.check_code = e.int64();
                            break;
                        case 4:
                            o.check_message = e.string();
                            break;
                        case 5:
                            o.extra_info = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SetConversationSettingInfoRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.set_stick_on_top = !1,
                e.prototype.set_mute = !1,
                e.prototype.set_favorite = !1,
                e.prototype.push_status = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.set_stick_on_top && Object.hasOwnProperty.call(e, "set_stick_on_top") && t.uint32(32).bool(e.set_stick_on_top),
                    null != e.set_mute && Object.hasOwnProperty.call(e, "set_mute") && t.uint32(40).bool(e.set_mute),
                    null != e.set_favorite && Object.hasOwnProperty.call(e, "set_favorite") && t.uint32(48).bool(e.set_favorite),
                    null != e.push_status && Object.hasOwnProperty.call(e, "push_status") && t.uint32(56).int32(e.push_status),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SetConversationSettingInfoRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.set_stick_on_top = e.bool();
                            break;
                        case 5:
                            o.set_mute = e.bool();
                            break;
                        case 6:
                            o.set_favorite = e.bool();
                            break;
                        case 7:
                            o.push_status = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SetConversationSettingInfoResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.setting_info = null,
                e.prototype.status = 0,
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.extra_info = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.setting_info && Object.hasOwnProperty.call(e, "setting_info") && l.im_proto.ConversationSettingInfo.encode(e.setting_info, t.uint32(10).fork()).ldelim(),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(24).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(34).string(e.check_message),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(42).string(e.extra_info),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SetConversationSettingInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.setting_info = l.im_proto.ConversationSettingInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.check_code = e.int64();
                            break;
                        case 4:
                            o.check_message = e.string();
                            break;
                        case 5:
                            o.extra_info = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UpsertConversationSettingExtInfoRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(34).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.UpsertConversationSettingExtInfoRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_short_id = e.int64();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.UpsertConversationSettingExtInfoResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.setting_info = null,
                e.prototype.status = 0,
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.extra_info = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.setting_info && Object.hasOwnProperty.call(e, "setting_info") && l.im_proto.ConversationSettingInfo.encode(e.setting_info, t.uint32(10).fork()).ldelim(),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(24).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(34).string(e.check_message),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(42).string(e.extra_info),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UpsertConversationSettingExtInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.setting_info = l.im_proto.ConversationSettingInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.check_code = e.int64();
                            break;
                        case 4:
                            o.check_message = e.string();
                            break;
                        case 5:
                            o.extra_info = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.StrangerConversation = function() {
                function e(e) {
                    if (this.participants = [],
                    this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.unread = 0,
                e.prototype.last_message = null,
                e.prototype.conversation_id = "",
                e.prototype.participants = c.emptyArray,
                e.prototype.ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.unread && Object.hasOwnProperty.call(e, "unread") && t.uint32(16).int32(e.unread),
                    null != e.last_message && Object.hasOwnProperty.call(e, "last_message") && l.im_proto.MessageBody.encode(e.last_message, t.uint32(26).fork()).ldelim(),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(34).string(e.conversation_id),
                    null != e.participants && e.participants.length)
                        for (var n = 0; n < e.participants.length; ++n)
                            l.im_proto.Participant.encode(e.participants[n], t.uint32(42).fork()).ldelim();
                    if (null != e.ext && Object.hasOwnProperty.call(e, "ext")) {
                        var o = Object.keys(e.ext);
                        for (n = 0; n < o.length; ++n)
                            t.uint32(58).fork().uint32(10).string(o[n]).uint32(18).string(e.ext[o[n]]).ldelim()
                    }
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.StrangerConversation; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_short_id = e.int64();
                            break;
                        case 2:
                            i.unread = e.int32();
                            break;
                        case 3:
                            i.last_message = l.im_proto.MessageBody.decode(e, e.uint32());
                            break;
                        case 4:
                            i.conversation_id = e.string();
                            break;
                        case 5:
                            i.participants && i.participants.length || (i.participants = []),
                            i.participants.push(l.im_proto.Participant.decode(e, e.uint32()));
                            break;
                        case 7:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.GetStrangerConversationListRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.count = c.Long ? c.Long.fromBits(50, 0, !1) : 50,
                e.prototype.show_total_unread = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(8).int64(e.cursor),
                    null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(16).int64(e.count),
                    null != e.show_total_unread && Object.hasOwnProperty.call(e, "show_total_unread") && t.uint32(24).bool(e.show_total_unread),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetStrangerConversationListRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.cursor = e.int64();
                            break;
                        case 2:
                            o.count = e.int64();
                            break;
                        case 3:
                            o.show_total_unread = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetStrangerConversationListResponseBody = function() {
                function e(e) {
                    if (this.conversation_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.has_more = !1,
                e.prototype.total_unread = 0,
                e.prototype.conversation_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(8).int64(e.next_cursor),
                    null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.total_unread && Object.hasOwnProperty.call(e, "total_unread") && t.uint32(24).int32(e.total_unread),
                    null != e.conversation_list && e.conversation_list.length)
                        for (var n = 0; n < e.conversation_list.length; ++n)
                            l.im_proto.StrangerConversation.encode(e.conversation_list[n], t.uint32(34).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetStrangerConversationListResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.next_cursor = e.int64();
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.total_unread = e.int32();
                            break;
                        case 4:
                            o.conversation_list && o.conversation_list.length || (o.conversation_list = []),
                            o.conversation_list.push(l.im_proto.StrangerConversation.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetStrangerMessagesRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.reset_unread_count = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.reset_unread_count && Object.hasOwnProperty.call(e, "reset_unread_count") && t.uint32(16).bool(e.reset_unread_count),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetStrangerMessagesRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.reset_unread_count = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetStrangerMessagesResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(26).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetStrangerMessagesResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 3 ? (o.messages && o.messages.length || (o.messages = []),
                        o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.DeleteStrangerMessageRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(8).int64(e.server_message_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.DeleteStrangerMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.server_message_id = e.int64();
                            break;
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.DeleteStrangerConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.DeleteStrangerConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.conversation_short_id = e.int64() : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.DeleteStrangerAllConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.DeleteStrangerAllConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkStrangerConversationReadRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkStrangerConversationReadRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.conversation_short_id = e.int64() : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkStrangerAllConversationReadRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkStrangerAllConversationReadRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.OPERATION_TYPE = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "ADD_PROPERTY_ITEM"] = 0,
                t[e[1] = "REMOVE_PROPERTY_ITEM"] = 1,
                t[e[2] = "SET_PROPERTY"] = 2,
                t[e[3] = "DEL_PROPERTY"] = 3,
                t
            }(),
            e.ModifyPropertyContent = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.operation = 0,
                e.prototype.key = "",
                e.prototype.value = "",
                e.prototype.idempotent_id = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.operation && Object.hasOwnProperty.call(e, "operation") && t.uint32(8).int32(e.operation),
                    null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(18).string(e.key),
                    null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(26).string(e.value),
                    null != e.idempotent_id && Object.hasOwnProperty.call(e, "idempotent_id") && t.uint32(34).string(e.idempotent_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ModifyPropertyContent; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.operation = e.int32();
                            break;
                        case 2:
                            o.key = e.string();
                            break;
                        case 3:
                            o.value = e.string();
                            break;
                        case 4:
                            o.idempotent_id = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ModifyPropertyBody = function() {
                function e(e) {
                    if (this.modify_property_content = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.client_message_id = "",
                e.prototype.modify_property_content = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(32).int64(e.server_message_id),
                    null != e.client_message_id && Object.hasOwnProperty.call(e, "client_message_id") && t.uint32(42).string(e.client_message_id),
                    null != e.modify_property_content && e.modify_property_content.length)
                        for (var n = 0; n < e.modify_property_content.length; ++n)
                            l.im_proto.ModifyPropertyContent.encode(e.modify_property_content[n], t.uint32(50).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ModifyPropertyBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.server_message_id = e.int64();
                            break;
                        case 5:
                            o.client_message_id = e.string();
                            break;
                        case 6:
                            o.modify_property_content && o.modify_property_content.length || (o.modify_property_content = []),
                            o.modify_property_content.push(l.im_proto.ModifyPropertyContent.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ModifyMessagePropertyRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.property_list = null,
                e.prototype.ticket = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.property_list && Object.hasOwnProperty.call(e, "property_list") && l.im_proto.ModifyPropertyBody.encode(e.property_list, t.uint32(10).fork()).ldelim(),
                    null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(18).string(e.ticket),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ModifyMessagePropertyRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.property_list = l.im_proto.ModifyPropertyBody.decode(e, e.uint32());
                            break;
                        case 2:
                            o.ticket = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ModifyMessagePropertyStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "MODIFY_PROPERTY_SUCCESS"] = 0,
                t[e[1] = "MODIFY_PROPERTY_REPEAT_REQUEST"] = 1,
                t[e[2] = "MODIFY_PROPERTY_INVALID_LENGTH"] = 2,
                t[e[3] = "MODIFY_PROPERTY_INVALID_REQUEST"] = 3,
                t[e[4] = "MODIFY_PROPERTY_CALLBACK_ERROR"] = 4,
                t[e[500] = "MODIFY_PROPERTY_INTERNAL_ERROR"] = 500,
                t
            }(),
            e.ModifyMessagePropertyResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.status = 0,
                e.prototype.version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(8).int32(e.status),
                    null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(16).int64(e.version),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ModifyMessagePropertyResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.status = e.int32();
                            break;
                        case 2:
                            o.version = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MediaType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "IMG"] = 1,
                t[e[2] = "VIDEO"] = 2,
                t[e[3] = "AUDIO"] = 3,
                t[e[4] = "FILE"] = 4,
                t[e[10] = "OTHER"] = 10,
                t
            }(),
            e.MediaTokenType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "VSDK"] = 1,
                t[e[2] = "IMAGEX"] = 2,
                t[e[3] = "VSDK_V5"] = 3,
                t[e[4] = "IMAGEX_V5"] = 4,
                t
            }(),
            e.GetUploadTokenRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.vsdk_version = "",
                e.prototype.token_type = 1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.vsdk_version && Object.hasOwnProperty.call(e, "vsdk_version") && t.uint32(10).string(e.vsdk_version),
                    null != e.token_type && Object.hasOwnProperty.call(e, "token_type") && t.uint32(16).int32(e.token_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetUploadTokenRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.vsdk_version = e.string();
                            break;
                        case 2:
                            o.token_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetUploadTokenResponseBody = function() {
                function e(e) {
                    if (this.hosts = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.access_key = "",
                e.prototype.hosts = c.emptyArray,
                e.prototype.token = "",
                e.prototype.token_type = 1,
                e.prototype.secret_access_key = "",
                e.prototype.space_name = "",
                e.prototype.service_id = "",
                e.prototype.expire_time = "",
                e.prototype.current_time = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.access_key && Object.hasOwnProperty.call(e, "access_key") && t.uint32(10).string(e.access_key),
                    null != e.hosts && e.hosts.length)
                        for (var n = 0; n < e.hosts.length; ++n)
                            t.uint32(18).string(e.hosts[n]);
                    return null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                    null != e.token_type && Object.hasOwnProperty.call(e, "token_type") && t.uint32(32).int32(e.token_type),
                    null != e.secret_access_key && Object.hasOwnProperty.call(e, "secret_access_key") && t.uint32(42).string(e.secret_access_key),
                    null != e.space_name && Object.hasOwnProperty.call(e, "space_name") && t.uint32(50).string(e.space_name),
                    null != e.service_id && Object.hasOwnProperty.call(e, "service_id") && t.uint32(58).string(e.service_id),
                    null != e.expire_time && Object.hasOwnProperty.call(e, "expire_time") && t.uint32(66).string(e.expire_time),
                    null != e.current_time && Object.hasOwnProperty.call(e, "current_time") && t.uint32(74).string(e.current_time),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetUploadTokenResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.access_key = e.string();
                            break;
                        case 2:
                            o.hosts && o.hosts.length || (o.hosts = []),
                            o.hosts.push(e.string());
                            break;
                        case 3:
                            o.token = e.string();
                            break;
                        case 4:
                            o.token_type = e.int32();
                            break;
                        case 5:
                            o.secret_access_key = e.string();
                            break;
                        case 6:
                            o.space_name = e.string();
                            break;
                        case 7:
                            o.service_id = e.string();
                            break;
                        case 8:
                            o.expire_time = e.string();
                            break;
                        case 9:
                            o.current_time = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ImgOption = function() {
                function e(e) {
                    if (this.params = [],
                    this.urls = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.tplv = "",
                e.prototype.params = c.emptyArray,
                e.prototype.format = "",
                e.prototype.urls = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.tplv && Object.hasOwnProperty.call(e, "tplv") && t.uint32(10).string(e.tplv),
                    null != e.params && e.params.length)
                        for (var n = 0; n < e.params.length; ++n)
                            t.uint32(18).string(e.params[n]);
                    if (null != e.format && Object.hasOwnProperty.call(e, "format") && t.uint32(26).string(e.format),
                    null != e.urls && e.urls.length)
                        for (n = 0; n < e.urls.length; ++n)
                            t.uint32(802).string(e.urls[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ImgOption; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.tplv = e.string();
                            break;
                        case 2:
                            o.params && o.params.length || (o.params = []),
                            o.params.push(e.string());
                            break;
                        case 3:
                            o.format = e.string();
                            break;
                        case 100:
                            o.urls && o.urls.length || (o.urls = []),
                            o.urls.push(e.string());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.VideoOption = function() {
                function e(e) {
                    if (this.urls = [],
                    this.cover_urls = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.vid = "",
                e.prototype.cover_uri = "",
                e.prototype.urls = c.emptyArray,
                e.prototype.cover_urls = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(10).string(e.vid),
                    null != e.cover_uri && Object.hasOwnProperty.call(e, "cover_uri") && t.uint32(18).string(e.cover_uri),
                    null != e.urls && e.urls.length)
                        for (var n = 0; n < e.urls.length; ++n)
                            t.uint32(802).string(e.urls[n]);
                    if (null != e.cover_urls && e.cover_urls.length)
                        for (n = 0; n < e.cover_urls.length; ++n)
                            t.uint32(810).string(e.cover_urls[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.VideoOption; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.vid = e.string();
                            break;
                        case 2:
                            o.cover_uri = e.string();
                            break;
                        case 100:
                            o.urls && o.urls.length || (o.urls = []),
                            o.urls.push(e.string());
                            break;
                        case 101:
                            o.cover_urls && o.cover_urls.length || (o.cover_urls = []),
                            o.cover_urls.push(e.string());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.AudioOption = function() {
                function e(e) {
                    if (this.urls = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.vid = "",
                e.prototype.urls = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(10).string(e.vid),
                    null != e.urls && e.urls.length)
                        for (var n = 0; n < e.urls.length; ++n)
                            t.uint32(802).string(e.urls[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.AudioOption; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.vid = e.string();
                            break;
                        case 100:
                            o.urls && o.urls.length || (o.urls = []),
                            o.urls.push(e.string());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.FileOption = function() {
                function e(e) {
                    if (this.urls = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.urls = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.urls && e.urls.length)
                        for (var n = 0; n < e.urls.length; ++n)
                            t.uint32(802).string(e.urls[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.FileOption; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 100 ? (o.urls && o.urls.length || (o.urls = []),
                        o.urls.push(e.string())) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ReadURLFrom = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "URL_VSDK"] = 1,
                t[e[2] = "URL_IMAGEX"] = 2,
                t
            }(),
            e.GetMediaUrlsRequestBody = function() {
                function e(e) {
                    if (this.img_options = [],
                    this.video_options = [],
                    this.audio_options = [],
                    this.file_options = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.source_appid = 0,
                e.prototype.uri = "",
                e.prototype.media_type = 0,
                e.prototype.encrypted = !1,
                e.prototype.img_options = c.emptyArray,
                e.prototype.video_options = c.emptyArray,
                e.prototype.audio_options = c.emptyArray,
                e.prototype.file_options = c.emptyArray,
                e.prototype.encrypted_uri = "",
                e.prototype.read_url_from = 1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.source_appid && Object.hasOwnProperty.call(e, "source_appid") && t.uint32(8).int32(e.source_appid),
                    null != e.uri && Object.hasOwnProperty.call(e, "uri") && t.uint32(18).string(e.uri),
                    null != e.media_type && Object.hasOwnProperty.call(e, "media_type") && t.uint32(24).int32(e.media_type),
                    null != e.encrypted && Object.hasOwnProperty.call(e, "encrypted") && t.uint32(32).bool(e.encrypted),
                    null != e.img_options && e.img_options.length)
                        for (var n = 0; n < e.img_options.length; ++n)
                            l.im_proto.ImgOption.encode(e.img_options[n], t.uint32(42).fork()).ldelim();
                    if (null != e.video_options && e.video_options.length)
                        for (n = 0; n < e.video_options.length; ++n)
                            l.im_proto.VideoOption.encode(e.video_options[n], t.uint32(50).fork()).ldelim();
                    if (null != e.audio_options && e.audio_options.length)
                        for (n = 0; n < e.audio_options.length; ++n)
                            l.im_proto.AudioOption.encode(e.audio_options[n], t.uint32(58).fork()).ldelim();
                    if (null != e.file_options && e.file_options.length)
                        for (n = 0; n < e.file_options.length; ++n)
                            l.im_proto.FileOption.encode(e.file_options[n], t.uint32(66).fork()).ldelim();
                    return null != e.encrypted_uri && Object.hasOwnProperty.call(e, "encrypted_uri") && t.uint32(74).string(e.encrypted_uri),
                    null != e.read_url_from && Object.hasOwnProperty.call(e, "read_url_from") && t.uint32(80).int32(e.read_url_from),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetMediaUrlsRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.source_appid = e.int32();
                            break;
                        case 2:
                            o.uri = e.string();
                            break;
                        case 3:
                            o.media_type = e.int32();
                            break;
                        case 4:
                            o.encrypted = e.bool();
                            break;
                        case 5:
                            o.img_options && o.img_options.length || (o.img_options = []),
                            o.img_options.push(l.im_proto.ImgOption.decode(e, e.uint32()));
                            break;
                        case 6:
                            o.video_options && o.video_options.length || (o.video_options = []),
                            o.video_options.push(l.im_proto.VideoOption.decode(e, e.uint32()));
                            break;
                        case 7:
                            o.audio_options && o.audio_options.length || (o.audio_options = []),
                            o.audio_options.push(l.im_proto.AudioOption.decode(e, e.uint32()));
                            break;
                        case 8:
                            o.file_options && o.file_options.length || (o.file_options = []),
                            o.file_options.push(l.im_proto.FileOption.decode(e, e.uint32()));
                            break;
                        case 9:
                            o.encrypted_uri = e.string();
                            break;
                        case 10:
                            o.read_url_from = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetMediaUrlsResponseBody = function() {
                function e(e) {
                    if (this.img_options = [],
                    this.video_options = [],
                    this.audio_options = [],
                    this.file_options = [],
                    this.encrypted_urls = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.uri = "",
                e.prototype.media_type = 0,
                e.prototype.img_options = c.emptyArray,
                e.prototype.video_options = c.emptyArray,
                e.prototype.audio_options = c.emptyArray,
                e.prototype.file_options = c.emptyArray,
                e.prototype.encrypted_urls = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.uri && Object.hasOwnProperty.call(e, "uri") && t.uint32(10).string(e.uri),
                    null != e.media_type && Object.hasOwnProperty.call(e, "media_type") && t.uint32(16).int32(e.media_type),
                    null != e.img_options && e.img_options.length)
                        for (var n = 0; n < e.img_options.length; ++n)
                            l.im_proto.ImgOption.encode(e.img_options[n], t.uint32(26).fork()).ldelim();
                    if (null != e.video_options && e.video_options.length)
                        for (n = 0; n < e.video_options.length; ++n)
                            l.im_proto.VideoOption.encode(e.video_options[n], t.uint32(34).fork()).ldelim();
                    if (null != e.audio_options && e.audio_options.length)
                        for (n = 0; n < e.audio_options.length; ++n)
                            l.im_proto.AudioOption.encode(e.audio_options[n], t.uint32(42).fork()).ldelim();
                    if (null != e.file_options && e.file_options.length)
                        for (n = 0; n < e.file_options.length; ++n)
                            l.im_proto.FileOption.encode(e.file_options[n], t.uint32(50).fork()).ldelim();
                    if (null != e.encrypted_urls && e.encrypted_urls.length)
                        for (n = 0; n < e.encrypted_urls.length; ++n)
                            t.uint32(58).string(e.encrypted_urls[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetMediaUrlsResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.uri = e.string();
                            break;
                        case 2:
                            o.media_type = e.int32();
                            break;
                        case 3:
                            o.img_options && o.img_options.length || (o.img_options = []),
                            o.img_options.push(l.im_proto.ImgOption.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.video_options && o.video_options.length || (o.video_options = []),
                            o.video_options.push(l.im_proto.VideoOption.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.audio_options && o.audio_options.length || (o.audio_options = []),
                            o.audio_options.push(l.im_proto.AudioOption.decode(e, e.uint32()));
                            break;
                        case 6:
                            o.file_options && o.file_options.length || (o.file_options = []),
                            o.file_options.push(l.im_proto.FileOption.decode(e, e.uint32()));
                            break;
                        case 7:
                            o.encrypted_urls && o.encrypted_urls.length || (o.encrypted_urls = []),
                            o.encrypted_urls.push(e.string());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetTicketRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.ticket_type = 1,
                e.prototype.conversation_type = 1,
                e.prototype.to_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.ticket_type && Object.hasOwnProperty.call(e, "ticket_type") && t.uint32(8).int32(e.ticket_type),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.to_id && Object.hasOwnProperty.call(e, "to_id") && t.uint32(32).int64(e.to_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(40).int64(e.conversation_short_id),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(82).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.GetTicketRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.ticket_type = e.int32();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.to_id = e.int64();
                            break;
                        case 5:
                            i.conversation_short_id = e.int64();
                            break;
                        case 10:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.GetTicketResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.ticket = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(10).string(e.ticket),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetTicketResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.ticket = e.string() : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.SortType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[1] = "JOIN_TIME"] = 1,
                t[e[2] = "CREATED_TIME"] = 2,
                t[e[3] = "GROUP_NAME"] = 3,
                t[e[4] = "ACTIVE_TIME"] = 4,
                t
            }(),
            e.GetUserConversationListRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.sort_type = 1,
                e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.con_type = 1,
                e.prototype.limit = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.include_role = 0,
                e.prototype.exclude_role = 0,
                e.prototype.with_cold = !1,
                e.prototype.push_status = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.sort_type && Object.hasOwnProperty.call(e, "sort_type") && t.uint32(8).int32(e.sort_type),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(16).int64(e.cursor),
                    null != e.con_type && Object.hasOwnProperty.call(e, "con_type") && t.uint32(24).int32(e.con_type),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(32).int64(e.limit),
                    null != e.include_role && Object.hasOwnProperty.call(e, "include_role") && t.uint32(40).int32(e.include_role),
                    null != e.exclude_role && Object.hasOwnProperty.call(e, "exclude_role") && t.uint32(48).int32(e.exclude_role),
                    null != e.with_cold && Object.hasOwnProperty.call(e, "with_cold") && t.uint32(64).bool(e.with_cold),
                    null != e.push_status && Object.hasOwnProperty.call(e, "push_status") && t.uint32(80).int32(e.push_status),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetUserConversationListRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.sort_type = e.int32();
                            break;
                        case 2:
                            o.cursor = e.int64();
                            break;
                        case 3:
                            o.con_type = e.int32();
                            break;
                        case 4:
                            o.limit = e.int64();
                            break;
                        case 5:
                            o.include_role = e.int32();
                            break;
                        case 6:
                            o.exclude_role = e.int32();
                            break;
                        case 8:
                            o.with_cold = e.bool();
                            break;
                        case 10:
                            o.push_status = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetUserConversationListResponseBody = function() {
                function e(e) {
                    if (this.list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.list = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.list && e.list.length)
                        for (var n = 0; n < e.list.length; ++n)
                            l.im_proto.ConversationInfoV2.encode(e.list[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(24).int64(e.next_cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetUserConversationListResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.list && o.list.length || (o.list = []),
                            o.list.push(l.im_proto.ConversationInfoV2.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ModifyMessageExtRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.ticket = "",
                e.prototype.ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    t.uint32(8).int64(e.conversation_short_id),
                    t.uint32(16).int64(e.message_id),
                    t.uint32(26).string(e.ticket),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(34).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.ModifyMessageExtRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_short_id = e.int64();
                            break;
                        case 2:
                            i.message_id = e.int64();
                            break;
                        case 3:
                            i.ticket = e.string();
                            break;
                        case 4:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    if (!i.hasOwnProperty("conversation_short_id"))
                        throw c.ProtocolError("missing required 'conversation_short_id'", {
                            instance: i
                        });
                    if (!i.hasOwnProperty("message_id"))
                        throw c.ProtocolError("missing required 'message_id'", {
                            instance: i
                        });
                    if (!i.hasOwnProperty("ticket"))
                        throw c.ProtocolError("missing required 'ticket'", {
                            instance: i
                        });
                    return i
                }
                ,
                e
            }(),
            e.RequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.send_message_body = null,
                e.prototype.messages_per_user_body = null,
                e.prototype.messages_per_user_init_v2_body = null,
                e.prototype.get_message_by_id_body = null,
                e.prototype.messages_in_conversation_body = null,
                e.prototype.get_messages_checkinfo_in_conversation_body = null,
                e.prototype.send_user_action_body = null,
                e.prototype.send_input_status_body = null,
                e.prototype.delete_conversation_body = null,
                e.prototype.mark_conversation_read_body = null,
                e.prototype.conversation_participants_body = null,
                e.prototype.dissolve_conversation_body = null,
                e.prototype.create_conversation_v2_body = null,
                e.prototype.get_conversation_info_list_v2_body = null,
                e.prototype.get_conversation_info_list_by_favorite_v2_body = null,
                e.prototype.get_conversation_info_list_by_top_v2_body = null,
                e.prototype.conversation_add_participants_body = null,
                e.prototype.conversation_remove_participants_body = null,
                e.prototype.leave_conversation_body = null,
                e.prototype.mget_conversation_participants_body = null,
                e.prototype.update_conversation_participant_body = null,
                e.prototype.delete_message_body = null,
                e.prototype.recall_message_body = null,
                e.prototype.modify_message_property_body = null,
                e.prototype.audio_recognition_body = null,
                e.prototype.get_conversation_core_info_body = null,
                e.prototype.set_conversation_core_info_body = null,
                e.prototype.upsert_conversation_core_ext_info_body = null,
                e.prototype.set_conversation_setting_info_body = null,
                e.prototype.upsert_conversation_setting_ext_info_body = null,
                e.prototype.get_stranger_conversation_body = null,
                e.prototype.get_stranger_messages_body = null,
                e.prototype.delete_stranger_message_body = null,
                e.prototype.delete_stranger_conversation_body = null,
                e.prototype.delete_stranger_all_conversation_body = null,
                e.prototype.mark_stranger_conversation_read_body = null,
                e.prototype.mark_stranger_all_conversation_read_body = null,
                e.prototype.participants_read_index_body = null,
                e.prototype.participants_min_index_body = null,
                e.prototype.get_upload_token_body = null,
                e.prototype.get_media_urls_body = null,
                e.prototype.get_ticket_body = null,
                e.prototype.get_conversation_list_body = null,
                e.prototype.broadcast_send_message_body = null,
                e.prototype.broadcast_recv_message_body = null,
                e.prototype.broadcast_user_counter_body = null,
                e.prototype.client_ack_body = null,
                e.prototype.create_voip_body = null,
                e.prototype.call_voip_body = null,
                e.prototype.update_voip_body = null,
                e.prototype.channel_heartbeat_body = null,
                e.prototype.profile_get_info = null,
                e.prototype.report_client_metrics_body = null,
                e.prototype.get_configs_body = null,
                e.prototype.modify_message_ext_body = null,
                e.prototype.unread_count_report_body = null,
                e.prototype.block_members_body = null,
                e.prototype.block_conversation_body = null,
                e.prototype.get_unread_count_body = null,
                e.prototype.send_message_p2p_body = null,
                e.prototype.get_blocklist_body = null,
                e.prototype.set_blocklist_body = null,
                e.prototype.check_in_blocklist_body = null,
                e.prototype.mark_message_body = null,
                e.prototype.pull_mark_message_body = null,
                e.prototype.batch_get_conversation_participants_readindex = null,
                e.prototype.message_by_init = null,
                e.prototype.mark_msg_unread_count_report = null,
                e.prototype.mark_msg_get_unread_count = null,
                e.prototype.batch_unmark_message = null,
                e.prototype.client_batch_ack_body = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.send_message_body && Object.hasOwnProperty.call(e, "send_message_body") && l.im_proto.SendMessageRequestBody.encode(e.send_message_body, t.uint32(802).fork()).ldelim(),
                    null != e.messages_per_user_body && Object.hasOwnProperty.call(e, "messages_per_user_body") && l.im_proto.MessagesPerUserRequestBody.encode(e.messages_per_user_body, t.uint32(1602).fork()).ldelim(),
                    null != e.messages_per_user_init_v2_body && Object.hasOwnProperty.call(e, "messages_per_user_init_v2_body") && l.im_proto.MessagesPerUserInitV2RequestBody.encode(e.messages_per_user_init_v2_body, t.uint32(1626).fork()).ldelim(),
                    null != e.get_message_by_id_body && Object.hasOwnProperty.call(e, "get_message_by_id_body") && l.im_proto.GetMessageByIdRequestBody.encode(e.get_message_by_id_body, t.uint32(1690).fork()).ldelim(),
                    null != e.messages_in_conversation_body && Object.hasOwnProperty.call(e, "messages_in_conversation_body") && l.im_proto.MessagesInConversationRequestBody.encode(e.messages_in_conversation_body, t.uint32(2410).fork()).ldelim(),
                    null != e.get_messages_checkinfo_in_conversation_body && Object.hasOwnProperty.call(e, "get_messages_checkinfo_in_conversation_body") && l.im_proto.GetMessagesCheckInfoInConversationRequestBody.encode(e.get_messages_checkinfo_in_conversation_body, t.uint32(2418).fork()).ldelim(),
                    null != e.send_user_action_body && Object.hasOwnProperty.call(e, "send_user_action_body") && l.im_proto.SendUserActionRequestBody.encode(e.send_user_action_body, t.uint32(3282).fork()).ldelim(),
                    null != e.send_input_status_body && Object.hasOwnProperty.call(e, "send_input_status_body") && l.im_proto.SendInputStatusRequestBody.encode(e.send_input_status_body, t.uint32(3290).fork()).ldelim(),
                    null != e.delete_conversation_body && Object.hasOwnProperty.call(e, "delete_conversation_body") && l.im_proto.DeleteConversationRequestBody.encode(e.delete_conversation_body, t.uint32(4826).fork()).ldelim(),
                    null != e.mark_conversation_read_body && Object.hasOwnProperty.call(e, "mark_conversation_read_body") && l.im_proto.MarkConversationReadRequestBody.encode(e.mark_conversation_read_body, t.uint32(4834).fork()).ldelim(),
                    null != e.conversation_participants_body && Object.hasOwnProperty.call(e, "conversation_participants_body") && l.im_proto.ConversationParticipantsListRequestBody.encode(e.conversation_participants_body, t.uint32(4842).fork()).ldelim(),
                    null != e.create_conversation_v2_body && Object.hasOwnProperty.call(e, "create_conversation_v2_body") && l.im_proto.CreateConversationV2RequestBody.encode(e.create_conversation_v2_body, t.uint32(4874).fork()).ldelim(),
                    null != e.get_conversation_info_list_v2_body && Object.hasOwnProperty.call(e, "get_conversation_info_list_v2_body") && l.im_proto.GetConversationInfoListV2RequestBody.encode(e.get_conversation_info_list_v2_body, t.uint32(4882).fork()).ldelim(),
                    null != e.get_conversation_info_list_by_favorite_v2_body && Object.hasOwnProperty.call(e, "get_conversation_info_list_by_favorite_v2_body") && l.im_proto.ConversationsPerUserByFavoriteV2RequestBody.encode(e.get_conversation_info_list_by_favorite_v2_body, t.uint32(4890).fork()).ldelim(),
                    null != e.get_conversation_info_list_by_top_v2_body && Object.hasOwnProperty.call(e, "get_conversation_info_list_by_top_v2_body") && l.im_proto.ConversationsPerUserByTopV2RequestBody.encode(e.get_conversation_info_list_by_top_v2_body, t.uint32(4898).fork()).ldelim(),
                    null != e.dissolve_conversation_body && Object.hasOwnProperty.call(e, "dissolve_conversation_body") && l.im_proto.DissolveConversationRequestBody.encode(e.dissolve_conversation_body, t.uint32(4914).fork()).ldelim(),
                    null != e.conversation_add_participants_body && Object.hasOwnProperty.call(e, "conversation_add_participants_body") && l.im_proto.ConversationAddParticipantsRequestBody.encode(e.conversation_add_participants_body, t.uint32(5202).fork()).ldelim(),
                    null != e.conversation_remove_participants_body && Object.hasOwnProperty.call(e, "conversation_remove_participants_body") && l.im_proto.ConversationRemoveParticipantsRequestBody.encode(e.conversation_remove_participants_body, t.uint32(5210).fork()).ldelim(),
                    null != e.leave_conversation_body && Object.hasOwnProperty.call(e, "leave_conversation_body") && l.im_proto.ConversationLeaveRequestBody.encode(e.leave_conversation_body, t.uint32(5218).fork()).ldelim(),
                    null != e.mget_conversation_participants_body && Object.hasOwnProperty.call(e, "mget_conversation_participants_body") && l.im_proto.MgetConversationParticipantsRequestBody.encode(e.mget_conversation_participants_body, t.uint32(5234).fork()).ldelim(),
                    null != e.update_conversation_participant_body && Object.hasOwnProperty.call(e, "update_conversation_participant_body") && l.im_proto.UpdateConversationParticipantRequestBody.encode(e.update_conversation_participant_body, t.uint32(5242).fork()).ldelim(),
                    null != e.delete_message_body && Object.hasOwnProperty.call(e, "delete_message_body") && l.im_proto.DeleteMessageRequestBody.encode(e.delete_message_body, t.uint32(5610).fork()).ldelim(),
                    null != e.recall_message_body && Object.hasOwnProperty.call(e, "recall_message_body") && l.im_proto.RecallMessageRequestBody.encode(e.recall_message_body, t.uint32(5618).fork()).ldelim(),
                    null != e.modify_message_property_body && Object.hasOwnProperty.call(e, "modify_message_property_body") && l.im_proto.ModifyMessagePropertyRequestBody.encode(e.modify_message_property_body, t.uint32(5642).fork()).ldelim(),
                    null != e.get_conversation_core_info_body && Object.hasOwnProperty.call(e, "get_conversation_core_info_body") && l.im_proto.GetConversationCoreInfoRequestBody.encode(e.get_conversation_core_info_body, t.uint32(7210).fork()).ldelim(),
                    null != e.set_conversation_core_info_body && Object.hasOwnProperty.call(e, "set_conversation_core_info_body") && l.im_proto.SetConversationCoreInfoRequestBody.encode(e.set_conversation_core_info_body, t.uint32(7218).fork()).ldelim(),
                    null != e.upsert_conversation_core_ext_info_body && Object.hasOwnProperty.call(e, "upsert_conversation_core_ext_info_body") && l.im_proto.UpsertConversationCoreExtInfoRequestBody.encode(e.upsert_conversation_core_ext_info_body, t.uint32(7234).fork()).ldelim(),
                    null != e.set_conversation_setting_info_body && Object.hasOwnProperty.call(e, "set_conversation_setting_info_body") && l.im_proto.SetConversationSettingInfoRequestBody.encode(e.set_conversation_setting_info_body, t.uint32(7370).fork()).ldelim(),
                    null != e.upsert_conversation_setting_ext_info_body && Object.hasOwnProperty.call(e, "upsert_conversation_setting_ext_info_body") && l.im_proto.UpsertConversationSettingExtInfoRequestBody.encode(e.upsert_conversation_setting_ext_info_body, t.uint32(7378).fork()).ldelim(),
                    null != e.get_stranger_conversation_body && Object.hasOwnProperty.call(e, "get_stranger_conversation_body") && l.im_proto.GetStrangerConversationListRequestBody.encode(e.get_stranger_conversation_body, t.uint32(8002).fork()).ldelim(),
                    null != e.get_stranger_messages_body && Object.hasOwnProperty.call(e, "get_stranger_messages_body") && l.im_proto.GetStrangerMessagesRequestBody.encode(e.get_stranger_messages_body, t.uint32(8010).fork()).ldelim(),
                    null != e.delete_stranger_message_body && Object.hasOwnProperty.call(e, "delete_stranger_message_body") && l.im_proto.DeleteStrangerMessageRequestBody.encode(e.delete_stranger_message_body, t.uint32(8018).fork()).ldelim(),
                    null != e.delete_stranger_conversation_body && Object.hasOwnProperty.call(e, "delete_stranger_conversation_body") && l.im_proto.DeleteStrangerConversationRequestBody.encode(e.delete_stranger_conversation_body, t.uint32(8026).fork()).ldelim(),
                    null != e.delete_stranger_all_conversation_body && Object.hasOwnProperty.call(e, "delete_stranger_all_conversation_body") && l.im_proto.DeleteStrangerAllConversationRequestBody.encode(e.delete_stranger_all_conversation_body, t.uint32(8034).fork()).ldelim(),
                    null != e.mark_stranger_conversation_read_body && Object.hasOwnProperty.call(e, "mark_stranger_conversation_read_body") && l.im_proto.MarkStrangerConversationReadRequestBody.encode(e.mark_stranger_conversation_read_body, t.uint32(8042).fork()).ldelim(),
                    null != e.mark_stranger_all_conversation_read_body && Object.hasOwnProperty.call(e, "mark_stranger_all_conversation_read_body") && l.im_proto.MarkStrangerAllConversationReadRequestBody.encode(e.mark_stranger_all_conversation_read_body, t.uint32(8050).fork()).ldelim(),
                    null != e.participants_read_index_body && Object.hasOwnProperty.call(e, "participants_read_index_body") && l.im_proto.GetConversationParticipantsReadIndexV3RequestBody.encode(e.participants_read_index_body, t.uint32(16002).fork()).ldelim(),
                    null != e.participants_min_index_body && Object.hasOwnProperty.call(e, "participants_min_index_body") && l.im_proto.GetConversationParticipantsMinIndexV3RequestBody.encode(e.participants_min_index_body, t.uint32(16010).fork()).ldelim(),
                    null != e.get_upload_token_body && Object.hasOwnProperty.call(e, "get_upload_token_body") && l.im_proto.GetUploadTokenRequestBody.encode(e.get_upload_token_body, t.uint32(16026).fork()).ldelim(),
                    null != e.get_media_urls_body && Object.hasOwnProperty.call(e, "get_media_urls_body") && l.im_proto.GetMediaUrlsRequestBody.encode(e.get_media_urls_body, t.uint32(16034).fork()).ldelim(),
                    null != e.get_ticket_body && Object.hasOwnProperty.call(e, "get_ticket_body") && l.im_proto.GetTicketRequestBody.encode(e.get_ticket_body, t.uint32(16042).fork()).ldelim(),
                    null != e.get_conversation_list_body && Object.hasOwnProperty.call(e, "get_conversation_list_body") && l.im_proto.GetUserConversationListRequestBody.encode(e.get_conversation_list_body, t.uint32(16050).fork()).ldelim(),
                    null != e.broadcast_send_message_body && Object.hasOwnProperty.call(e, "broadcast_send_message_body") && l.im_proto.BroadcastSendMessageRequestBody.encode(e.broadcast_send_message_body, t.uint32(16058).fork()).ldelim(),
                    null != e.broadcast_recv_message_body && Object.hasOwnProperty.call(e, "broadcast_recv_message_body") && l.im_proto.BroadcastRecvMessageRequestBody.encode(e.broadcast_recv_message_body, t.uint32(16066).fork()).ldelim(),
                    null != e.broadcast_user_counter_body && Object.hasOwnProperty.call(e, "broadcast_user_counter_body") && l.im_proto.BroadcastUserCounterRequestBody.encode(e.broadcast_user_counter_body, t.uint32(16074).fork()).ldelim(),
                    null != e.client_ack_body && Object.hasOwnProperty.call(e, "client_ack_body") && l.im_proto.ClientACKRequestBody.encode(e.client_ack_body, t.uint32(16082).fork()).ldelim(),
                    null != e.create_voip_body && Object.hasOwnProperty.call(e, "create_voip_body") && l.im_proto.CreateVoipRequestBody.encode(e.create_voip_body, t.uint32(16090).fork()).ldelim(),
                    null != e.call_voip_body && Object.hasOwnProperty.call(e, "call_voip_body") && l.im_proto.CallVoipRequestBody.encode(e.call_voip_body, t.uint32(16098).fork()).ldelim(),
                    null != e.update_voip_body && Object.hasOwnProperty.call(e, "update_voip_body") && l.im_proto.UpdateVoipRequestBody.encode(e.update_voip_body, t.uint32(16106).fork()).ldelim(),
                    null != e.channel_heartbeat_body && Object.hasOwnProperty.call(e, "channel_heartbeat_body") && l.im_proto.ChannelHeartBeatRequestBody.encode(e.channel_heartbeat_body, t.uint32(16114).fork()).ldelim(),
                    null != e.profile_get_info && Object.hasOwnProperty.call(e, "profile_get_info") && l.im_proto.ProfileGetInfoRequestBody.encode(e.profile_get_info, t.uint32(16122).fork()).ldelim(),
                    null != e.report_client_metrics_body && Object.hasOwnProperty.call(e, "report_client_metrics_body") && l.im_proto.ReportClientMetricsRequestBody.encode(e.report_client_metrics_body, t.uint32(16130).fork()).ldelim(),
                    null != e.get_configs_body && Object.hasOwnProperty.call(e, "get_configs_body") && l.im_proto.GetConfigsRequestBody.encode(e.get_configs_body, t.uint32(16138).fork()).ldelim(),
                    null != e.unread_count_report_body && Object.hasOwnProperty.call(e, "unread_count_report_body") && l.im_proto.UnReadCountReportRequestBody.encode(e.unread_count_report_body, t.uint32(16146).fork()).ldelim(),
                    null != e.block_members_body && Object.hasOwnProperty.call(e, "block_members_body") && l.im_proto.BlockMembersRequestBody.encode(e.block_members_body, t.uint32(16154).fork()).ldelim(),
                    null != e.block_conversation_body && Object.hasOwnProperty.call(e, "block_conversation_body") && l.im_proto.BlockConversationRequestBody.encode(e.block_conversation_body, t.uint32(16162).fork()).ldelim(),
                    null != e.modify_message_ext_body && Object.hasOwnProperty.call(e, "modify_message_ext_body") && l.im_proto.ModifyMessageExtRequestBody.encode(e.modify_message_ext_body, t.uint32(16170).fork()).ldelim(),
                    null != e.get_unread_count_body && Object.hasOwnProperty.call(e, "get_unread_count_body") && l.im_proto.GetUnreadCountRequestBody.encode(e.get_unread_count_body, t.uint32(16242).fork()).ldelim(),
                    null != e.send_message_p2p_body && Object.hasOwnProperty.call(e, "send_message_p2p_body") && l.im_proto.SendMessageP2PRequestBody.encode(e.send_message_p2p_body, t.uint32(16250).fork()).ldelim(),
                    null != e.get_blocklist_body && Object.hasOwnProperty.call(e, "get_blocklist_body") && l.im_proto.GetBlockListRequestBody.encode(e.get_blocklist_body, t.uint32(16258).fork()).ldelim(),
                    null != e.set_blocklist_body && Object.hasOwnProperty.call(e, "set_blocklist_body") && l.im_proto.SetBlocklistRequestBody.encode(e.set_blocklist_body, t.uint32(16266).fork()).ldelim(),
                    null != e.check_in_blocklist_body && Object.hasOwnProperty.call(e, "check_in_blocklist_body") && l.im_proto.CheckInBlockListRequestBody.encode(e.check_in_blocklist_body, t.uint32(16274).fork()).ldelim(),
                    null != e.mark_message_body && Object.hasOwnProperty.call(e, "mark_message_body") && l.im_proto.MarkMessageRequestBody.encode(e.mark_message_body, t.uint32(16290).fork()).ldelim(),
                    null != e.pull_mark_message_body && Object.hasOwnProperty.call(e, "pull_mark_message_body") && l.im_proto.PullMarkMessageRequestBody.encode(e.pull_mark_message_body, t.uint32(16298).fork()).ldelim(),
                    null != e.batch_get_conversation_participants_readindex && Object.hasOwnProperty.call(e, "batch_get_conversation_participants_readindex") && l.im_proto.BatchGetConversationParticipantsReadIndexRequestBody.encode(e.batch_get_conversation_participants_readindex, t.uint32(16306).fork()).ldelim(),
                    null != e.message_by_init && Object.hasOwnProperty.call(e, "message_by_init") && l.im_proto.MessageByInitRequestBody.encode(e.message_by_init, t.uint32(16346).fork()).ldelim(),
                    null != e.mark_msg_unread_count_report && Object.hasOwnProperty.call(e, "mark_msg_unread_count_report") && l.im_proto.MarkMsgUnreadCountReportRequestBody.encode(e.mark_msg_unread_count_report, t.uint32(16434).fork()).ldelim(),
                    null != e.mark_msg_get_unread_count && Object.hasOwnProperty.call(e, "mark_msg_get_unread_count") && l.im_proto.MarkMsgGetUnreadCountRequestBody.encode(e.mark_msg_get_unread_count, t.uint32(16442).fork()).ldelim(),
                    null != e.batch_unmark_message && Object.hasOwnProperty.call(e, "batch_unmark_message") && l.im_proto.BatchUnmarkMessageRequestBody.encode(e.batch_unmark_message, t.uint32(16450).fork()).ldelim(),
                    null != e.client_batch_ack_body && Object.hasOwnProperty.call(e, "client_batch_ack_body") && l.im_proto.ClientBatchACKRequestBody.encode(e.client_batch_ack_body, t.uint32(16458).fork()).ldelim(),
                    null != e.audio_recognition_body && Object.hasOwnProperty.call(e, "audio_recognition_body") && l.im_proto.AudioRecognitionRequestBody.encode(e.audio_recognition_body, t.uint32(16474).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.RequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 100:
                            o.send_message_body = l.im_proto.SendMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 200:
                            o.messages_per_user_body = l.im_proto.MessagesPerUserRequestBody.decode(e, e.uint32());
                            break;
                        case 203:
                            o.messages_per_user_init_v2_body = l.im_proto.MessagesPerUserInitV2RequestBody.decode(e, e.uint32());
                            break;
                        case 211:
                            o.get_message_by_id_body = l.im_proto.GetMessageByIdRequestBody.decode(e, e.uint32());
                            break;
                        case 301:
                            o.messages_in_conversation_body = l.im_proto.MessagesInConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 302:
                            o.get_messages_checkinfo_in_conversation_body = l.im_proto.GetMessagesCheckInfoInConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 410:
                            o.send_user_action_body = l.im_proto.SendUserActionRequestBody.decode(e, e.uint32());
                            break;
                        case 411:
                            o.send_input_status_body = l.im_proto.SendInputStatusRequestBody.decode(e, e.uint32());
                            break;
                        case 603:
                            o.delete_conversation_body = l.im_proto.DeleteConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 604:
                            o.mark_conversation_read_body = l.im_proto.MarkConversationReadRequestBody.decode(e, e.uint32());
                            break;
                        case 605:
                            o.conversation_participants_body = l.im_proto.ConversationParticipantsListRequestBody.decode(e, e.uint32());
                            break;
                        case 614:
                            o.dissolve_conversation_body = l.im_proto.DissolveConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 609:
                            o.create_conversation_v2_body = l.im_proto.CreateConversationV2RequestBody.decode(e, e.uint32());
                            break;
                        case 610:
                            o.get_conversation_info_list_v2_body = l.im_proto.GetConversationInfoListV2RequestBody.decode(e, e.uint32());
                            break;
                        case 611:
                            o.get_conversation_info_list_by_favorite_v2_body = l.im_proto.ConversationsPerUserByFavoriteV2RequestBody.decode(e, e.uint32());
                            break;
                        case 612:
                            o.get_conversation_info_list_by_top_v2_body = l.im_proto.ConversationsPerUserByTopV2RequestBody.decode(e, e.uint32());
                            break;
                        case 650:
                            o.conversation_add_participants_body = l.im_proto.ConversationAddParticipantsRequestBody.decode(e, e.uint32());
                            break;
                        case 651:
                            o.conversation_remove_participants_body = l.im_proto.ConversationRemoveParticipantsRequestBody.decode(e, e.uint32());
                            break;
                        case 652:
                            o.leave_conversation_body = l.im_proto.ConversationLeaveRequestBody.decode(e, e.uint32());
                            break;
                        case 654:
                            o.mget_conversation_participants_body = l.im_proto.MgetConversationParticipantsRequestBody.decode(e, e.uint32());
                            break;
                        case 655:
                            o.update_conversation_participant_body = l.im_proto.UpdateConversationParticipantRequestBody.decode(e, e.uint32());
                            break;
                        case 701:
                            o.delete_message_body = l.im_proto.DeleteMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 702:
                            o.recall_message_body = l.im_proto.RecallMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 705:
                            o.modify_message_property_body = l.im_proto.ModifyMessagePropertyRequestBody.decode(e, e.uint32());
                            break;
                        case 2059:
                            o.audio_recognition_body = l.im_proto.AudioRecognitionRequestBody.decode(e, e.uint32());
                            break;
                        case 901:
                            o.get_conversation_core_info_body = l.im_proto.GetConversationCoreInfoRequestBody.decode(e, e.uint32());
                            break;
                        case 902:
                            o.set_conversation_core_info_body = l.im_proto.SetConversationCoreInfoRequestBody.decode(e, e.uint32());
                            break;
                        case 904:
                            o.upsert_conversation_core_ext_info_body = l.im_proto.UpsertConversationCoreExtInfoRequestBody.decode(e, e.uint32());
                            break;
                        case 921:
                            o.set_conversation_setting_info_body = l.im_proto.SetConversationSettingInfoRequestBody.decode(e, e.uint32());
                            break;
                        case 922:
                            o.upsert_conversation_setting_ext_info_body = l.im_proto.UpsertConversationSettingExtInfoRequestBody.decode(e, e.uint32());
                            break;
                        case 1e3:
                            o.get_stranger_conversation_body = l.im_proto.GetStrangerConversationListRequestBody.decode(e, e.uint32());
                            break;
                        case 1001:
                            o.get_stranger_messages_body = l.im_proto.GetStrangerMessagesRequestBody.decode(e, e.uint32());
                            break;
                        case 1002:
                            o.delete_stranger_message_body = l.im_proto.DeleteStrangerMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 1003:
                            o.delete_stranger_conversation_body = l.im_proto.DeleteStrangerConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 1004:
                            o.delete_stranger_all_conversation_body = l.im_proto.DeleteStrangerAllConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 1005:
                            o.mark_stranger_conversation_read_body = l.im_proto.MarkStrangerConversationReadRequestBody.decode(e, e.uint32());
                            break;
                        case 1006:
                            o.mark_stranger_all_conversation_read_body = l.im_proto.MarkStrangerAllConversationReadRequestBody.decode(e, e.uint32());
                            break;
                        case 2e3:
                            o.participants_read_index_body = l.im_proto.GetConversationParticipantsReadIndexV3RequestBody.decode(e, e.uint32());
                            break;
                        case 2001:
                            o.participants_min_index_body = l.im_proto.GetConversationParticipantsMinIndexV3RequestBody.decode(e, e.uint32());
                            break;
                        case 2003:
                            o.get_upload_token_body = l.im_proto.GetUploadTokenRequestBody.decode(e, e.uint32());
                            break;
                        case 2004:
                            o.get_media_urls_body = l.im_proto.GetMediaUrlsRequestBody.decode(e, e.uint32());
                            break;
                        case 2005:
                            o.get_ticket_body = l.im_proto.GetTicketRequestBody.decode(e, e.uint32());
                            break;
                        case 2006:
                            o.get_conversation_list_body = l.im_proto.GetUserConversationListRequestBody.decode(e, e.uint32());
                            break;
                        case 2007:
                            o.broadcast_send_message_body = l.im_proto.BroadcastSendMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 2008:
                            o.broadcast_recv_message_body = l.im_proto.BroadcastRecvMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 2009:
                            o.broadcast_user_counter_body = l.im_proto.BroadcastUserCounterRequestBody.decode(e, e.uint32());
                            break;
                        case 2010:
                            o.client_ack_body = l.im_proto.ClientACKRequestBody.decode(e, e.uint32());
                            break;
                        case 2011:
                            o.create_voip_body = l.im_proto.CreateVoipRequestBody.decode(e, e.uint32());
                            break;
                        case 2012:
                            o.call_voip_body = l.im_proto.CallVoipRequestBody.decode(e, e.uint32());
                            break;
                        case 2013:
                            o.update_voip_body = l.im_proto.UpdateVoipRequestBody.decode(e, e.uint32());
                            break;
                        case 2014:
                            o.channel_heartbeat_body = l.im_proto.ChannelHeartBeatRequestBody.decode(e, e.uint32());
                            break;
                        case 2015:
                            o.profile_get_info = l.im_proto.ProfileGetInfoRequestBody.decode(e, e.uint32());
                            break;
                        case 2016:
                            o.report_client_metrics_body = l.im_proto.ReportClientMetricsRequestBody.decode(e, e.uint32());
                            break;
                        case 2017:
                            o.get_configs_body = l.im_proto.GetConfigsRequestBody.decode(e, e.uint32());
                            break;
                        case 2021:
                            o.modify_message_ext_body = l.im_proto.ModifyMessageExtRequestBody.decode(e, e.uint32());
                            break;
                        case 2018:
                            o.unread_count_report_body = l.im_proto.UnReadCountReportRequestBody.decode(e, e.uint32());
                            break;
                        case 2019:
                            o.block_members_body = l.im_proto.BlockMembersRequestBody.decode(e, e.uint32());
                            break;
                        case 2020:
                            o.block_conversation_body = l.im_proto.BlockConversationRequestBody.decode(e, e.uint32());
                            break;
                        case 2030:
                            o.get_unread_count_body = l.im_proto.GetUnreadCountRequestBody.decode(e, e.uint32());
                            break;
                        case 2031:
                            o.send_message_p2p_body = l.im_proto.SendMessageP2PRequestBody.decode(e, e.uint32());
                            break;
                        case 2032:
                            o.get_blocklist_body = l.im_proto.GetBlockListRequestBody.decode(e, e.uint32());
                            break;
                        case 2033:
                            o.set_blocklist_body = l.im_proto.SetBlocklistRequestBody.decode(e, e.uint32());
                            break;
                        case 2034:
                            o.check_in_blocklist_body = l.im_proto.CheckInBlockListRequestBody.decode(e, e.uint32());
                            break;
                        case 2036:
                            o.mark_message_body = l.im_proto.MarkMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 2037:
                            o.pull_mark_message_body = l.im_proto.PullMarkMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 2038:
                            o.batch_get_conversation_participants_readindex = l.im_proto.BatchGetConversationParticipantsReadIndexRequestBody.decode(e, e.uint32());
                            break;
                        case 2043:
                            o.message_by_init = l.im_proto.MessageByInitRequestBody.decode(e, e.uint32());
                            break;
                        case 2054:
                            o.mark_msg_unread_count_report = l.im_proto.MarkMsgUnreadCountReportRequestBody.decode(e, e.uint32());
                            break;
                        case 2055:
                            o.mark_msg_get_unread_count = l.im_proto.MarkMsgGetUnreadCountRequestBody.decode(e, e.uint32());
                            break;
                        case 2056:
                            o.batch_unmark_message = l.im_proto.BatchUnmarkMessageRequestBody.decode(e, e.uint32());
                            break;
                        case 2057:
                            o.client_batch_ack_body = l.im_proto.ClientBatchACKRequestBody.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    console.log(o);
                    return o
                }
                ,
                e
            }(),
            e.Request = function() {
                function e(e) {
                    if (this.headers = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cmd = 0,
                e.prototype.sequence_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sdk_version = "",
                e.prototype.token = "",
                e.prototype.refer = 1,
                e.prototype.inbox_type = 0,
                e.prototype.build_number = "",
                e.prototype.body = null,
                e.prototype.device_id = "",
                e.prototype.channel = "",
                e.prototype.device_platform = "",
                e.prototype.device_type = "",
                e.prototype.os_version = "",
                e.prototype.version_code = "",
                e.prototype.headers = c.emptyObject,
                e.prototype.config_id = 0,
                e.prototype.token_info = null,
                e.prototype.auth_type = 0,
                e.prototype.biz = "",
                e.prototype.access = "",
                e.prototype.ts_sign = "",
                e.prototype.sdk_cert = "",
                e.prototype.reuqest_sign = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.cmd && Object.hasOwnProperty.call(e, "cmd") && t.uint32(8).int32(e.cmd),
                    null != e.sequence_id && Object.hasOwnProperty.call(e, "sequence_id") && t.uint32(16).int64(e.sequence_id),
                    null != e.sdk_version && Object.hasOwnProperty.call(e, "sdk_version") && t.uint32(26).string(e.sdk_version),
                    null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(34).string(e.token),
                    null != e.refer && Object.hasOwnProperty.call(e, "refer") && t.uint32(40).int32(e.refer),
                    null != e.inbox_type && Object.hasOwnProperty.call(e, "inbox_type") && t.uint32(48).int32(e.inbox_type),
                    null != e.build_number && Object.hasOwnProperty.call(e, "build_number") && t.uint32(58).string(e.build_number),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && l.im_proto.RequestBody.encode(e.body, t.uint32(66).fork()).ldelim(),
                    null != e.device_id && Object.hasOwnProperty.call(e, "device_id") && t.uint32(74).string(e.device_id),
                    null != e.channel && Object.hasOwnProperty.call(e, "channel") && t.uint32(82).string(e.channel),
                    null != e.device_platform && Object.hasOwnProperty.call(e, "device_platform") && t.uint32(90).string(e.device_platform),
                    null != e.device_type && Object.hasOwnProperty.call(e, "device_type") && t.uint32(98).string(e.device_type),
                    null != e.os_version && Object.hasOwnProperty.call(e, "os_version") && t.uint32(106).string(e.os_version),
                    null != e.version_code && Object.hasOwnProperty.call(e, "version_code") && t.uint32(114).string(e.version_code),
                    null != e.headers && Object.hasOwnProperty.call(e, "headers"))
                        for (var n = Object.keys(e.headers), o = 0; o < n.length; ++o)
                            t.uint32(122).fork().uint32(10).string(n[o]).uint32(18).string(e.headers[n[o]]).ldelim();
                    return null != e.config_id && Object.hasOwnProperty.call(e, "config_id") && t.uint32(128).int32(e.config_id),
                    null != e.token_info && Object.hasOwnProperty.call(e, "token_info") && l.im_proto.TokenInfo.encode(e.token_info, t.uint32(138).fork()).ldelim(),
                    null != e.auth_type && Object.hasOwnProperty.call(e, "auth_type") && t.uint32(144).int32(e.auth_type),
                    null != e.biz && Object.hasOwnProperty.call(e, "biz") && t.uint32(170).string(e.biz),
                    null != e.access && Object.hasOwnProperty.call(e, "access") && t.uint32(178).string(e.access),
                    null != e.ts_sign && Object.hasOwnProperty.call(e, "ts_sign") && t.uint32(186).string(e.ts_sign),
                    null != e.sdk_cert && Object.hasOwnProperty.call(e, "sdk_cert") && t.uint32(194).string(e.sdk_cert),
                    null != e.reuqest_sign && Object.hasOwnProperty.call(e, "reuqest_sign") && t.uint32(202).string(e.reuqest_sign),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.Request; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.cmd = e.int32();
                            break;
                        case 2:
                            i.sequence_id = e.int64();
                            break;
                        case 3:
                            i.sdk_version = e.string();
                            break;
                        case 4:
                            i.token = e.string();
                            break;
                        case 5:
                            i.refer = e.int32();
                            break;
                        case 6:
                            i.inbox_type = e.int32();
                            break;
                        case 7:
                            i.build_number = e.string();
                            break;
                        case 8:
                            i.body = l.im_proto.RequestBody.decode(e, e.uint32());
                            break;
                        case 9:
                            i.device_id = e.string();
                            break;
                        case 10:
                            i.channel = e.string();
                            break;
                        case 11:
                            i.device_platform = e.string();
                            break;
                        case 12:
                            i.device_type = e.string();
                            break;
                        case 13:
                            i.os_version = e.string();
                            break;
                        case 14:
                            i.version_code = e.string();
                            break;
                        case 15:
                            i.headers === c.emptyObject && (i.headers = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.headers[n] = o;
                            break;
                        case 16:
                            i.config_id = e.int32();
                            break;
                        case 17:
                            i.token_info = l.im_proto.TokenInfo.decode(e, e.uint32());
                            break;
                        case 18:
                            i.auth_type = e.int32();
                            break;
                        case 21:
                            i.biz = e.string();
                            break;
                        case 22:
                            i.access = e.string();
                            break;
                        case 23:
                            i.ts_sign = e.string();
                            break;
                        case 24:
                            i.sdk_cert = e.string();
                            break;
                        case 25:
                            i.reuqest_sign = e.string();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.AuthType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "UNKNOWN_AUTH"] = 0,
                t[e[1] = "SESSION_AUTH"] = 1,
                t[e[2] = "TOKEN_AUTH"] = 2,
                t[e[3] = "CERT_AUTH"] = 3,
                t
            }(),
            e.TokenType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "DEFAULT_TOKEN"] = 0,
                t[e[1] = "APP_TOKEN"] = 1,
                t[e[2] = "SERVER_TOKEN"] = 2,
                t
            }(),
            e.TokenInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.mark_id = 0,
                e.prototype.type = 0,
                e.prototype.app_id = 0,
                e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.timestamp = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.mark_id && Object.hasOwnProperty.call(e, "mark_id") && t.uint32(8).int32(e.mark_id),
                    null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type),
                    null != e.app_id && Object.hasOwnProperty.call(e, "app_id") && t.uint32(24).int32(e.app_id),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(32).int64(e.user_id),
                    null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && t.uint32(40).int64(e.timestamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.TokenInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.mark_id = e.int32();
                            break;
                        case 2:
                            o.type = e.int32();
                            break;
                        case 3:
                            o.app_id = e.int32();
                            break;
                        case 4:
                            o.user_id = e.int64();
                            break;
                        case 5:
                            o.timestamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SendType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "BY_CONVERSATION"] = 0,
                t[e[1] = "BY_USER"] = 1,
                t
            }(),
            e.NewP2PMessageNotify = function() {
                function e(e) {
                    if (this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.send_type = 0,
                e.prototype.sender = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.sec_sender = "",
                e.prototype.conversation_id = "",
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.message_type = 0,
                e.prototype.content = "",
                e.prototype.ext = c.emptyObject,
                e.prototype.create_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.send_type && Object.hasOwnProperty.call(e, "send_type") && t.uint32(8).int32(e.send_type),
                    null != e.sender && Object.hasOwnProperty.call(e, "sender") && t.uint32(16).int64(e.sender),
                    null != e.sec_sender && Object.hasOwnProperty.call(e, "sec_sender") && t.uint32(26).string(e.sec_sender),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(34).string(e.conversation_id),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(40).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(48).int32(e.conversation_type),
                    null != e.message_type && Object.hasOwnProperty.call(e, "message_type") && t.uint32(56).int32(e.message_type),
                    null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(66).string(e.content),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(74).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    return null != e.create_time && Object.hasOwnProperty.call(e, "create_time") && t.uint32(80).int64(e.create_time),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.NewP2PMessageNotify; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.send_type = e.int32();
                            break;
                        case 2:
                            i.sender = e.int64();
                            break;
                        case 3:
                            i.sec_sender = e.string();
                            break;
                        case 4:
                            i.conversation_id = e.string();
                            break;
                        case 5:
                            i.conversation_short_id = e.int64();
                            break;
                        case 6:
                            i.conversation_type = e.int32();
                            break;
                        case 7:
                            i.message_type = e.int32();
                            break;
                        case 8:
                            i.content = e.string();
                            break;
                        case 9:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 10:
                            i.create_time = e.int64();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.MessageInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.status = 0,
                e.prototype.body = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(8).int32(e.status),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && l.im_proto.MessageBody.encode(e.body, t.uint32(18).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessageInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.status = e.int32();
                            break;
                        case 2:
                            o.body = l.im_proto.MessageBody.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetMessageByIdRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(32).int64(e.server_message_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetMessageByIdRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.server_message_id = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetMessageByIdResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.msg_info = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.msg_info && Object.hasOwnProperty.call(e, "msg_info") && l.im_proto.MessageInfo.encode(e.msg_info, t.uint32(10).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetMessageByIdResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.msg_info = l.im_proto.MessageInfo.decode(e, e.uint32()) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.send_message_body = null,
                e.prototype.messages_per_user_body = null,
                e.prototype.messages_per_user_init_v2_body = null,
                e.prototype.get_message_by_id_body = null,
                e.prototype.messages_in_conversation_body = null,
                e.prototype.get_messages_checkinfo_in_conversation_body = null,
                e.prototype.has_new_message_notify = null,
                e.prototype.has_new_p2p_message_notify = null,
                e.prototype.get_conversations_checkinfo_body = null,
                e.prototype.create_conversation_v2_body = null,
                e.prototype.get_conversation_info_list_v2_body = null,
                e.prototype.get_conversation_info_list_by_favorite_v2_body = null,
                e.prototype.get_conversation_info_list_by_top_v2_body = null,
                e.prototype.conversation_participants_body = null,
                e.prototype.conversation_add_participants_body = null,
                e.prototype.conversation_remove_participants_body = null,
                e.prototype.mget_conversation_participants_body = null,
                e.prototype.update_conversation_participant_body = null,
                e.prototype.modify_message_property_body = null,
                e.prototype.audio_recognition_body = null,
                e.prototype.get_conversation_core_info_body = null,
                e.prototype.set_conversation_core_info_body = null,
                e.prototype.upsert_conversation_core_ext_info_body = null,
                e.prototype.set_conversation_setting_info_body = null,
                e.prototype.upsert_conversation_setting_ext_info_body = null,
                e.prototype.get_stranger_conversation_body = null,
                e.prototype.get_stranger_messages_body = null,
                e.prototype.participants_read_index_body = null,
                e.prototype.participants_min_index_body = null,
                e.prototype.get_upload_token_body = null,
                e.prototype.get_media_urls_body = null,
                e.prototype.batch_get_conversation_participants_readindex = null,
                e.prototype.get_ticket_body = null,
                e.prototype.get_conversation_list_body = null,
                e.prototype.broadcast_send_message_body = null,
                e.prototype.broadcast_recv_message_body = null,
                e.prototype.broadcast_user_counter_body = null,
                e.prototype.create_voip_body = null,
                e.prototype.call_voip_body = null,
                e.prototype.update_voip_body = null,
                e.prototype.profile_get_info = null,
                e.prototype.get_configs_body = null,
                e.prototype.unread_count_report_body = null,
                e.prototype.block_members_body = null,
                e.prototype.get_unread_count_body = null,
                e.prototype.send_message_p2p_body = null,
                e.prototype.get_blocklist_body = null,
                e.prototype.set_blocklist_body = null,
                e.prototype.check_in_blocklist_body = null,
                e.prototype.mark_message_body = null,
                e.prototype.pull_mark_message_body = null,
                e.prototype.message_by_init = null,
                e.prototype.mark_msg_unread_count_report = null,
                e.prototype.mark_msg_get_unread_count = null,
                e.prototype.batch_unmark_message = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.send_message_body && Object.hasOwnProperty.call(e, "send_message_body") && l.im_proto.SendMessageResponseBody.encode(e.send_message_body, t.uint32(802).fork()).ldelim(),
                    null != e.messages_per_user_body && Object.hasOwnProperty.call(e, "messages_per_user_body") && l.im_proto.MessagesPerUserResponseBody.encode(e.messages_per_user_body, t.uint32(1602).fork()).ldelim(),
                    null != e.messages_per_user_init_v2_body && Object.hasOwnProperty.call(e, "messages_per_user_init_v2_body") && l.im_proto.MessagesPerUserInitV2ResponseBody.encode(e.messages_per_user_init_v2_body, t.uint32(1626).fork()).ldelim(),
                    null != e.get_message_by_id_body && Object.hasOwnProperty.call(e, "get_message_by_id_body") && l.im_proto.GetMessageByIdResponseBody.encode(e.get_message_by_id_body, t.uint32(1690).fork()).ldelim(),
                    null != e.messages_in_conversation_body && Object.hasOwnProperty.call(e, "messages_in_conversation_body") && l.im_proto.MessagesInConversationResponseBody.encode(e.messages_in_conversation_body, t.uint32(2410).fork()).ldelim(),
                    null != e.get_messages_checkinfo_in_conversation_body && Object.hasOwnProperty.call(e, "get_messages_checkinfo_in_conversation_body") && l.im_proto.GetMessagesCheckInfoInConversationResponseBody.encode(e.get_messages_checkinfo_in_conversation_body, t.uint32(2418).fork()).ldelim(),
                    null != e.has_new_message_notify && Object.hasOwnProperty.call(e, "has_new_message_notify") && l.im_proto.NewMessageNotify.encode(e.has_new_message_notify, t.uint32(4002).fork()).ldelim(),
                    null != e.has_new_p2p_message_notify && Object.hasOwnProperty.call(e, "has_new_p2p_message_notify") && l.im_proto.NewP2PMessageNotify.encode(e.has_new_p2p_message_notify, t.uint32(4034).fork()).ldelim(),
                    null != e.conversation_participants_body && Object.hasOwnProperty.call(e, "conversation_participants_body") && l.im_proto.ConversationParticipantsListResponseBody.encode(e.conversation_participants_body, t.uint32(4842).fork()).ldelim(),
                    null != e.create_conversation_v2_body && Object.hasOwnProperty.call(e, "create_conversation_v2_body") && l.im_proto.CreateConversationV2ResponseBody.encode(e.create_conversation_v2_body, t.uint32(4874).fork()).ldelim(),
                    null != e.get_conversation_info_list_v2_body && Object.hasOwnProperty.call(e, "get_conversation_info_list_v2_body") && l.im_proto.GetConversationInfoListV2ResponseBody.encode(e.get_conversation_info_list_v2_body, t.uint32(4882).fork()).ldelim(),
                    null != e.get_conversation_info_list_by_favorite_v2_body && Object.hasOwnProperty.call(e, "get_conversation_info_list_by_favorite_v2_body") && l.im_proto.GetConversationInfoListByFavoriteV2ResponseBody.encode(e.get_conversation_info_list_by_favorite_v2_body, t.uint32(4890).fork()).ldelim(),
                    null != e.get_conversation_info_list_by_top_v2_body && Object.hasOwnProperty.call(e, "get_conversation_info_list_by_top_v2_body") && l.im_proto.GetConversationInfoListByTopV2ResponseBody.encode(e.get_conversation_info_list_by_top_v2_body, t.uint32(4898).fork()).ldelim(),
                    null != e.get_conversations_checkinfo_body && Object.hasOwnProperty.call(e, "get_conversations_checkinfo_body") && l.im_proto.GetConversationsCheckInfoResponseBody.encode(e.get_conversations_checkinfo_body, t.uint32(4922).fork()).ldelim(),
                    null != e.conversation_add_participants_body && Object.hasOwnProperty.call(e, "conversation_add_participants_body") && l.im_proto.ConversationAddParticipantsResponseBody.encode(e.conversation_add_participants_body, t.uint32(5202).fork()).ldelim(),
                    null != e.conversation_remove_participants_body && Object.hasOwnProperty.call(e, "conversation_remove_participants_body") && l.im_proto.ConversationRemoveParticipantsResponseBody.encode(e.conversation_remove_participants_body, t.uint32(5210).fork()).ldelim(),
                    null != e.mget_conversation_participants_body && Object.hasOwnProperty.call(e, "mget_conversation_participants_body") && l.im_proto.MgetConversationParticipantsResponseBody.encode(e.mget_conversation_participants_body, t.uint32(5234).fork()).ldelim(),
                    null != e.update_conversation_participant_body && Object.hasOwnProperty.call(e, "update_conversation_participant_body") && l.im_proto.UpdateConversationParticipantResponseBody.encode(e.update_conversation_participant_body, t.uint32(5242).fork()).ldelim(),
                    null != e.modify_message_property_body && Object.hasOwnProperty.call(e, "modify_message_property_body") && l.im_proto.ModifyMessagePropertyResponseBody.encode(e.modify_message_property_body, t.uint32(5642).fork()).ldelim(),
                    null != e.get_conversation_core_info_body && Object.hasOwnProperty.call(e, "get_conversation_core_info_body") && l.im_proto.GetConversationCoreInfoResponseBody.encode(e.get_conversation_core_info_body, t.uint32(7210).fork()).ldelim(),
                    null != e.set_conversation_core_info_body && Object.hasOwnProperty.call(e, "set_conversation_core_info_body") && l.im_proto.SetConversationCoreInfoResponseBody.encode(e.set_conversation_core_info_body, t.uint32(7218).fork()).ldelim(),
                    null != e.upsert_conversation_core_ext_info_body && Object.hasOwnProperty.call(e, "upsert_conversation_core_ext_info_body") && l.im_proto.UpsertConversationCoreExtInfoResponseBody.encode(e.upsert_conversation_core_ext_info_body, t.uint32(7234).fork()).ldelim(),
                    null != e.set_conversation_setting_info_body && Object.hasOwnProperty.call(e, "set_conversation_setting_info_body") && l.im_proto.SetConversationSettingInfoResponseBody.encode(e.set_conversation_setting_info_body, t.uint32(7370).fork()).ldelim(),
                    null != e.upsert_conversation_setting_ext_info_body && Object.hasOwnProperty.call(e, "upsert_conversation_setting_ext_info_body") && l.im_proto.UpsertConversationSettingExtInfoResponseBody.encode(e.upsert_conversation_setting_ext_info_body, t.uint32(7378).fork()).ldelim(),
                    null != e.get_stranger_conversation_body && Object.hasOwnProperty.call(e, "get_stranger_conversation_body") && l.im_proto.GetStrangerConversationListResponseBody.encode(e.get_stranger_conversation_body, t.uint32(8002).fork()).ldelim(),
                    null != e.get_stranger_messages_body && Object.hasOwnProperty.call(e, "get_stranger_messages_body") && l.im_proto.GetStrangerMessagesResponseBody.encode(e.get_stranger_messages_body, t.uint32(8010).fork()).ldelim(),
                    null != e.participants_read_index_body && Object.hasOwnProperty.call(e, "participants_read_index_body") && l.im_proto.GetConversationParticipantsReadIndexV3ResponseBody.encode(e.participants_read_index_body, t.uint32(16002).fork()).ldelim(),
                    null != e.participants_min_index_body && Object.hasOwnProperty.call(e, "participants_min_index_body") && l.im_proto.GetConversationParticipantsMinIndexV3ResponseBody.encode(e.participants_min_index_body, t.uint32(16010).fork()).ldelim(),
                    null != e.get_upload_token_body && Object.hasOwnProperty.call(e, "get_upload_token_body") && l.im_proto.GetUploadTokenResponseBody.encode(e.get_upload_token_body, t.uint32(16026).fork()).ldelim(),
                    null != e.get_media_urls_body && Object.hasOwnProperty.call(e, "get_media_urls_body") && l.im_proto.GetMediaUrlsResponseBody.encode(e.get_media_urls_body, t.uint32(16034).fork()).ldelim(),
                    null != e.get_ticket_body && Object.hasOwnProperty.call(e, "get_ticket_body") && l.im_proto.GetTicketResponseBody.encode(e.get_ticket_body, t.uint32(16042).fork()).ldelim(),
                    null != e.get_conversation_list_body && Object.hasOwnProperty.call(e, "get_conversation_list_body") && l.im_proto.GetUserConversationListResponseBody.encode(e.get_conversation_list_body, t.uint32(16050).fork()).ldelim(),
                    null != e.broadcast_send_message_body && Object.hasOwnProperty.call(e, "broadcast_send_message_body") && l.im_proto.BroadcastSendMessageResponseBody.encode(e.broadcast_send_message_body, t.uint32(16058).fork()).ldelim(),
                    null != e.broadcast_recv_message_body && Object.hasOwnProperty.call(e, "broadcast_recv_message_body") && l.im_proto.BroadcastRecvMessageResponseBody.encode(e.broadcast_recv_message_body, t.uint32(16066).fork()).ldelim(),
                    null != e.broadcast_user_counter_body && Object.hasOwnProperty.call(e, "broadcast_user_counter_body") && l.im_proto.BroadcastUserCounterResponseBody.encode(e.broadcast_user_counter_body, t.uint32(16074).fork()).ldelim(),
                    null != e.create_voip_body && Object.hasOwnProperty.call(e, "create_voip_body") && l.im_proto.CreateVoipResponseBody.encode(e.create_voip_body, t.uint32(16090).fork()).ldelim(),
                    null != e.call_voip_body && Object.hasOwnProperty.call(e, "call_voip_body") && l.im_proto.CallVoipResponseBody.encode(e.call_voip_body, t.uint32(16098).fork()).ldelim(),
                    null != e.update_voip_body && Object.hasOwnProperty.call(e, "update_voip_body") && l.im_proto.UpdateVoipResponseBody.encode(e.update_voip_body, t.uint32(16106).fork()).ldelim(),
                    null != e.profile_get_info && Object.hasOwnProperty.call(e, "profile_get_info") && l.im_proto.ProfileGetInfoResponseBody.encode(e.profile_get_info, t.uint32(16122).fork()).ldelim(),
                    null != e.get_configs_body && Object.hasOwnProperty.call(e, "get_configs_body") && l.im_proto.GetConfigsResponseBody.encode(e.get_configs_body, t.uint32(16138).fork()).ldelim(),
                    null != e.unread_count_report_body && Object.hasOwnProperty.call(e, "unread_count_report_body") && l.im_proto.UnReadCountReportResponseBody.encode(e.unread_count_report_body, t.uint32(16146).fork()).ldelim(),
                    null != e.block_members_body && Object.hasOwnProperty.call(e, "block_members_body") && l.im_proto.BlockMembersResponseBody.encode(e.block_members_body, t.uint32(16154).fork()).ldelim(),
                    null != e.get_unread_count_body && Object.hasOwnProperty.call(e, "get_unread_count_body") && l.im_proto.GetUnreadCountResponseBody.encode(e.get_unread_count_body, t.uint32(16242).fork()).ldelim(),
                    null != e.send_message_p2p_body && Object.hasOwnProperty.call(e, "send_message_p2p_body") && l.im_proto.SendMessageP2PResponseBody.encode(e.send_message_p2p_body, t.uint32(16250).fork()).ldelim(),
                    null != e.get_blocklist_body && Object.hasOwnProperty.call(e, "get_blocklist_body") && l.im_proto.GetBlockListResponseBody.encode(e.get_blocklist_body, t.uint32(16258).fork()).ldelim(),
                    null != e.set_blocklist_body && Object.hasOwnProperty.call(e, "set_blocklist_body") && l.im_proto.SetBlocklistResponseBody.encode(e.set_blocklist_body, t.uint32(16266).fork()).ldelim(),
                    null != e.check_in_blocklist_body && Object.hasOwnProperty.call(e, "check_in_blocklist_body") && l.im_proto.CheckInBlockListResponseBody.encode(e.check_in_blocklist_body, t.uint32(16274).fork()).ldelim(),
                    null != e.mark_message_body && Object.hasOwnProperty.call(e, "mark_message_body") && l.im_proto.MarkMessageResponseBody.encode(e.mark_message_body, t.uint32(16290).fork()).ldelim(),
                    null != e.pull_mark_message_body && Object.hasOwnProperty.call(e, "pull_mark_message_body") && l.im_proto.PullMarkMessageResponseBody.encode(e.pull_mark_message_body, t.uint32(16298).fork()).ldelim(),
                    null != e.batch_get_conversation_participants_readindex && Object.hasOwnProperty.call(e, "batch_get_conversation_participants_readindex") && l.im_proto.BatchGetConversationParticipantsReadIndexResponseBody.encode(e.batch_get_conversation_participants_readindex, t.uint32(16306).fork()).ldelim(),
                    null != e.message_by_init && Object.hasOwnProperty.call(e, "message_by_init") && l.im_proto.MessageByInitResponseBody.encode(e.message_by_init, t.uint32(16346).fork()).ldelim(),
                    null != e.mark_msg_unread_count_report && Object.hasOwnProperty.call(e, "mark_msg_unread_count_report") && l.im_proto.MarkMsgUnreadCountReportResponseBody.encode(e.mark_msg_unread_count_report, t.uint32(16434).fork()).ldelim(),
                    null != e.mark_msg_get_unread_count && Object.hasOwnProperty.call(e, "mark_msg_get_unread_count") && l.im_proto.MarkMsgGetUnreadCountResponseBody.encode(e.mark_msg_get_unread_count, t.uint32(16442).fork()).ldelim(),
                    null != e.batch_unmark_message && Object.hasOwnProperty.call(e, "batch_unmark_message") && l.im_proto.BatchUnmarkMessageResponseBody.encode(e.batch_unmark_message, t.uint32(16450).fork()).ldelim(),
                    null != e.audio_recognition_body && Object.hasOwnProperty.call(e, "audio_recognition_body") && l.im_proto.AudioRecognitionResponseBody.encode(e.audio_recognition_body, t.uint32(16474).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 100:
                            o.send_message_body = l.im_proto.SendMessageResponseBody.decode(e, e.uint32());
                            break;
                        case 200:
                            o.messages_per_user_body = l.im_proto.MessagesPerUserResponseBody.decode(e, e.uint32());
                            break;
                        case 203:
                            o.messages_per_user_init_v2_body = l.im_proto.MessagesPerUserInitV2ResponseBody.decode(e, e.uint32());
                            break;
                        case 211:
                            o.get_message_by_id_body = l.im_proto.GetMessageByIdResponseBody.decode(e, e.uint32());
                            break;
                        case 301:
                            o.messages_in_conversation_body = l.im_proto.MessagesInConversationResponseBody.decode(e, e.uint32());
                            break;
                        case 302:
                            o.get_messages_checkinfo_in_conversation_body = l.im_proto.GetMessagesCheckInfoInConversationResponseBody.decode(e, e.uint32());
                            break;
                        case 500:
                            o.has_new_message_notify = l.im_proto.NewMessageNotify.decode(e, e.uint32());
                            break;
                        case 504:
                            o.has_new_p2p_message_notify = l.im_proto.NewP2PMessageNotify.decode(e, e.uint32());
                            break;
                        case 615:
                            o.get_conversations_checkinfo_body = l.im_proto.GetConversationsCheckInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 609:
                            o.create_conversation_v2_body = l.im_proto.CreateConversationV2ResponseBody.decode(e, e.uint32());
                            break;
                        case 610:
                            o.get_conversation_info_list_v2_body = l.im_proto.GetConversationInfoListV2ResponseBody.decode(e, e.uint32());
                            break;
                        case 611:
                            o.get_conversation_info_list_by_favorite_v2_body = l.im_proto.GetConversationInfoListByFavoriteV2ResponseBody.decode(e, e.uint32());
                            break;
                        case 612:
                            o.get_conversation_info_list_by_top_v2_body = l.im_proto.GetConversationInfoListByTopV2ResponseBody.decode(e, e.uint32());
                            break;
                        case 605:
                            o.conversation_participants_body = l.im_proto.ConversationParticipantsListResponseBody.decode(e, e.uint32());
                            break;
                        case 650:
                            o.conversation_add_participants_body = l.im_proto.ConversationAddParticipantsResponseBody.decode(e, e.uint32());
                            break;
                        case 651:
                            o.conversation_remove_participants_body = l.im_proto.ConversationRemoveParticipantsResponseBody.decode(e, e.uint32());
                            break;
                        case 654:
                            o.mget_conversation_participants_body = l.im_proto.MgetConversationParticipantsResponseBody.decode(e, e.uint32());
                            break;
                        case 655:
                            o.update_conversation_participant_body = l.im_proto.UpdateConversationParticipantResponseBody.decode(e, e.uint32());
                            break;
                        case 705:
                            o.modify_message_property_body = l.im_proto.ModifyMessagePropertyResponseBody.decode(e, e.uint32());
                            break;
                        case 2059:
                            o.audio_recognition_body = l.im_proto.AudioRecognitionResponseBody.decode(e, e.uint32());
                            break;
                        case 901:
                            o.get_conversation_core_info_body = l.im_proto.GetConversationCoreInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 902:
                            o.set_conversation_core_info_body = l.im_proto.SetConversationCoreInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 904:
                            o.upsert_conversation_core_ext_info_body = l.im_proto.UpsertConversationCoreExtInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 921:
                            o.set_conversation_setting_info_body = l.im_proto.SetConversationSettingInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 922:
                            o.upsert_conversation_setting_ext_info_body = l.im_proto.UpsertConversationSettingExtInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 1e3:
                            o.get_stranger_conversation_body = l.im_proto.GetStrangerConversationListResponseBody.decode(e, e.uint32());
                            break;
                        case 1001:
                            o.get_stranger_messages_body = l.im_proto.GetStrangerMessagesResponseBody.decode(e, e.uint32());
                            break;
                        case 2e3:
                            o.participants_read_index_body = l.im_proto.GetConversationParticipantsReadIndexV3ResponseBody.decode(e, e.uint32());
                            break;
                        case 2001:
                            o.participants_min_index_body = l.im_proto.GetConversationParticipantsMinIndexV3ResponseBody.decode(e, e.uint32());
                            break;
                        case 2003:
                            o.get_upload_token_body = l.im_proto.GetUploadTokenResponseBody.decode(e, e.uint32());
                            break;
                        case 2004:
                            o.get_media_urls_body = l.im_proto.GetMediaUrlsResponseBody.decode(e, e.uint32());
                            break;
                        case 2038:
                            o.batch_get_conversation_participants_readindex = l.im_proto.BatchGetConversationParticipantsReadIndexResponseBody.decode(e, e.uint32());
                            break;
                        case 2005:
                            o.get_ticket_body = l.im_proto.GetTicketResponseBody.decode(e, e.uint32());
                            break;
                        case 2006:
                            o.get_conversation_list_body = l.im_proto.GetUserConversationListResponseBody.decode(e, e.uint32());
                            break;
                        case 2007:
                            o.broadcast_send_message_body = l.im_proto.BroadcastSendMessageResponseBody.decode(e, e.uint32());
                            break;
                        case 2008:
                            o.broadcast_recv_message_body = l.im_proto.BroadcastRecvMessageResponseBody.decode(e, e.uint32());
                            break;
                        case 2009:
                            o.broadcast_user_counter_body = l.im_proto.BroadcastUserCounterResponseBody.decode(e, e.uint32());
                            break;
                        case 2011:
                            o.create_voip_body = l.im_proto.CreateVoipResponseBody.decode(e, e.uint32());
                            break;
                        case 2012:
                            o.call_voip_body = l.im_proto.CallVoipResponseBody.decode(e, e.uint32());
                            break;
                        case 2013:
                            o.update_voip_body = l.im_proto.UpdateVoipResponseBody.decode(e, e.uint32());
                            break;
                        case 2015:
                            o.profile_get_info = l.im_proto.ProfileGetInfoResponseBody.decode(e, e.uint32());
                            break;
                        case 2017:
                            o.get_configs_body = l.im_proto.GetConfigsResponseBody.decode(e, e.uint32());
                            break;
                        case 2018:
                            o.unread_count_report_body = l.im_proto.UnReadCountReportResponseBody.decode(e, e.uint32());
                            break;
                        case 2019:
                            o.block_members_body = l.im_proto.BlockMembersResponseBody.decode(e, e.uint32());
                            break;
                        case 2030:
                            o.get_unread_count_body = l.im_proto.GetUnreadCountResponseBody.decode(e, e.uint32());
                            break;
                        case 2031:
                            o.send_message_p2p_body = l.im_proto.SendMessageP2PResponseBody.decode(e, e.uint32());
                            break;
                        case 2032:
                            o.get_blocklist_body = l.im_proto.GetBlockListResponseBody.decode(e, e.uint32());
                            break;
                        case 2033:
                            o.set_blocklist_body = l.im_proto.SetBlocklistResponseBody.decode(e, e.uint32());
                            break;
                        case 2034:
                            o.check_in_blocklist_body = l.im_proto.CheckInBlockListResponseBody.decode(e, e.uint32());
                            break;
                        case 2036:
                            o.mark_message_body = l.im_proto.MarkMessageResponseBody.decode(e, e.uint32());
                            break;
                        case 2037:
                            o.pull_mark_message_body = l.im_proto.PullMarkMessageResponseBody.decode(e, e.uint32());
                            break;
                        case 2043:
                            o.message_by_init = l.im_proto.MessageByInitResponseBody.decode(e, e.uint32());
                            break;
                        case 2054:
                            o.mark_msg_unread_count_report = l.im_proto.MarkMsgUnreadCountReportResponseBody.decode(e, e.uint32());
                            break;
                        case 2055:
                            o.mark_msg_get_unread_count = l.im_proto.MarkMsgGetUnreadCountResponseBody.decode(e, e.uint32());
                            break;
                        case 2056:
                            o.batch_unmark_message = l.im_proto.BatchUnmarkMessageResponseBody.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.Response = function() {
                function e(e) {
                    if (this.headers = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cmd = 0,
                e.prototype.sequence_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.status_code = 0,
                e.prototype.error_desc = "",
                e.prototype.inbox_type = 0,
                e.prototype.body = null,
                e.prototype.log_id = "",
                e.prototype.headers = c.emptyObject,
                e.prototype.start_time_stamp = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.request_arrived_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_execution_end_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.cmd && Object.hasOwnProperty.call(e, "cmd") && t.uint32(8).int32(e.cmd),
                    null != e.sequence_id && Object.hasOwnProperty.call(e, "sequence_id") && t.uint32(16).int64(e.sequence_id),
                    null != e.status_code && Object.hasOwnProperty.call(e, "status_code") && t.uint32(24).int32(e.status_code),
                    null != e.error_desc && Object.hasOwnProperty.call(e, "error_desc") && t.uint32(34).string(e.error_desc),
                    null != e.inbox_type && Object.hasOwnProperty.call(e, "inbox_type") && t.uint32(40).int32(e.inbox_type),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && l.im_proto.ResponseBody.encode(e.body, t.uint32(50).fork()).ldelim(),
                    null != e.log_id && Object.hasOwnProperty.call(e, "log_id") && t.uint32(58).string(e.log_id),
                    null != e.headers && Object.hasOwnProperty.call(e, "headers"))
                        for (var n = Object.keys(e.headers), o = 0; o < n.length; ++o)
                            t.uint32(66).fork().uint32(10).string(n[o]).uint32(18).string(e.headers[n[o]]).ldelim();
                    return null != e.start_time_stamp && Object.hasOwnProperty.call(e, "start_time_stamp") && t.uint32(72).int64(e.start_time_stamp),
                    null != e.request_arrived_time && Object.hasOwnProperty.call(e, "request_arrived_time") && t.uint32(80).int64(e.request_arrived_time),
                    null != e.server_execution_end_time && Object.hasOwnProperty.call(e, "server_execution_end_time") && t.uint32(88).int64(e.server_execution_end_time),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.Response; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.cmd = e.int32();
                            break;
                        case 2:
                            i.sequence_id = e.int64();
                            break;
                        case 3:
                            i.status_code = e.int32();
                            break;
                        case 4:
                            i.error_desc = e.string();
                            break;
                        case 5:
                            i.inbox_type = e.int32();
                            break;
                        case 6:
                            i.body = l.im_proto.ResponseBody.decode(e, e.uint32());
                            break;
                        case 7:
                            i.log_id = e.string();
                            break;
                        case 8:
                            i.headers === c.emptyObject && (i.headers = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.headers[n] = o;
                            break;
                        case 9:
                            i.start_time_stamp = e.int64();
                            break;
                        case 10:
                            i.request_arrived_time = e.int64();
                            break;
                        case 11:
                            i.server_execution_end_time = e.int64();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.BroadcastSendMessageRequestBody = function() {
                function e(e) {
                    if (this.ext = {},
                    this.mentioned_users = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.content = "",
                e.prototype.ext = c.emptyObject,
                e.prototype.message_type = 0,
                e.prototype.ticket = "",
                e.prototype.client_message_id = "",
                e.prototype.mentioned_users = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(34).string(e.content),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext"))
                        for (var n = Object.keys(e.ext), o = 0; o < n.length; ++o)
                            t.uint32(42).fork().uint32(10).string(n[o]).uint32(18).string(e.ext[n[o]]).ldelim();
                    if (null != e.message_type && Object.hasOwnProperty.call(e, "message_type") && t.uint32(48).int32(e.message_type),
                    null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(58).string(e.ticket),
                    null != e.client_message_id && Object.hasOwnProperty.call(e, "client_message_id") && t.uint32(66).string(e.client_message_id),
                    null != e.mentioned_users && e.mentioned_users.length)
                        for (o = 0; o < e.mentioned_users.length; ++o)
                            t.uint32(72).int64(e.mentioned_users[o]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.BroadcastSendMessageRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 3:
                            i.conversation_short_id = e.int64();
                            break;
                        case 4:
                            i.content = e.string();
                            break;
                        case 5:
                            i.ext === c.emptyObject && (i.ext = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 6:
                            i.message_type = e.int32();
                            break;
                        case 7:
                            i.ticket = e.string();
                            break;
                        case 8:
                            i.client_message_id = e.string();
                            break;
                        case 9:
                            if (i.mentioned_users && i.mentioned_users.length || (i.mentioned_users = []),
                            2 == (7 & a))
                                for (d = e.uint32() + e.pos; e.pos < d; )
                                    i.mentioned_users.push(e.int64());
                            else
                                i.mentioned_users.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.BroadcastSendMessageResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.extra_info = "",
                e.prototype.status = 0,
                e.prototype.client_message_id = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(8).int64(e.server_message_id),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(18).string(e.extra_info),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).int32(e.status),
                    null != e.client_message_id && Object.hasOwnProperty.call(e, "client_message_id") && t.uint32(34).string(e.client_message_id),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(40).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(50).string(e.check_message),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BroadcastSendMessageResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.server_message_id = e.int64();
                            break;
                        case 2:
                            o.extra_info = e.string();
                            break;
                        case 3:
                            o.status = e.int32();
                            break;
                        case 4:
                            o.client_message_id = e.string();
                            break;
                        case 5:
                            o.check_code = e.int64();
                            break;
                        case 6:
                            o.check_message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BroadcastRecvMessageRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.reverse = !1,
                e.prototype.pull_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(32).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(40).int64(e.limit),
                    null != e.reverse && Object.hasOwnProperty.call(e, "reverse") && t.uint32(48).bool(e.reverse),
                    null != e.pull_type && Object.hasOwnProperty.call(e, "pull_type") && t.uint32(56).int32(e.pull_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BroadcastRecvMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.cursor = e.int64();
                            break;
                        case 5:
                            o.limit = e.int64();
                            break;
                        case 6:
                            o.reverse = e.bool();
                            break;
                        case 7:
                            o.pull_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BroadcastRecvMessageResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(24).int64(e.next_cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BroadcastRecvMessageResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationRequest = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationRequest; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BroadcastUserCounterRequestBody = function() {
                function e(e) {
                    if (this.conversations = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversations = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversations && e.conversations.length)
                        for (var n = 0; n < e.conversations.length; ++n)
                            l.im_proto.ConversationRequest.encode(e.conversations[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BroadcastUserCounterRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.conversations && o.conversations.length || (o.conversations = []),
                        o.conversations.push(l.im_proto.ConversationRequest.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.BroadcastUserInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.counter = 0,
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.counter && Object.hasOwnProperty.call(e, "counter") && t.uint32(16).int32(e.counter),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BroadcastUserInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.counter = e.int32();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BroadcastUserCounterResponseBody = function() {
                function e(e) {
                    if (this.infos = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.infos = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.infos && e.infos.length)
                        for (var n = 0; n < e.infos.length; ++n)
                            l.im_proto.BroadcastUserInfo.encode(e.infos[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BroadcastUserCounterResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.infos && o.infos.length || (o.infos = []),
                        o.infos.push(l.im_proto.BroadcastUserInfo.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.NetworkType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "UNKNOWN"] = 0,
                t[e[1] = "WIFI"] = 1,
                t[e[2] = "MOBILE_2G"] = 2,
                t[e[3] = "MOBILE_3G"] = 3,
                t[e[4] = "MOBILE_4G"] = 4,
                t[e[5] = "MOBILE_5G"] = 5,
                t
            }(),
            e.MsgReportType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "NOT_USE"] = 0,
                t[e[1] = "MSG_RECEIVE_BY_WS"] = 1,
                t[e[2] = "MSG_RECEIVE_BY_USER"] = 2,
                t[e[3] = "MSG_RECEIVE_BY_INIT"] = 3,
                t[e[4] = "MSG_RECEIVE_BY_LOAD_HISTORY"] = 4,
                t[e[5] = "MSG_RECEIVE_BY_LOAD_NEWER"] = 5,
                t[e[6] = "MSG_RECEIVE_BY_CHECK_MSG_V1"] = 6,
                t[e[7] = "MSG_RECEIVE_BY_CHECK_MSG_V2"] = 7,
                t[e[8] = "MSG_RECEIVE_BY_STRANGER"] = 8,
                t[e[9] = "MSG_SHOW"] = 9,
                t
            }(),
            e.ClientACKRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.start_time_stamp = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.cmd = 0,
                e.prototype.network_type = 0,
                e.prototype.logid = "",
                e.prototype.client_time_stamp = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(8).int64(e.start_time_stamp),
                    t.uint32(16).int32(e.cmd),
                    null != e.network_type && Object.hasOwnProperty.call(e, "network_type") && t.uint32(24).int32(e.network_type),
                    null != e.logid && Object.hasOwnProperty.call(e, "logid") && t.uint32(34).string(e.logid),
                    null != e.client_time_stamp && Object.hasOwnProperty.call(e, "client_time_stamp") && t.uint32(40).int64(e.client_time_stamp),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(48).int64(e.server_message_id),
                    t.uint32(56).int32(e.type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ClientACKRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.start_time_stamp = e.int64();
                            break;
                        case 2:
                            o.cmd = e.int32();
                            break;
                        case 3:
                            o.network_type = e.int32();
                            break;
                        case 4:
                            o.logid = e.string();
                            break;
                        case 5:
                            o.client_time_stamp = e.int64();
                            break;
                        case 6:
                            o.server_message_id = e.int64();
                            break;
                        case 7:
                            o.type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("start_time_stamp"))
                        throw c.ProtocolError("missing required 'start_time_stamp'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("cmd"))
                        throw c.ProtocolError("missing required 'cmd'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("type"))
                        throw c.ProtocolError("missing required 'type'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.ClientBatchACKRequestBody = function() {
                function e(e) {
                    if (this.ack_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.ack_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.ack_list && e.ack_list.length)
                        for (var n = 0; n < e.ack_list.length; ++n)
                            l.im_proto.ClientACKRequestBody.encode(e.ack_list[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ClientBatchACKRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.ack_list && o.ack_list.length || (o.ack_list = []),
                        o.ack_list.push(l.im_proto.ClientACKRequestBody.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.VoipMode = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "VOIP_MODE_DOUBLE"] = 0,
                t[e[1] = "VOIP_MODE_MULTIPLAYER"] = 1,
                t
            }(),
            e.VoipStatusCode = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "SUCCESS"] = 0,
                t[e[4] = "VOIP_PARAMS_ERROR"] = 4,
                t[e[18] = "VOIP_STATUS_ERROR"] = 18,
                t[e[19] = "VOIP_CANCEL_ERROR"] = 19,
                t[e[20] = "VOIP_OTHER_RESPONSE_ERROR"] = 20,
                t[e[21] = "VOIP_CALLBACK_ERROR"] = 21,
                t
            }(),
            e.VoipStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "IDLE"] = 0,
                t[e[1] = "CALLING"] = 1,
                t[e[2] = "RINGING"] = 2,
                t[e[3] = "ACCEPTED"] = 3,
                t[e[4] = "ONTHECALL"] = 4,
                t[e[101] = "TERMINATED"] = 101,
                t[e[102] = "OCCUPIED"] = 102,
                t[e[103] = "REFUSED"] = 103,
                t[e[104] = "CANCELLED"] = 104,
                t[e[105] = "UNAVAILABLE"] = 105,
                t[e[106] = "RTCERROR"] = 106,
                t[e[107] = "RTC_ENGINE_MISMATCH"] = 107,
                t
            }(),
            e.VoipType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "VOIP_TYPE_NOT_USED"] = 0,
                t[e[1] = "VOIP_TYPE_ALL"] = 1,
                t[e[2] = "VOIP_TYPE_VIDEOONLY"] = 2,
                t[e[3] = "VOIP_TYPE_AUDIOONLY"] = 3,
                t
            }(),
            e.VoipInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.device_id = "",
                e.prototype.channel_id = "",
                e.prototype.token = "",
                e.prototype.status = 0,
                e.prototype.caller_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.created_time_ms = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.updated_time_ms = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.con_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.v_type = 0,
                e.prototype.srv_msg_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(8).int64(e.user_id),
                    null != e.device_id && Object.hasOwnProperty.call(e, "device_id") && t.uint32(18).string(e.device_id),
                    null != e.channel_id && Object.hasOwnProperty.call(e, "channel_id") && t.uint32(26).string(e.channel_id),
                    null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(34).string(e.token),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(40).int32(e.status),
                    null != e.caller_id && Object.hasOwnProperty.call(e, "caller_id") && t.uint32(48).int64(e.caller_id),
                    null != e.created_time_ms && Object.hasOwnProperty.call(e, "created_time_ms") && t.uint32(56).int64(e.created_time_ms),
                    null != e.updated_time_ms && Object.hasOwnProperty.call(e, "updated_time_ms") && t.uint32(64).int64(e.updated_time_ms),
                    null != e.con_short_id && Object.hasOwnProperty.call(e, "con_short_id") && t.uint32(72).int64(e.con_short_id),
                    null != e.v_type && Object.hasOwnProperty.call(e, "v_type") && t.uint32(80).int32(e.v_type),
                    null != e.srv_msg_id && Object.hasOwnProperty.call(e, "srv_msg_id") && t.uint32(88).int64(e.srv_msg_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.VoipInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.user_id = e.int64();
                            break;
                        case 2:
                            o.device_id = e.string();
                            break;
                        case 3:
                            o.channel_id = e.string();
                            break;
                        case 4:
                            o.token = e.string();
                            break;
                        case 5:
                            o.status = e.int32();
                            break;
                        case 6:
                            o.caller_id = e.int64();
                            break;
                        case 7:
                            o.created_time_ms = e.int64();
                            break;
                        case 8:
                            o.updated_time_ms = e.int64();
                            break;
                        case 9:
                            o.con_short_id = e.int64();
                            break;
                        case 10:
                            o.v_type = e.int32();
                            break;
                        case 11:
                            o.srv_msg_id = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.CreateVoipRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.idempotent_id = "",
                e.prototype.v_type = 0,
                e.prototype.con_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.srv_msg_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.ref_channel_id = "",
                e.prototype.voip_mode = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.idempotent_id && Object.hasOwnProperty.call(e, "idempotent_id") && t.uint32(10).string(e.idempotent_id),
                    null != e.v_type && Object.hasOwnProperty.call(e, "v_type") && t.uint32(16).int32(e.v_type),
                    null != e.con_short_id && Object.hasOwnProperty.call(e, "con_short_id") && t.uint32(24).int64(e.con_short_id),
                    null != e.srv_msg_id && Object.hasOwnProperty.call(e, "srv_msg_id") && t.uint32(32).int64(e.srv_msg_id),
                    null != e.ref_channel_id && Object.hasOwnProperty.call(e, "ref_channel_id") && t.uint32(42).string(e.ref_channel_id),
                    null != e.voip_mode && Object.hasOwnProperty.call(e, "voip_mode") && t.uint32(48).int32(e.voip_mode),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.CreateVoipRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.idempotent_id = e.string();
                            break;
                        case 2:
                            o.v_type = e.int32();
                            break;
                        case 3:
                            o.con_short_id = e.int64();
                            break;
                        case 4:
                            o.srv_msg_id = e.int64();
                            break;
                        case 5:
                            o.ref_channel_id = e.string();
                            break;
                        case 6:
                            o.voip_mode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.CreateVoipResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.info = null,
                e.prototype.status_code = 0,
                e.prototype.voip_mode = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.info && Object.hasOwnProperty.call(e, "info") && l.im_proto.VoipInfo.encode(e.info, t.uint32(10).fork()).ldelim(),
                    null != e.status_code && Object.hasOwnProperty.call(e, "status_code") && t.uint32(16).int32(e.status_code),
                    null != e.voip_mode && Object.hasOwnProperty.call(e, "voip_mode") && t.uint32(24).int32(e.voip_mode),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.CreateVoipResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.info = l.im_proto.VoipInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status_code = e.int32();
                            break;
                        case 3:
                            o.voip_mode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.CallVoipRequestBody = function() {
                function e(e) {
                    if (this.callee_ids = [],
                    this.ext = {},
                    this.ref_channel_users = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.callee_ids = c.emptyArray,
                e.prototype.channel_id = "",
                e.prototype.v_type = 0,
                e.prototype.ext = c.emptyObject,
                e.prototype.ref_channel_users = c.emptyArray,
                e.prototype.con_id = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.callee_ids && e.callee_ids.length)
                        for (var n = 0; n < e.callee_ids.length; ++n)
                            t.uint32(8).int64(e.callee_ids[n]);
                    if (null != e.channel_id && Object.hasOwnProperty.call(e, "channel_id") && t.uint32(18).string(e.channel_id),
                    null != e.v_type && Object.hasOwnProperty.call(e, "v_type") && t.uint32(24).int32(e.v_type),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext")) {
                        var o = Object.keys(e.ext);
                        for (n = 0; n < o.length; ++n)
                            t.uint32(34).fork().uint32(10).string(o[n]).uint32(18).string(e.ext[o[n]]).ldelim()
                    }
                    if (null != e.ref_channel_users && e.ref_channel_users.length)
                        for (n = 0; n < e.ref_channel_users.length; ++n)
                            t.uint32(40).int64(e.ref_channel_users[n]);
                    return null != e.con_id && Object.hasOwnProperty.call(e, "con_id") && t.uint32(50).string(e.con_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.CallVoipRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            if (i.callee_ids && i.callee_ids.length || (i.callee_ids = []),
                            2 == (7 & a))
                                for (var d = e.uint32() + e.pos; e.pos < d; )
                                    i.callee_ids.push(e.int64());
                            else
                                i.callee_ids.push(e.int64());
                            break;
                        case 2:
                            i.channel_id = e.string();
                            break;
                        case 3:
                            i.v_type = e.int32();
                            break;
                        case 4:
                            for (i.ext === c.emptyObject && (i.ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 5:
                            if (i.ref_channel_users && i.ref_channel_users.length || (i.ref_channel_users = []),
                            2 == (7 & a))
                                for (d = e.uint32() + e.pos; e.pos < d; )
                                    i.ref_channel_users.push(e.int64());
                            else
                                i.ref_channel_users.push(e.int64());
                            break;
                        case 6:
                            i.con_id = e.string();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.CallVoipResponseBody = function() {
                function e(e) {
                    if (this.callee_ids = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.info = null,
                e.prototype.callee_ids = c.emptyArray,
                e.prototype.status = 0,
                e.prototype.extra_info = "",
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.ref_channel_id = "",
                e.prototype.voip_mode = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.info && Object.hasOwnProperty.call(e, "info") && l.im_proto.VoipInfo.encode(e.info, t.uint32(10).fork()).ldelim(),
                    null != e.callee_ids && e.callee_ids.length)
                        for (var n = 0; n < e.callee_ids.length; ++n)
                            t.uint32(16).int64(e.callee_ids[n]);
                    return null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).int32(e.status),
                    null != e.extra_info && Object.hasOwnProperty.call(e, "extra_info") && t.uint32(34).string(e.extra_info),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(40).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(50).string(e.check_message),
                    null != e.ref_channel_id && Object.hasOwnProperty.call(e, "ref_channel_id") && t.uint32(58).string(e.ref_channel_id),
                    null != e.voip_mode && Object.hasOwnProperty.call(e, "voip_mode") && t.uint32(64).int32(e.voip_mode),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.CallVoipResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.info = l.im_proto.VoipInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            if (o.callee_ids && o.callee_ids.length || (o.callee_ids = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.callee_ids.push(e.int64());
                            else
                                o.callee_ids.push(e.int64());
                            break;
                        case 3:
                            o.status = e.int32();
                            break;
                        case 4:
                            o.extra_info = e.string();
                            break;
                        case 5:
                            o.check_code = e.int64();
                            break;
                        case 6:
                            o.check_message = e.string();
                            break;
                        case 7:
                            o.ref_channel_id = e.string();
                            break;
                        case 8:
                            o.voip_mode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UpdateVoipRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.channel_id = "",
                e.prototype.status = 0,
                e.prototype.v_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.channel_id && Object.hasOwnProperty.call(e, "channel_id") && t.uint32(10).string(e.channel_id),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status),
                    null != e.v_type && Object.hasOwnProperty.call(e, "v_type") && t.uint32(24).int32(e.v_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UpdateVoipRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.channel_id = e.string();
                            break;
                        case 2:
                            o.status = e.int32();
                            break;
                        case 3:
                            o.v_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UpdateVoipResponseBody = function() {
                function e(e) {
                    if (this.callees = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.info = null,
                e.prototype.status_code = 0,
                e.prototype.voip_mode = 0,
                e.prototype.callees = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.info && Object.hasOwnProperty.call(e, "info") && l.im_proto.VoipInfo.encode(e.info, t.uint32(10).fork()).ldelim(),
                    null != e.status_code && Object.hasOwnProperty.call(e, "status_code") && t.uint32(16).int32(e.status_code),
                    null != e.voip_mode && Object.hasOwnProperty.call(e, "voip_mode") && t.uint32(24).int32(e.voip_mode),
                    null != e.callees && e.callees.length)
                        for (var n = 0; n < e.callees.length; ++n)
                            t.uint32(32).int64(e.callees[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UpdateVoipResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.info = l.im_proto.VoipInfo.decode(e, e.uint32());
                            break;
                        case 2:
                            o.status_code = e.int32();
                            break;
                        case 3:
                            o.voip_mode = e.int32();
                            break;
                        case 4:
                            if (o.callees && o.callees.length || (o.callees = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.callees.push(e.int64());
                            else
                                o.callees.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ChannelStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "CHANNEL_STATUS_NOT_USED"] = 0,
                t[e[1] = "ONLINE"] = 1,
                t[e[2] = "OFFLINE"] = 2,
                t
            }(),
            e.ChannelHeartBeatRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.channel_id = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.channel_id && Object.hasOwnProperty.call(e, "channel_id") && t.uint32(10).string(e.channel_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ChannelHeartBeatRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.channel_id = e.string() : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.Profile = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.nick_name = "",
                e.prototype.protrait = "",
                e.prototype.basic_ext_info = "",
                e.prototype.detail_ext_info = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.nick_name && Object.hasOwnProperty.call(e, "nick_name") && t.uint32(10).string(e.nick_name),
                    null != e.protrait && Object.hasOwnProperty.call(e, "protrait") && t.uint32(18).string(e.protrait),
                    null != e.basic_ext_info && Object.hasOwnProperty.call(e, "basic_ext_info") && t.uint32(26).string(e.basic_ext_info),
                    null != e.detail_ext_info && Object.hasOwnProperty.call(e, "detail_ext_info") && t.uint32(34).string(e.detail_ext_info),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.Profile; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.nick_name = e.string();
                            break;
                        case 2:
                            o.protrait = e.string();
                            break;
                        case 3:
                            o.basic_ext_info = e.string();
                            break;
                        case 4:
                            o.detail_ext_info = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }

                    return o
                }
                ,
                e
            }(),
            e.ProfileGetInfoRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.userid = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(8).int64(e.userid),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ProfileGetInfoRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.userid = e.int64() : e.skipType(7 & r)
                    }
                    if (!o.hasOwnProperty("userid"))
                        throw c.ProtocolError("missing required 'userid'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.ProfileGetInfoResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.profile = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.profile && Object.hasOwnProperty.call(e, "profile") && l.im_proto.Profile.encode(e.profile, t.uint32(10).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ProfileGetInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.profile = l.im_proto.Profile.decode(e, e.uint32()) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ClientMetricType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "COUNTER"] = 0,
                t[e[1] = "TIMER"] = 1,
                t
            }(),
            e.ClientMetric = function() {
                function e(e) {
                    if (this.tags = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.metric_type = 0,
                e.prototype.k = "",
                e.prototype.v = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.tags = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.metric_type && Object.hasOwnProperty.call(e, "metric_type") && t.uint32(8).int32(e.metric_type),
                    null != e.k && Object.hasOwnProperty.call(e, "k") && t.uint32(18).string(e.k),
                    null != e.v && Object.hasOwnProperty.call(e, "v") && t.uint32(24).int64(e.v),
                    null != e.tags && Object.hasOwnProperty.call(e, "tags"))
                        for (var n = Object.keys(e.tags), o = 0; o < n.length; ++o)
                            t.uint32(34).fork().uint32(10).string(n[o]).uint32(18).string(e.tags[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.ClientMetric; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.metric_type = e.int32();
                            break;
                        case 2:
                            i.k = e.string();
                            break;
                        case 3:
                            i.v = e.int64();
                            break;
                        case 4:
                            i.tags === c.emptyObject && (i.tags = {});
                            var d = e.uint32() + e.pos;
                            for (n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.tags[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.ReportClientMetricsRequestBody = function() {
                function e(e) {
                    if (this.report_metrics_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.report_metrics_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.report_metrics_list && e.report_metrics_list.length)
                        for (var n = 0; n < e.report_metrics_list.length; ++n)
                            l.im_proto.ClientMetric.encode(e.report_metrics_list[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ReportClientMetricsRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.report_metrics_list && o.report_metrics_list.length || (o.report_metrics_list = []),
                        o.report_metrics_list.push(l.im_proto.ClientMetric.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConfigsRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConfigsRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConfigsResponseBody = function() {
                function e(e) {
                    if (this.configs = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.version = 0,
                e.prototype.configs = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(8).int32(e.version),
                    null != e.configs && e.configs.length)
                        for (var n = 0; n < e.configs.length; ++n)
                            l.im_proto.Config.encode(e.configs[n], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConfigsResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.version = e.int32();
                            break;
                        case 2:
                            o.configs && o.configs.length || (o.configs = []),
                            o.configs.push(l.im_proto.Config.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.Config = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conf_name = "",
                e.prototype.conf_value = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conf_name && Object.hasOwnProperty.call(e, "conf_name") && t.uint32(10).string(e.conf_name),
                    null != e.conf_value && Object.hasOwnProperty.call(e, "conf_value") && t.uint32(18).string(e.conf_value),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.Config; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conf_name = e.string();
                            break;
                        case 2:
                            o.conf_value = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SendMessageP2PRequestBody = function() {
                function e(e) {
                    if (this.visible_user = [],
                    this.invisible_user = [],
                    this.ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.send_type = 0,
                e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.visible_user = c.emptyArray,
                e.prototype.invisible_user = c.emptyArray,
                e.prototype.message_type = 0,
                e.prototype.content = "",
                e.prototype.ext = c.emptyObject,
                e.prototype.client_message_id = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.send_type && Object.hasOwnProperty.call(e, "send_type") && t.uint32(8).int32(e.send_type),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(18).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(32).int64(e.conversation_short_id),
                    null != e.visible_user && e.visible_user.length)
                        for (var n = 0; n < e.visible_user.length; ++n)
                            t.uint32(40).int64(e.visible_user[n]);
                    if (null != e.invisible_user && e.invisible_user.length)
                        for (n = 0; n < e.invisible_user.length; ++n)
                            t.uint32(48).int64(e.invisible_user[n]);
                    if (null != e.message_type && Object.hasOwnProperty.call(e, "message_type") && t.uint32(56).int32(e.message_type),
                    null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(66).string(e.content),
                    null != e.ext && Object.hasOwnProperty.call(e, "ext")) {
                        var o = Object.keys(e.ext);
                        for (n = 0; n < o.length; ++n)
                            t.uint32(74).fork().uint32(10).string(o[n]).uint32(18).string(e.ext[o[n]]).ldelim()
                    }
                    return null != e.client_message_id && Object.hasOwnProperty.call(e, "client_message_id") && t.uint32(82).string(e.client_message_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.SendMessageP2PRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.send_type = e.int32();
                            break;
                        case 2:
                            i.conversation_id = e.string();
                            break;
                        case 3:
                            i.conversation_type = e.int32();
                            break;
                        case 4:
                            i.conversation_short_id = e.int64();
                            break;
                        case 5:
                            if (i.visible_user && i.visible_user.length || (i.visible_user = []),
                            2 == (7 & a))
                                for (var d = e.uint32() + e.pos; e.pos < d; )
                                    i.visible_user.push(e.int64());
                            else
                                i.visible_user.push(e.int64());
                            break;
                        case 6:
                            if (i.invisible_user && i.invisible_user.length || (i.invisible_user = []),
                            2 == (7 & a))
                                for (d = e.uint32() + e.pos; e.pos < d; )
                                    i.invisible_user.push(e.int64());
                            else
                                i.invisible_user.push(e.int64());
                            break;
                        case 7:
                            i.message_type = e.int32();
                            break;
                        case 8:
                            i.content = e.string();
                            break;
                        case 9:
                            for (i.ext === c.emptyObject && (i.ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.ext[n] = o;
                            break;
                        case 10:
                            i.client_message_id = e.string();
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.SendMessageP2PResponseBody = function() {
                function e(e) {
                    if (this.failed_user = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.failed_user = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.failed_user && e.failed_user.length)
                        for (var n = 0; n < e.failed_user.length; ++n)
                            t.uint32(8).int64(e.failed_user[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SendMessageP2PResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        if (r >>> 3 == 1)
                            if (o.failed_user && o.failed_user.length || (o.failed_user = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_user.push(e.int64());
                            else
                                o.failed_user.push(e.int64());
                        else
                            e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConvCountReport = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conv_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.unread_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conv_short_id && Object.hasOwnProperty.call(e, "conv_short_id") && t.uint32(8).int64(e.conv_short_id),
                    null != e.unread_count && Object.hasOwnProperty.call(e, "unread_count") && t.uint32(16).int64(e.unread_count),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConvCountReport; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conv_short_id = e.int64();
                            break;
                        case 2:
                            o.unread_count = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UnReadCountReportRequestBody = function() {
                function e(e) {
                    if (this.conv_unread_count = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.total_unread_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conv_unread_count = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.total_unread_count && Object.hasOwnProperty.call(e, "total_unread_count") && t.uint32(8).int64(e.total_unread_count),
                    null != e.conv_unread_count && e.conv_unread_count.length)
                        for (var n = 0; n < e.conv_unread_count.length; ++n)
                            l.im_proto.ConvCountReport.encode(e.conv_unread_count[n], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UnReadCountReportRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.total_unread_count = e.int64();
                            break;
                        case 2:
                            o.conv_unread_count && o.conv_unread_count.length || (o.conv_unread_count = []),
                            o.conv_unread_count.push(l.im_proto.ConvCountReport.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.UnReadCountReportResponseBody = function() {
                function e(e) {
                    if (this.failed_conv_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.set_total_status = !1,
                e.prototype.failed_conv_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    t.uint32(8).bool(e.set_total_status),
                    null != e.failed_conv_list && e.failed_conv_list.length)
                        for (var n = 0; n < e.failed_conv_list.length; ++n)
                            t.uint32(16).int64(e.failed_conv_list[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.UnReadCountReportResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.set_total_status = e.bool();
                            break;
                        case 2:
                            if (o.failed_conv_list && o.failed_conv_list.length || (o.failed_conv_list = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_conv_list.push(e.int64());
                            else
                                o.failed_conv_list.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("set_total_status"))
                        throw c.ProtocolError("missing required 'set_total_status'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.GetUnreadCountRequestBody = function() {
                function e(e) {
                    if (this.conv_short_id = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.get_total = !1,
                e.prototype.conv_short_id = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.get_total && Object.hasOwnProperty.call(e, "get_total") && t.uint32(8).bool(e.get_total),
                    null != e.conv_short_id && e.conv_short_id.length)
                        for (var n = 0; n < e.conv_short_id.length; ++n)
                            t.uint32(16).int64(e.conv_short_id[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetUnreadCountRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.get_total = e.bool();
                            break;
                        case 2:
                            if (o.conv_short_id && o.conv_short_id.length || (o.conv_short_id = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.conv_short_id.push(e.int64());
                            else
                                o.conv_short_id.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetUnreadCountResponseBody = function() {
                function e(e) {
                    if (this.conv_unread_count = {},
                    this.failed_conv_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.total_unread_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conv_unread_count = c.emptyObject,
                e.prototype.failed_conv_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.total_unread_count && Object.hasOwnProperty.call(e, "total_unread_count") && t.uint32(8).int64(e.total_unread_count),
                    null != e.conv_unread_count && Object.hasOwnProperty.call(e, "conv_unread_count"))
                        for (var n = Object.keys(e.conv_unread_count), o = 0; o < n.length; ++o)
                            t.uint32(18).fork().uint32(8).int64(n[o]).uint32(16).int64(e.conv_unread_count[n[o]]).ldelim();
                    if (null != e.failed_conv_list && e.failed_conv_list.length)
                        for (o = 0; o < e.failed_conv_list.length; ++o)
                            t.uint32(24).int64(e.failed_conv_list[o]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.GetUnreadCountResponseBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.total_unread_count = e.int64();
                            break;
                        case 2:
                            i.conv_unread_count === c.emptyObject && (i.conv_unread_count = {});
                            var d = e.uint32() + e.pos;
                            for (n = 0,
                            o = 0; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.int64();
                                    break;
                                case 2:
                                    o = e.int64();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.conv_unread_count["object" == typeof n ? c.longToHash(n) : n] = o;
                            break;
                        case 3:
                            if (i.failed_conv_list && i.failed_conv_list.length || (i.failed_conv_list = []),
                            2 == (7 & a))
                                for (d = e.uint32() + e.pos; e.pos < d; )
                                    i.failed_conv_list.push(e.int64());
                            else
                                i.failed_conv_list.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.GetBlockListRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(8).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).int32(e.limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetBlockListRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.cursor = e.int64();
                            break;
                        case 2:
                            o.limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BlockUserInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.create_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.user_id && Object.hasOwnProperty.call(e, "user_id") && t.uint32(8).int64(e.user_id),
                    null != e.create_time && Object.hasOwnProperty.call(e, "create_time") && t.uint32(16).int64(e.create_time),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BlockUserInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.user_id = e.int64();
                            break;
                        case 2:
                            o.create_time = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetBlockListResponseBody = function() {
                function e(e) {
                    if (this.user_info = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_info = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.user_info && e.user_info.length)
                        for (var n = 0; n < e.user_info.length; ++n)
                            l.im_proto.BlockUserInfo.encode(e.user_info[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(24).int64(e.next_cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetBlockListResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.user_info && o.user_info.length || (o.user_info = []),
                            o.user_info.push(l.im_proto.BlockUserInfo.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SetBlocklistRequestBody = function() {
                function e(e) {
                    if (this.blocklist = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.set_block_list = !1,
                e.prototype.blocklist = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.set_block_list && Object.hasOwnProperty.call(e, "set_block_list") && t.uint32(8).bool(e.set_block_list),
                    null != e.blocklist && e.blocklist.length)
                        for (var n = 0; n < e.blocklist.length; ++n)
                            t.uint32(16).int64(e.blocklist[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SetBlocklistRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.set_block_list = e.bool();
                            break;
                        case 2:
                            if (o.blocklist && o.blocklist.length || (o.blocklist = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.blocklist.push(e.int64());
                            else
                                o.blocklist.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.SetBlocklistResponseBody = function() {
                function e(e) {
                    if (this.failed_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.failed_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.failed_list && e.failed_list.length)
                        for (var n = 0; n < e.failed_list.length; ++n)
                            t.uint32(8).int64(e.failed_list[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.SetBlocklistResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        if (r >>> 3 == 1)
                            if (o.failed_list && o.failed_list.length || (o.failed_list = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_list.push(e.int64());
                            else
                                o.failed_list.push(e.int64());
                        else
                            e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.CheckInBlockListRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.user_to_check = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.user_to_check && Object.hasOwnProperty.call(e, "user_to_check") && t.uint32(8).int64(e.user_to_check),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.CheckInBlockListRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.user_to_check = e.int64() : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.CheckInBlockListResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.in_blocklist = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.in_blocklist && Object.hasOwnProperty.call(e, "in_blocklist") && t.uint32(8).bool(e.in_blocklist),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.CheckInBlockListResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.in_blocklist = e.bool() : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.BlockStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "UNBLOCK"] = 0,
                t[e[1] = "BLOCK"] = 1,
                t
            }(),
            e.BlockMembersRequestBody = function() {
                function e(e) {
                    if (this.block_time = {},
                    this.biz_ext = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.block_status = 0,
                e.prototype.block_time = c.emptyObject,
                e.prototype.conv_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.conversation_id = "",
                e.prototype.biz_ext = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.block_status && Object.hasOwnProperty.call(e, "block_status") && t.uint32(8).int32(e.block_status),
                    null != e.block_time && Object.hasOwnProperty.call(e, "block_time"))
                        for (var n = Object.keys(e.block_time), o = 0; o < n.length; ++o)
                            t.uint32(18).fork().uint32(8).int64(n[o]).uint32(16).int64(e.block_time[n[o]]).ldelim();
                    if (null != e.conv_short_id && Object.hasOwnProperty.call(e, "conv_short_id") && t.uint32(24).int64(e.conv_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(32).int32(e.conversation_type),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(42).string(e.conversation_id),
                    null != e.biz_ext && Object.hasOwnProperty.call(e, "biz_ext"))
                        for (n = Object.keys(e.biz_ext),
                        o = 0; o < n.length; ++o)
                            t.uint32(90).fork().uint32(10).string(n[o]).uint32(18).string(e.biz_ext[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.BlockMembersRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.block_status = e.int32();
                            break;
                        case 2:
                            i.block_time === c.emptyObject && (i.block_time = {});
                            var d = e.uint32() + e.pos;
                            for (n = 0,
                            o = 0; e.pos < d; )
                                switch ((u = e.uint32()) >>> 3) {
                                case 1:
                                    n = e.int64();
                                    break;
                                case 2:
                                    o = e.int64();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            i.block_time["object" == typeof n ? c.longToHash(n) : n] = o;
                            break;
                        case 3:
                            i.conv_short_id = e.int64();
                            break;
                        case 4:
                            i.conversation_type = e.int32();
                            break;
                        case 5:
                            i.conversation_id = e.string();
                            break;
                        case 11:
                            for (i.biz_ext === c.emptyObject && (i.biz_ext = {}),
                            d = e.uint32() + e.pos,
                            n = "",
                            o = ""; e.pos < d; ) {
                                var u;
                                switch ((u = e.uint32()) >>> 3) {
                                case 1:
                                    n = e.string();
                                    break;
                                case 2:
                                    o = e.string();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.biz_ext[n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.BlockMembersResponseBody = function() {
                function e(e) {
                    if (this.failed_members = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.failed_members = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.failed_members && e.failed_members.length)
                        for (var n = 0; n < e.failed_members.length; ++n)
                            t.uint32(8).int64(e.failed_members[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BlockMembersResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        if (r >>> 3 == 1)
                            if (o.failed_members && o.failed_members.length || (o.failed_members = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_members.push(e.int64());
                            else
                                o.failed_members.push(e.int64());
                        else
                            e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.BlockConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conv_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_type = 0,
                e.prototype.block_status = 0,
                e.prototype.block_normal_only = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conv_short_id && Object.hasOwnProperty.call(e, "conv_short_id") && t.uint32(16).int64(e.conv_short_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    null != e.block_status && Object.hasOwnProperty.call(e, "block_status") && t.uint32(32).int32(e.block_status),
                    null != e.block_normal_only && Object.hasOwnProperty.call(e, "block_normal_only") && t.uint32(40).bool(e.block_normal_only),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BlockConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conv_short_id = e.int64();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        case 4:
                            o.block_status = e.int32();
                            break;
                        case 5:
                            o.block_normal_only = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetMessagesCheckInfoInConversationRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.cursor_reverse_begin = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.cursor_reverse_end = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.expect_msg_total_count = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(16).int64(e.conversation_short_id),
                    null != e.cursor_reverse_begin && Object.hasOwnProperty.call(e, "cursor_reverse_begin") && t.uint32(24).int64(e.cursor_reverse_begin),
                    null != e.expect_msg_total_count && Object.hasOwnProperty.call(e, "expect_msg_total_count") && t.uint32(32).int32(e.expect_msg_total_count),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(42).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(48).int32(e.conversation_type),
                    null != e.cursor_reverse_end && Object.hasOwnProperty.call(e, "cursor_reverse_end") && t.uint32(56).int64(e.cursor_reverse_end),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetMessagesCheckInfoInConversationRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 2:
                            o.conversation_short_id = e.int64();
                            break;
                        case 5:
                            o.conversation_id = e.string();
                            break;
                        case 6:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.cursor_reverse_begin = e.int64();
                            break;
                        case 7:
                            o.cursor_reverse_end = e.int64();
                            break;
                        case 4:
                            o.expect_msg_total_count = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessagesCheckInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.head_msg_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.tail_msg_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.msg_count = 0,
                e.prototype.indexes_checksum = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.head_msg_index && Object.hasOwnProperty.call(e, "head_msg_index") && t.uint32(8).int64(e.head_msg_index),
                    null != e.tail_msg_index && Object.hasOwnProperty.call(e, "tail_msg_index") && t.uint32(16).int64(e.tail_msg_index),
                    null != e.msg_count && Object.hasOwnProperty.call(e, "msg_count") && t.uint32(24).int32(e.msg_count),
                    null != e.indexes_checksum && Object.hasOwnProperty.call(e, "indexes_checksum") && t.uint32(32).uint32(e.indexes_checksum),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessagesCheckInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.head_msg_index = e.int64();
                            break;
                        case 2:
                            o.tail_msg_index = e.int64();
                            break;
                        case 3:
                            o.msg_count = e.int32();
                            break;
                        case 4:
                            o.indexes_checksum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetMessagesCheckInfoInConversationResponseBody = function() {
                function e(e) {
                    if (this.msgs_checkinfo_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.msgs_checkinfo_list = c.emptyArray,
                e.prototype.real_msg_total_count = 0,
                e.prototype.cursor_reverse_next = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.msgs_checkinfo_list && e.msgs_checkinfo_list.length)
                        for (var n = 0; n < e.msgs_checkinfo_list.length; ++n)
                            l.im_proto.MessagesCheckInfo.encode(e.msgs_checkinfo_list[n], t.uint32(10).fork()).ldelim();
                    return null != e.real_msg_total_count && Object.hasOwnProperty.call(e, "real_msg_total_count") && t.uint32(16).int32(e.real_msg_total_count),
                    null != e.cursor_reverse_next && Object.hasOwnProperty.call(e, "cursor_reverse_next") && t.uint32(32).int64(e.cursor_reverse_next),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetMessagesCheckInfoInConversationResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.msgs_checkinfo_list && o.msgs_checkinfo_list.length || (o.msgs_checkinfo_list = []),
                            o.msgs_checkinfo_list.push(l.im_proto.MessagesCheckInfo.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.real_msg_total_count = e.int32();
                            break;
                        case 4:
                            o.cursor_reverse_next = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.ConversationCheckInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(8).int64(e.conversation_short_id),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(18).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(24).int32(e.conversation_type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationCheckInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_short_id = e.int64();
                            break;
                        case 2:
                            o.conversation_id = e.string();
                            break;
                        case 3:
                            o.conversation_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.GetConversationsCheckInfoResponseBody = function() {
                function e(e) {
                    if (this.conversation_checkinfo_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_checkinfo_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_checkinfo_list && e.conversation_checkinfo_list.length)
                        for (var n = 0; n < e.conversation_checkinfo_list.length; ++n)
                            l.im_proto.ConversationCheckInfo.encode(e.conversation_checkinfo_list[n], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.GetConversationsCheckInfoResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? (o.conversation_checkinfo_list && o.conversation_checkinfo_list.length || (o.conversation_checkinfo_list = []),
                        o.conversation_checkinfo_list.push(l.im_proto.ConversationCheckInfo.decode(e, e.uint32()))) : e.skipType(7 & r)
                    }
                    return o
                }
                ,
                e
            }(),
            e.ActionType = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "UNKNOWN_ACTION"] = 0,
                t[e[1] = "FAVORITE"] = 1,
                t[e[2] = "PIN"] = 2,
                t[e[3] = "UNREAD"] = 3,
                t
            }(),
            e.MarkMessageRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.do_action = !1,
                e.prototype.action_type = 0,
                e.prototype.sort_time = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.tag = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(32).int64(e.server_message_id),
                    null != e.do_action && Object.hasOwnProperty.call(e, "do_action") && t.uint32(40).bool(e.do_action),
                    null != e.action_type && Object.hasOwnProperty.call(e, "action_type") && t.uint32(48).int32(e.action_type),
                    null != e.sort_time && Object.hasOwnProperty.call(e, "sort_time") && t.uint32(56).int64(e.sort_time),
                    null != e.tag && Object.hasOwnProperty.call(e, "tag") && t.uint32(64).int64(e.tag),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.server_message_id = e.int64();
                            break;
                        case 5:
                            o.do_action = e.bool();
                            break;
                        case 6:
                            o.action_type = e.int32();
                            break;
                        case 7:
                            o.sort_time = e.int64();
                            break;
                        case 8:
                            o.tag = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkMessageResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.status = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(8).int64(e.server_message_id),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(16).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(26).string(e.check_message),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(32).int32(e.status),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkMessageResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.server_message_id = e.int64();
                            break;
                        case 2:
                            o.check_code = e.int64();
                            break;
                        case 3:
                            o.check_message = e.string();
                            break;
                        case 4:
                            o.status = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.PullMarkMessageRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.limit = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.asc = !1,
                e.prototype.action_type = 0,
                e.prototype.tag = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.clear_unread_count = !1,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.cursor && Object.hasOwnProperty.call(e, "cursor") && t.uint32(32).int64(e.cursor),
                    null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(40).int64(e.limit),
                    null != e.asc && Object.hasOwnProperty.call(e, "asc") && t.uint32(48).bool(e.asc),
                    null != e.action_type && Object.hasOwnProperty.call(e, "action_type") && t.uint32(56).int32(e.action_type),
                    null != e.tag && Object.hasOwnProperty.call(e, "tag") && t.uint32(64).int64(e.tag),
                    null != e.clear_unread_count && Object.hasOwnProperty.call(e, "clear_unread_count") && t.uint32(72).bool(e.clear_unread_count),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.PullMarkMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.cursor = e.int64();
                            break;
                        case 5:
                            o.limit = e.int64();
                            break;
                        case 6:
                            o.asc = e.bool();
                            break;
                        case 7:
                            o.action_type = e.int32();
                            break;
                        case 8:
                            o.tag = e.int64();
                            break;
                        case 9:
                            o.clear_unread_count = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.PullMarkMessageResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(10).fork()).ldelim();
                    return null != e.has_more && Object.hasOwnProperty.call(e, "has_more") && t.uint32(16).bool(e.has_more),
                    null != e.next_cursor && Object.hasOwnProperty.call(e, "next_cursor") && t.uint32(24).int64(e.next_cursor),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.PullMarkMessageResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_cursor = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessageByInitRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.page = 0,
                e.prototype.conv_limit = 0,
                e.prototype.msg_limit = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(8).int64(e.version),
                    null != e.page && Object.hasOwnProperty.call(e, "page") && t.uint32(16).int32(e.page),
                    null != e.conv_limit && Object.hasOwnProperty.call(e, "conv_limit") && t.uint32(24).int32(e.conv_limit),
                    null != e.msg_limit && Object.hasOwnProperty.call(e, "msg_limit") && t.uint32(32).int32(e.msg_limit),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessageByInitRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.version = e.int64();
                            break;
                        case 2:
                            o.page = e.int32();
                            break;
                        case 3:
                            o.conv_limit = e.int32();
                            break;
                        case 4:
                            o.msg_limit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MessageByInitResponseBody = function() {
                function e(e) {
                    if (this.messages = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.messages = c.emptyArray,
                e.prototype.has_more = !1,
                e.prototype.next_init_version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.user_cursor = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.cmd_index = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.readconv_version = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.ConversationMessage.encode(e.messages[n], t.uint32(10).fork()).ldelim();
                    return t.uint32(16).bool(e.has_more),
                    t.uint32(24).int64(e.next_init_version),
                    null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(32).int64(e.version),
                    null != e.user_cursor && Object.hasOwnProperty.call(e, "user_cursor") && t.uint32(40).int64(e.user_cursor),
                    null != e.cmd_index && Object.hasOwnProperty.call(e, "cmd_index") && t.uint32(48).int64(e.cmd_index),
                    null != e.readconv_version && Object.hasOwnProperty.call(e, "readconv_version") && t.uint32(56).int64(e.readconv_version),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MessageByInitResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.ConversationMessage.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.has_more = e.bool();
                            break;
                        case 3:
                            o.next_init_version = e.int64();
                            break;
                        case 4:
                            o.version = e.int64();
                            break;
                        case 5:
                            o.user_cursor = e.int64();
                            break;
                        case 6:
                            o.cmd_index = e.int64();
                            break;
                        case 7:
                            o.readconv_version = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("has_more"))
                        throw c.ProtocolError("missing required 'has_more'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("next_init_version"))
                        throw c.ProtocolError("missing required 'next_init_version'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.ConversationMessage = function() {
                function e(e) {
                    if (this.messages = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversations = null,
                e.prototype.messages = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    l.im_proto.ConversationInfoV2.encode(e.conversations, t.uint32(10).fork()).ldelim(),
                    null != e.messages && e.messages.length)
                        for (var n = 0; n < e.messages.length; ++n)
                            l.im_proto.MessageBody.encode(e.messages[n], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.ConversationMessage; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversations = l.im_proto.ConversationInfoV2.decode(e, e.uint32());
                            break;
                        case 2:
                            o.messages && o.messages.length || (o.messages = []),
                            o.messages.push(l.im_proto.MessageBody.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("conversations"))
                        throw c.ProtocolError("missing required 'conversations'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.MessageStatus = function() {
                const e = {}
                  , t = Object.create(e);
                return t[e[0] = "AVAILABLE"] = 0,
                t[e[1] = "NOT_EXIST"] = 1,
                t[e[2] = "INVISIBLE"] = 2,
                t[e[3] = "RECALLED"] = 3,
                t[e[4] = "DELETED"] = 4,
                t
            }(),
            e.BatchUnmarkMessageRequestBody = function() {
                function e(e) {
                    if (this.server_message_ids = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_ids = c.emptyArray,
                e.prototype.action_type = 0,
                e.prototype.tag = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.server_message_ids && e.server_message_ids.length)
                        for (var n = 0; n < e.server_message_ids.length; ++n)
                            t.uint32(32).int64(e.server_message_ids[n]);
                    return null != e.action_type && Object.hasOwnProperty.call(e, "action_type") && t.uint32(40).int32(e.action_type),
                    null != e.tag && Object.hasOwnProperty.call(e, "tag") && t.uint32(48).int64(e.tag),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BatchUnmarkMessageRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            if (o.server_message_ids && o.server_message_ids.length || (o.server_message_ids = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.server_message_ids.push(e.int64());
                            else
                                o.server_message_ids.push(e.int64());
                            break;
                        case 5:
                            o.action_type = e.int32();
                            break;
                        case 6:
                            o.tag = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.BatchUnmarkMessageResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.status = 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.server_message_id && Object.hasOwnProperty.call(e, "server_message_id") && t.uint32(8).int64(e.server_message_id),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(16).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(26).string(e.check_message),
                    null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(32).int32(e.status),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.BatchUnmarkMessageResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.server_message_id = e.int64();
                            break;
                        case 2:
                            o.check_code = e.int64();
                            break;
                        case 3:
                            o.check_message = e.string();
                            break;
                        case 4:
                            o.status = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkMsgUnreadCountReportRequestBody = function() {
                function e(e) {
                    if (this.tag_unread_count = {},
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.total_unread_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.tag_unread_count = c.emptyObject,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.total_unread_count && Object.hasOwnProperty.call(e, "total_unread_count") && t.uint32(32).int64(e.total_unread_count),
                    null != e.tag_unread_count && Object.hasOwnProperty.call(e, "tag_unread_count"))
                        for (var n = Object.keys(e.tag_unread_count), o = 0; o < n.length; ++o)
                            t.uint32(42).fork().uint32(8).int64(n[o]).uint32(16).int64(e.tag_unread_count[n[o]]).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.MarkMsgUnreadCountReportRequestBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.conversation_id = e.string();
                            break;
                        case 2:
                            i.conversation_type = e.int32();
                            break;
                        case 3:
                            i.conversation_short_id = e.int64();
                            break;
                        case 4:
                            i.total_unread_count = e.int64();
                            break;
                        case 5:
                            i.tag_unread_count === c.emptyObject && (i.tag_unread_count = {});
                            var d = e.uint32() + e.pos;
                            for (n = 0,
                            o = 0; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.int64();
                                    break;
                                case 2:
                                    o = e.int64();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.tag_unread_count["object" == typeof n ? c.longToHash(n) : n] = o;
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.MarkMsgUnreadCountReportResponseBody = function() {
                function e(e) {
                    if (this.failed_tag_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.set_total_status = !1,
                e.prototype.failed_tag_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.set_total_status && Object.hasOwnProperty.call(e, "set_total_status") && t.uint32(8).bool(e.set_total_status),
                    null != e.failed_tag_list && e.failed_tag_list.length)
                        for (var n = 0; n < e.failed_tag_list.length; ++n)
                            t.uint32(16).int64(e.failed_tag_list[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkMsgUnreadCountReportResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.set_total_status = e.bool();
                            break;
                        case 2:
                            if (o.failed_tag_list && o.failed_tag_list.length || (o.failed_tag_list = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.failed_tag_list.push(e.int64());
                            else
                                o.failed_tag_list.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkMsgGetUnreadCountRequestBody = function() {
                function e(e) {
                    if (this.tags = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.conversation_id = "",
                e.prototype.conversation_type = 0,
                e.prototype.conversation_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.get_total = !1,
                e.prototype.tags = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.conversation_id && Object.hasOwnProperty.call(e, "conversation_id") && t.uint32(10).string(e.conversation_id),
                    null != e.conversation_type && Object.hasOwnProperty.call(e, "conversation_type") && t.uint32(16).int32(e.conversation_type),
                    null != e.conversation_short_id && Object.hasOwnProperty.call(e, "conversation_short_id") && t.uint32(24).int64(e.conversation_short_id),
                    null != e.get_total && Object.hasOwnProperty.call(e, "get_total") && t.uint32(32).bool(e.get_total),
                    null != e.tags && e.tags.length)
                        for (var n = 0; n < e.tags.length; ++n)
                            t.uint32(40).int64(e.tags[n]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.MarkMsgGetUnreadCountRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.conversation_id = e.string();
                            break;
                        case 2:
                            o.conversation_type = e.int32();
                            break;
                        case 3:
                            o.conversation_short_id = e.int64();
                            break;
                        case 4:
                            o.get_total = e.bool();
                            break;
                        case 5:
                            if (o.tags && o.tags.length || (o.tags = []),
                            2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i; )
                                    o.tags.push(e.int64());
                            else
                                o.tags.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    return o
                }
                ,
                e
            }(),
            e.MarkMsgGetUnreadCountResponseBody = function() {
                function e(e) {
                    if (this.tag_unread_count = {},
                    this.failed_tag_list = [],
                    e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.total_count = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.tag_unread_count = c.emptyObject,
                e.prototype.failed_tag_list = c.emptyArray,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    if (t || (t = a.create()),
                    null != e.total_count && Object.hasOwnProperty.call(e, "total_count") && t.uint32(8).int64(e.total_count),
                    null != e.tag_unread_count && Object.hasOwnProperty.call(e, "tag_unread_count"))
                        for (var n = Object.keys(e.tag_unread_count), o = 0; o < n.length; ++o)
                            t.uint32(18).fork().uint32(8).int64(n[o]).uint32(16).int64(e.tag_unread_count[n[o]]).ldelim();
                    if (null != e.failed_tag_list && e.failed_tag_list.length)
                        for (o = 0; o < e.failed_tag_list.length; ++o)
                            t.uint32(24).int64(e.failed_tag_list[o]);
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n, o, r = void 0 === t ? e.len : e.pos + t, i = new l.im_proto.MarkMsgGetUnreadCountResponseBody; e.pos < r; ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                        case 1:
                            i.total_count = e.int64();
                            break;
                        case 2:
                            i.tag_unread_count === c.emptyObject && (i.tag_unread_count = {});
                            var d = e.uint32() + e.pos;
                            for (n = 0,
                            o = 0; e.pos < d; ) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                case 1:
                                    n = e.int64();
                                    break;
                                case 2:
                                    o = e.int64();
                                    break;
                                default:
                                    e.skipType(7 & u)
                                }
                            }
                            i.tag_unread_count["object" == typeof n ? c.longToHash(n) : n] = o;
                            break;
                        case 3:
                            if (i.failed_tag_list && i.failed_tag_list.length || (i.failed_tag_list = []),
                            2 == (7 & a))
                                for (d = e.uint32() + e.pos; e.pos < d; )
                                    i.failed_tag_list.push(e.int64());
                            else
                                i.failed_tag_list.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & a)
                        }
                    }
                    return i
                }
                ,
                e
            }(),
            e.AudioRecognitionRequestInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.content = "",
                e.prototype.uid = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.audio_option = null,
                e.prototype.conv_short_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(10).string(e.content),
                    t.uint32(16).int64(e.uid),
                    t.uint32(24).int64(e.server_message_id),
                    l.im_proto.AudioOption.encode(e.audio_option, t.uint32(42).fork()).ldelim(),
                    t.uint32(48).int64(e.conv_short_id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.AudioRecognitionRequestInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.content = e.string();
                            break;
                        case 2:
                            o.uid = e.int64();
                            break;
                        case 3:
                            o.server_message_id = e.int64();
                            break;
                        case 5:
                            o.audio_option = l.im_proto.AudioOption.decode(e, e.uint32());
                            break;
                        case 6:
                            o.conv_short_id = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("content"))
                        throw c.ProtocolError("missing required 'content'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("uid"))
                        throw c.ProtocolError("missing required 'uid'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("server_message_id"))
                        throw c.ProtocolError("missing required 'server_message_id'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("audio_option"))
                        throw c.ProtocolError("missing required 'audio_option'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("conv_short_id"))
                        throw c.ProtocolError("missing required 'conv_short_id'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.AudioRecognitionRequestBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.audio = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    l.im_proto.AudioRecognitionRequestInfo.encode(e.audio, t.uint32(10).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.AudioRecognitionRequestBody; e.pos < n; ) {
                        var r = e.uint32();
                        r >>> 3 == 1 ? o.audio = l.im_proto.AudioRecognitionRequestInfo.decode(e, e.uint32()) : e.skipType(7 & r)
                    }
                    if (!o.hasOwnProperty("audio"))
                        throw c.ProtocolError("missing required 'audio'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.AudioRecognitionResponseInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.uid = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.server_message_id = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.audio_text = "",
                e.prototype.content = "",
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    t.uint32(8).int64(e.uid),
                    t.uint32(16).int64(e.server_message_id),
                    t.uint32(26).string(e.audio_text),
                    t.uint32(34).string(e.content),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.AudioRecognitionResponseInfo; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.uid = e.int64();
                            break;
                        case 2:
                            o.server_message_id = e.int64();
                            break;
                        case 3:
                            o.audio_text = e.string();
                            break;
                        case 4:
                            o.content = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("uid"))
                        throw c.ProtocolError("missing required 'uid'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("server_message_id"))
                        throw c.ProtocolError("missing required 'server_message_id'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("audio_text"))
                        throw c.ProtocolError("missing required 'audio_text'", {
                            instance: o
                        });
                    if (!o.hasOwnProperty("content"))
                        throw c.ProtocolError("missing required 'content'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e.AudioRecognitionResponseBody = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.check_code = c.Long ? c.Long.fromBits(0, 0, !1) : 0,
                e.prototype.check_message = "",
                e.prototype.audio = null,
                e.create = function(t) {
                    return new e(t)
                }
                ,
                e.encode = function(e, t) {
                    return t || (t = a.create()),
                    null != e.check_code && Object.hasOwnProperty.call(e, "check_code") && t.uint32(8).int64(e.check_code),
                    null != e.check_message && Object.hasOwnProperty.call(e, "check_message") && t.uint32(18).string(e.check_message),
                    l.im_proto.AudioRecognitionResponseInfo.encode(e.audio, t.uint32(26).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof s || (e = s.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new l.im_proto.AudioRecognitionResponseBody; e.pos < n; ) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                        case 1:
                            o.check_code = e.int64();
                            break;
                        case 2:
                            o.check_message = e.string();
                            break;
                        case 3:
                            o.audio = l.im_proto.AudioRecognitionResponseInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                        }
                    }
                    if (!o.hasOwnProperty("audio"))
                        throw c.ProtocolError("missing required 'audio'", {
                            instance: o
                        });
                    return o
                }
                ,
                e
            }(),
            e
        }
        )()
    }
    ,
    94434: (e,t,n)=>{
        n.r(t),
        n.d(t, {
            StrangerPlugin: ()=>m
        });
        var o = n(22403)
          , r = n(10007)
          , i = n(86166)
          , s = n(82726)
          , a = n(66924)
          , c = n(48252)
          , l = n(64467)
          , d = n(69480)
          , u = n(63422)
          , _ = (n(58071),
        n(32701),
        n(38458))
          , p = n(80694);
        n(50137);
        class v extends p.W {
            GetStrangerConversationList(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_stranger_conversation_body: {
                            cursor: e.cursor,
                            count: r.fromValue(e.limit),
                            show_total_unread: !0
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.GET_STRANGER_CONVERSATION_LIST)
                }
                ))
            }
            GetStrangerConversationMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        get_stranger_messages_body: {
                            conversation_short_id: e.shortId,
                            reset_unread_count: e.resetUnreadCount
                        }
                    });
                    return this.sendWithRawBody(t, i.m.IMCMD.GET_STRANGER_MESSAGES_IN_CONVERSATION)
                }
                ))
            }
            DeleteStrangerMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        delete_stranger_message_body: {
                            conversation_short_id: e.shortId,
                            server_message_id: e.serverId
                        }
                    });
                    return this.send(t, i.m.IMCMD.DELETE_STRANGER_MESSAGE)
                }
                ))
            }
            DeleteStrangerConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        delete_stranger_conversation_body: {
                            conversation_short_id: e.shortId
                        }
                    });
                    return this.send(t, i.m.IMCMD.DELETE_STRANGER_CONVERSATION)
                }
                ))
            }
            MarkStrangerConversationRead(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const t = i.m.RequestBody.create({
                        mark_stranger_conversation_read_body: {
                            conversation_short_id: e.shortId
                        }
                    });
                    return this.send(t, i.m.IMCMD.MARK_STRANGER_CONVERSATION_READ)
                }
                ))
            }
            MarkAllStrangerConversationRead() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const e = i.m.RequestBody.create({
                        mark_stranger_all_conversation_read_body: {}
                    });
                    return this.send(e, i.m.IMCMD.MARK_ALL_STRANGER_CONVERSATIONS_READ)
                }
                ))
            }
            DeleteAllStrangerConversation() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const e = i.m.RequestBody.create({
                        delete_stranger_all_conversation_body: {}
                    });
                    return this.send(e, i.m.IMCMD.DELETE_ALL_STRANGER_CONVERSATIONS)
                }
                ))
            }
        }
        var y = n(3786);
        class h extends y.r {
            get unreadCount() {
                return this.internalUnreadCount
            }
            set unreadCount(e) {
                this.internalUnreadCount = e
            }
            get mode() {
                const e = this.toParticipantUserId
                  , t = this.id.split(":");
                return t[2] === e ? 1 : t[3] === e ? 2 : 3
            }
            get ext() {
                return this.coreInfo.ext
            }
            set ext(e) {
                this.coreInfo.ext = e
            }
        }
        var g = n(85572);
        class f extends g.f {
            process(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.data.type === i.m.MessageType.MESSAGE_TYPE_MODE_CHANGE) {
                        const t = this.resolve(c.Uk.ConversationManager).getRaw(e.data.conversationId);
                        if (!t)
                            return a.Y.ctxDebug(this.ctx, `conversation ${e.data.conversationId} not exist, ignore upgrade`),
                            e;
                        if (!t.isStrangerConversation)
                            return a.Y.ctxDebug(this.ctx, `conversation ${e.data.conversationId} not stranger, ignore upgrade`),
                            e;
                        this.resolve(c.Uk.ConversationManager).delete(e.data.conversationId);
                        const n = yield this.resolve(c.Uk.ConversationManager).getWithOnline(e.data.conversationId, e.data.conversationShortId, e.data.conversationType);
                        this.resolve(c.Uk.ConversationManager).markRead(n.id, n.lastMessageIndex),
                        a.Y.ctxDebug(this.ctx, "stranger upgrade,", n),
                        this.resolve(c.Uk.EventBus).emit(s.c5.StrangerUpgrade, this, n),
                        e.needContinue = !1
                    }
                    return e
                }
                ))
            }
        }
        class m extends _.v {
            constructor() {
                super(...arguments),
                this.internalUnreadCount = 0
            }
            getStrangerConversationList(e={}) {
                var t, n, s, a, _, p, v;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = yield this.api.GetStrangerConversationList({
                        cursor: e.cursor ? r.fromValue(e.cursor) : r.ZERO,
                        limit: null !== (t = e.limit) && void 0 !== t ? t : 10
                    })
                      , y = null === (n = o.body) || void 0 === n ? void 0 : n.get_stranger_conversation_body
                      , g = y.conversation_list;
                    this.internalUnreadCount = y.total_unread;
                    let f = !1;
                    if ("0" === (null === (s = e.cursor) || void 0 === s ? void 0 : s.toString()) && 1 === e.limit) {
                        const e = yield this.getStrangerPreview({
                            sync: !1
                        });
                        g && 1 === g.length && (null === (a = null == e ? void 0 : e.conversation) || void 0 === a ? void 0 : a.id) === g[0].conversation_id && (null === (_ = null == e ? void 0 : e.message) || void 0 === _ ? void 0 : _.serverId) === (null === (v = null === (p = g[0].last_message) || void 0 === p ? void 0 : p.server_message_id) || void 0 === v ? void 0 : v.toString()) && (null == e ? void 0 : e.unreadCount) === (null == y ? void 0 : y.total_unread) && (f = !0)
                    }
                    const m = g.map((e=>{
                        var t;
                        const n = new h(this.ctx);
                        if (n.coreInfo = new l._(n),
                        n.settingInfo = new d.H(n),
                        n.id = e.conversation_id,
                        n.shortId = e.conversation_short_id.toString(),
                        n.type = i.m.ConversationType.ONE_TO_ONE_CHAT,
                        n.unreadCount = e.unread,
                        n.isOffline = !1,
                        n.firstPageParticipant = i.m.ParticipantsPage.create({
                            participants: e.participants
                        }),
                        n.ext = null !== (t = e.ext) && void 0 !== t ? t : {},
                        !f) {
                            this.resolve(c.Uk.ConversationManager).upsert(n);
                            const t = u.v.fromServerMessage(this.ctx, e.last_message, o.log_id);
                            this.resolve(c.Uk.MessageManager).upsert(t)
                        }
                        return n
                    }
                    ));
                    return {
                        conversation: m,
                        unreadCount: null == y ? void 0 : y.total_unread,
                        hasMore: null == y ? void 0 : y.has_more,
                        cursor: null == y ? void 0 : y.next_cursor
                    }
                }
                ))
            }
            getStrangerConversationMessage(e) {
                var t, n;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const o = yield this.api.GetStrangerConversationMessage({
                        shortId: r.fromString(e.conversation.shortId),
                        resetUnreadCount: null !== (t = e.resetUnreadCount) && void 0 !== t && t
                    });
                    return (null === (n = o.body) || void 0 === n ? void 0 : n.get_stranger_messages_body).messages.forEach((e=>this.resolve(c.Uk.MessageManager).upsert(u.v.fromServerMessage(this.ctx, e, o.log_id)))),
                    this.resolve(c.Uk.MessageManager).getList(e.conversation.id)
                }
                ))
            }
            deleteStrangerMessage(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.DeleteStrangerMessage({
                        serverId: r.fromString(e.message.serverId),
                        shortId: r.fromString(e.conversation.shortId)
                    }),
                    this.resolve(c.Uk.MessageManager).delete(e.conversation.id, e.message.serverId)
                }
                ))
            }
            deleteStrangerConversation(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.DeleteStrangerConversation({
                        shortId: r.fromString(e.conversation.shortId)
                    }),
                    this.resolve(c.Uk.ConversationManager).delete(e.conversation.id)
                }
                ))
            }
            deleteAllStrangerConversation() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.DeleteAllStrangerConversation(),
                    this.resolve(c.Uk.ConversationManager).getConversationArray((e=>0 !== e.mode)).forEach((e=>this.resolve(c.Uk.ConversationManager).delete(e.id))),
                    this.internalUnreadCount = 0
                }
                ))
            }
            markStrangerConversationRead(e) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.MarkStrangerConversationRead({
                        shortId: r.fromString(e.conversation.shortId)
                    }),
                    this.internalUnreadCount -= e.conversation.unreadCount,
                    e.conversation.unreadCount = 0,
                    this.resolve(c.Uk.ConversationManager).upsert(e.conversation)
                }
                ))
            }
            markAllStrangerConversationRead() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.api.MarkAllStrangerConversationRead(),
                    this.resolve(c.Uk.ConversationManager).getConversationArray((e=>0 !== e.mode)).forEach((e=>{
                        e.unreadCount = 0,
                        this.resolve(c.Uk.ConversationManager).upsert(e)
                    }
                    )),
                    this.internalUnreadCount = 0
                }
                ))
            }
            getStrangerTotalUnread() {
                return this.internalUnreadCount
            }
            getStrangerPreview(e={}) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    const n = yield this.refreshStrangerPreviewConversation(null !== (t = null == e ? void 0 : e.sync) && void 0 !== t && t);
                    return n ? {
                        conversation: n,
                        message: n.lastVisibleMessage,
                        unreadCount: this.internalUnreadCount
                    } : null
                }
                ))
            }
            getLocalStrangerConversation() {
                return this.resolve(c.Uk.ConversationManager).getConversationArray((e=>0 !== e.mode))
            }
            install() {
                this.api = this.register(c.Uk.StrangerApi, v),
                this.register(c.Uk.StrangerPlugin, this),
                this.instance.getStrangerConversationList = this.extendFunc(this.getStrangerConversationList),
                this.instance.getStrangerConversationMessage = this.extendFunc(this.getStrangerConversationMessage),
                this.instance.deleteStrangerMessage = this.extendFunc(this.deleteStrangerMessage),
                this.instance.deleteStrangerConversation = this.extendFunc(this.deleteStrangerConversation),
                this.instance.deleteAllStrangerConversation = this.extendFunc(this.deleteAllStrangerConversation),
                this.instance.markStrangerConversationRead = this.extendFunc(this.markStrangerConversationRead),
                this.instance.markAllStrangerConversationRead = this.extendFunc(this.markAllStrangerConversationRead),
                this.instance.getStrangerTotalUnread = this.extendFunc(this.getStrangerTotalUnread),
                this.instance.getStrangerPreview = this.extendFunc(this.getStrangerPreview),
                this.instance.getLocalStrangerConversation = this.extendFunc(this.getLocalStrangerConversation),
                this.resolve(c.Uk.MessageManager).injectProcessor(new f(this.ctx)),
                this.resolve(c.Uk.EventBus).subscribe(s.c5.StrangerUpgrade, (e=>(0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    yield this.resolve(c.Uk.CoreInstance).getMessagesByUser({
                        inboxType: e.inboxType
                    })
                }
                ))))
            }
            init() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    try {
                        yield this.getStrangerPreview({
                            sync: !0
                        })
                    } catch (e) {
                        a.Y.ctxWarn(this.ctx, "stranger plugin init error:", e)
                    }
                }
                ))
            }
            receivePacket(e) {
                var t;
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    if (e.cmd === i.m.IMCMD.STRANGER_NEW_MSG_NOTIFY) {
                        const n = null === (t = e.body) || void 0 === t ? void 0 : t.has_new_message_notify.message;
                        if (!this.resolve(c.Uk.ConversationManager).getRaw(n.conversation_id))
                            return;
                        const o = u.v.fromServerMessage(this.ctx, n, e.log_id);
                        this.resolve(c.Uk.MessageManager).upsert(o),
                        this.internalUnreadCount++,
                        this.resolve(c.Uk.EventBus).emit(s.c5.ReceiveNewStrangerMessage, this, o)
                    }
                }
                ))
            }
            ticker() {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    this.ctx.option.pullInterval && (yield this.refreshStrangerPreviewConversation(!0))
                }
                ))
            }
            refreshStrangerPreviewConversation(e=!1) {
                return (0,
                o.__awaiter)(this, void 0, void 0, (function*() {
                    e && (yield this.getStrangerConversationList({
                        cursor: r.ZERO,
                        limit: 1
                    }));
                    const t = this.resolve(c.Uk.ConversationManager).getConversationArray((e=>0 !== e.mode));
                    for (const e of t)
                        if (e.lastVisibleMessage)
                            return e;
                    return null
                }
                ))
            }
        }
    }
}]);
