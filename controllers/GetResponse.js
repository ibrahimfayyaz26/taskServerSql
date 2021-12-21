const axios = require("axios");

exports.Checking = async (user) => {
    const data = await axios({
        method: "get",
        url: "https://api.getresponse.com/v3/contacts",
        headers: {
            "X-Auth-Token": "api-key 2k2b6nc004oy2ska7n4qmendkt3itnod",
            "Content-Type": "application/json",
        },
    });

    const re = await data.data.find((q) => {
        return q.email == user.email
    })
    if (re) {
        return false;
    } else {
        return true;
    }
};

exports.initializeGetResponse = async (user) => {
    const data = await axios({
        method: "post",
        url: "https://api.getresponse.com/v3/contacts",
        data: {
            email: user.email,
            name: `${user.name} ${user.lastName}`,
            campaign: {
                campaignId: "Z8UWT",
            },
            tags: [{
                tagId: "Vxbnd",
            }, ],
        },
        headers: {
            "X-Auth-Token": "api-key 2k2b6nc004oy2ska7n4qmendkt3itnod",
            "Content-Type": "application/json",
        },
    })
}

exports.GetResponseCom = async (user) => {
    const data = await axios({
        method: "get",
        url: "https://api.getresponse.com/v3/contacts",
        headers: {
            "X-Auth-Token": "api-key 2k2b6nc004oy2ska7n4qmendkt3itnod",
            "Content-Type": "application/json",
        },
    });

    const re = await data.data.find((q) => {
        return q.email == user.email
    })
    if(!re){
        return false;
    }
    // console.log(re)
    axios({
        method: "post",
        url: `https://api.getresponse.com/v3/contacts/${re.contactId}`,
        data: {
            email: user.email,
            name: `${user.name} ${user.lastName}`,
            campaign: {
                campaignId: "Z8UWT",
            },
            tags: [{
                tagId: "Vxb4I",
            }, ],
            customFieldValues: [{
                    customFieldId: "pzvJpS",
                    value: [user.country],
                },
                {
                    customFieldId: "pzvJ6c",
                    value: [user.city],
                },
                {
                    customFieldId: "pzvJus",
                    value: [user.phone],
                },
                {
                    customFieldId: "prAC5d",
                    value: [user.language.lang],
                },
                {
                    customFieldId: "pzvJMY",
                    value: [user.industry.indus],
                },
                {
                    customFieldId: "prEqpj",
                    value: [user.businessName],
                },
            ],
        },
        headers: {
            "X-Auth-Token": "api-key 2k2b6nc004oy2ska7n4qmendkt3itnod",
            "Content-Type": "application/json",
        },
    })
}