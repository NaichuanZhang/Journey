// location is not supported in non https domain yet
// function getLocationString(lat, long) {
//     res = $.get("https://api.bigdatacloud.net/data/reverse-geocode-client?", {
//         latitude: lat,
//         longitude: long,
//         localityLanguage: "zh"
//     })
//     return res.responseJSON.city
// }
//
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((response) => {
//
//         });
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }


function checkVariable() {
    if (typeof TripettoAutoscroll === "object") {
        TripettoAutoscroll.run({
            element: document.body,
	    definition: {"name":"Journey","language":"zh-Hans","preface":{"title":"Life is a Journey\nWhy not write something?\n打牌； 打牌 ；打牌\n怎能如此堕落，明天不打牌\n打牌🤣"},"epilogue":{"title":"睡个好觉！","image":"https://media.giphy.com/media/tIwmTQ64D52XTuL8xd/giphy.gif"},"clusters":[{"id":"4b56ffecc31e57d65e9558b872b7ef87d164e99774ee6232ca12d6bbf5c2251e","nodes":[{"id":"42fc325f902d3722ade66f985f6fa0b91ac79e5786205ef9012f88c8aea7a509","name":"今天是？","nameVisible":true,"slots":[{"id":"86a19a3e6e8ba517882bd35f69d131826d37a4085343146d28fc432d6ee13f82","type":"date","kind":"static","reference":"date","label":"Date","precision":"days"}],"block":{"type":"tripetto-block-date","version":"1.0.16"}}]},{"id":"426eea5685fedb11f66b9853fd2f3271c4717fad3f9a4b2d76044a76cb27d610","name":"work_score","nodes":[{"id":"9c4ddbb696c7d569508e79756dcc2e2166dc42947a876aa5b55baa887c24bad7","name":"今天工作怎么样？","nameVisible":true,"slots":[{"id":"942e9ce800f155de3c38bae4e3a330e0425a3c97c281ae66a774914463ded79d","type":"string","kind":"static","reference":"choice","label":"Choice"}],"block":{"type":"tripetto-block-multiple-choice","version":"2.0.1","imageURL":"","imageWidth":"400","imageAboveText":false,"choices":[{"id":"c1efaa8cb2738455d9b8e487e62c63767e739394d9fb35b09a69948aa55da0c2","name":"S -- 效率超高，精神满满"},{"id":"621ef5f621acf11c110ab2114178e07b29a2b522e392cbb3528fd0495782fa2c","name":"A -- 今天还不错，没有拖延"},{"id":"c732778d5a7052cc83fc15a2b5ec7f336dff4296614594a08e4649f7819a56e2","name":"B -- 很平常的一天"},{"id":"bed1a26d472e3975b946bc7ac1d9990873f577bda0deebb09e2f5bb894d7704e","name":"C -- 头晕眼花，想睡觉，严重拖延"}]}}]},{"id":"d0fd772077b6f82f4257149d7cb60bdb60a64da9d35fbc28f37e921ede60c6ed","name":"life_score","nodes":[{"id":"22b959f4c3379c6de6df061de9e951137ca2261c7c934605dd5f1f0137bd6613","name":"今天生活怎么样？","nameVisible":true,"slots":[{"id":"f847a171e05c809e32049e5382f7079e7b085075cf9d41bf93054fe23bae3d12","type":"string","kind":"static","reference":"choice","label":"Choice"}],"block":{"type":"tripetto-block-multiple-choice","version":"2.0.1","imageURL":"","imageWidth":"","imageAboveText":false,"choices":[{"id":"140a52ea70bb6d353114f48b19fc4406ac38fe176c3ffa6e3e069b24ab74475a","name":"S -- 心情愉快，饮食健康，运动30min+"},{"id":"2794c27506c2435b8d25c4be845d466dfd10d818b352e538cdccb82a9885372c","name":"A -- 心情愉快，饮食健康，运动"},{"id":"c8e329a02e4b223ba1c4445f54c255a51eab0559f89ba80bbd07189b77d4e213","name":"B -- 心情有起伏，一般般"},{"id":"bb369145be2f287f44bd931a5fcfa4c8518350003beeb0724571b2528f22e50f","name":"C -- 心情不太好，压力爆表"}]}}]},{"id":"f236fc755e3c1ced728d093a4ff3b1ef47eb016d8afc574c3a92b445f4c3f60a","name":"expense","nodes":[{"id":"f8defecf1949c1beeb508e2c54a3c9296988779c8bec2530060ded1a9b66e68e","name":"今天为了生活投资了多少？","nameVisible":true,"placeholder":"8.88","slots":[{"id":"bda061ba31c7079e3de08a592538701bd8c9336abb50637ad8743afa47c0d13c","type":"numeric","kind":"static","reference":"number","label":"Number","separator":",","decimal":".","suffix":"$","precision":2}],"block":{"type":"tripetto-block-number","version":"4.0.1"}}]},{"id":"8f728d07090f13ce0ffba2e4cb9dc410ccf038e98b0f9018dc1358a0d40f4a87","name":"day_overview","nodes":[{"id":"5760b39ef98684be11e221bcae7d53f6d79d9b4fdd7fa259becf856150553fa4","name":"今天干了点什么？","nameVisible":true,"description":"昨天的计划：@cc36f75241582b1f2442e9a44729900c16fdec4b882ad5875a0d0b8b86904d19","slots":[{"id":"053fb4f1ea2ff6cbe2283f3ef0da2b68a06cdcf2cea9070e92bb8d6c4189d969","type":"text","kind":"static","reference":"value","label":"Multi-line text"}],"block":{"type":"tripetto-block-textarea","version":"3.0.1"}},{"id":"5aac24c6f47f50524321e1bb2bd7346d0a6871102cd80a7261dbbfe93f90cff5","name":"今天学到了什么？","nameVisible":true,"slots":[{"id":"6a41d47501a3bc2faa204ec08c17f7385f7ea3e8a9160cb4fa2f6b109abe08ac","type":"text","kind":"static","reference":"value","label":"Multi-line text"}],"block":{"type":"tripetto-block-textarea","version":"3.0.1"}},{"id":"070378fe664ae3f8914aefa38e1dd92bb25cb49662c37242481e37e179257d51","name":"给明天列个计划吧 : )","nameVisible":true,"slots":[{"id":"3a11c34410dbf2747235bddfb9a98eb99c2d4c77cd1b6cb37d0c77b831dae42e","type":"text","kind":"static","reference":"value","label":"Multi-line text"}],"block":{"type":"tripetto-block-textarea","version":"3.0.1"}}]}],"builder":{"name":"tripetto","version":"2.0.4"}},
    l10n: {"locale":"auto","contract":{"name":"tripetto-runner-autoscroll","version":"3.5.4"}},
           onSubmit: function(instance) {
                if (navigator.vibrate) { //震动着玩一下，好像只支持安卓设备
                    navigator.vibrate(200);
                }
                // TODO: Handle the results
                // For example retrieve the results as a CSV-file:
                var csv = TripettoRunner.Export.CSV(instance);
                // Or retrieve the individual fields:
                var form_result = TripettoRunner.Export.fields(instance);
                var fields = form_result.fields;
                var fingerprint = form_result.fingerprint;
                console.dir(fields);
                var result_hash = {};
                result_hash["questions"] = fields.map( (field) => { return field.name } );
                result_hash["answers"] = fields.map( (field) => { return field.string } );
                $.post("/api/journal/create", { 
                    user_id: current_user_id,
                    journal_response: JSON.stringify(result_hash),
                    fingerprint: fingerprint
                }, function(ressponse) {
                    window.location.href = "/pages/journey";
                });
            }
        });
    } else {
        setTimeout(() => {
            checkVariable()
        }, 1000);
    }
}
checkVariable()



