module.exports = {
    views: [
        {
            "description": "Initial view wefweafwefwfwfwwaefwegwe4wefwafwfwe",
            "choices": [
                {
                    "description": "Go to 1",
                    "target_view_id": 1
                }
            ]
        },
        {
            "description": "View 1",
            "choices": [
                {
                    "description": "Go to 0",
                    "target_view_id": 0
                },
                {
                    "description": "Go to end",
                    "target_view_id": 2
                }
            ]
        },
        {
            "description": "End",
            "choices": []
        }
    ],
    initial_view_id: 0
};
