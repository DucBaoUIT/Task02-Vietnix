{
  "name": "Testing Complete",
  "nodes": [
    {
      "parameters": {},
      "name": "Continue Loop",
      "type": "n8n-nodes-base.noOp",
      "typeVersion": 1,
      "position": [
        2300,
        560
      ],
      "id": "1e69e384-d2f7-494e-8c1f-5c503df91a73"
    },
    {
      "parameters": {
        "triggerTimes": {
          "item": [
            {
              "mode": "everyX",
              "value": 1
            }
          ]
        }
      },
      "name": "Cron1",
      "type": "n8n-nodes-base.cron",
      "typeVersion": 1,
      "position": [
        -1260,
        0
      ],
      "id": "7f3a3a52-3afe-4e8e-acbe-c465d1ea68ef"
    },
    {
      "parameters": {
        "command": "cat /root/alldomains.txt"
      },
      "type": "n8n-nodes-base.ssh",
      "typeVersion": 1,
      "position": [
        -880,
        0
      ],
      "id": "d3793769-71fa-4e25-a3a2-b9c917928ac8",
      "name": "Read Domain File",
      "credentials": {
        "sshPassword": {
          "id": "w8sTh5JlwcoD0kjA",
          "name": "SSH Password account"
        }
      }
    },
    {
      "parameters": {
        "url": "={{ $json.image }}",
        "responseFormat": "string",
        "options": {
          "fullResponse": true,
          "followRedirect": true
        }
      },
      "name": "Check IMAGES",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 1,
      "position": [
        1060,
        -460
      ],
      "id": "3b5756ce-f38e-412d-ba05-7e28a3a31baf",
      "onError": "continueRegularOutput"
    },
    {
      "parameters": {
        "authentication": "webhook",
        "content": "=Domain: {{ $json.domain }}\nStatus: {{ $json.error.status }}\nLog: {{ $json.error.code }}",
        "options": {}
      },
      "type": "n8n-nodes-base.discord",
      "typeVersion": 2,
      "position": [
        780,
        560
      ],
      "id": "7c951803-762d-4d00-a3c3-3a469a04c207",
      "name": "Log Status",
      "webhookId": "2fa98cec-4155-42b7-98ff-f76b5dadba22",
      "credentials": {
        "discordWebhookApi": {
          "id": "zvzNGUOWjVLOpUv7",
          "name": "Discord Webhook account"
        }
      }
    },
    {
      "parameters": {
        "authentication": "webhook",
        "content": "={{ $('Split Domains').item.json.domain }}\n{{ $json.message }}",
        "options": {
          "wait": false
        }
      },
      "type": "n8n-nodes-base.discord",
      "typeVersion": 2,
      "position": [
        2180,
        -300
      ],
      "id": "c6dc91fc-1bf4-4caf-8d9c-ce4682958270",
      "name": "Log Images, IFrame",
      "webhookId": "e5912c40-c879-43c5-b221-82754de90ae6",
      "executeOnce": true,
      "alwaysOutputData": false,
      "credentials": {
        "discordWebhookApi": {
          "id": "plVqcriWIgaVQOTN",
          "name": "Discord Webhook Images IFrames"
        }
      }
    },
    {
      "parameters": {
        "batchSize": 1,
        "options": {
          "reset": false
        }
      },
      "name": "Split Domains",
      "type": "n8n-nodes-base.splitInBatches",
      "typeVersion": 1,
      "position": [
        -480,
        0
      ],
      "id": "8cdd5d9e-c230-48c8-971d-6a16a8c1f171"
    },
    {
      "parameters": {
        "url": "={{$json.domain}}",
        "responseFormat": "string",
        "options": {
          "fullResponse": true,
          "followRedirect": true
        }
      },
      "name": "Fetch HTML",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 1,
      "position": [
        -220,
        0
      ],
      "id": "3dc1cfad-54a4-4f20-aa90-aa808b53e06e",
      "onError": "continueErrorOutput"
    },
    {
      "parameters": {
        "conditions": {
          "number": [
            {
              "value1": "={{ $json.statusCode }}",
              "operation": "equal",
              "value2": 200
            },
            {
              "value1": "={{ $json.statusCode }}",
              "operation": "equal",
              "value2": 200
            }
          ]
        }
      },
      "name": "Check Error",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [
        1320,
        -320
      ],
      "id": "83a164f7-74a1-4080-886b-78b75f98d9ac"
    },
    {
      "parameters": {
        "mode": "combineBySql"
      },
      "type": "n8n-nodes-base.merge",
      "typeVersion": 3.1,
      "position": [
        540,
        -340
      ],
      "id": "3307ddd7-4b0f-46c6-a72a-947827f2bce3",
      "name": "Merge"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 2
          },
          "conditions": [
            {
              "id": "738330fd-6b40-43b5-8ea1-a64ef4ec6f78",
              "leftValue": "={{ $json.image }}",
              "rightValue": "",
              "operator": {
                "type": "array",
                "operation": "empty",
                "singleValue": true
              }
            },
            {
              "id": "de5bd2f8-a3da-4b6b-892b-8e65c29f3b7e",
              "leftValue": "={{ $json.iframe }}",
              "rightValue": "",
              "operator": {
                "type": "array",
                "operation": "empty",
                "singleValue": true
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.2,
      "position": [
        780,
        -340
      ],
      "id": "6eb68132-cf85-41d8-8626-7c60f70fea34",
      "name": "Empty Array"
    },
    {
      "parameters": {
        "jsCode": "const results = [];\nlet hasEmptyInput = false;\n\nfor (const item of items) {\n  const code = item.json.error?.code;\n  const input = item.json.error?.input;\n\n  // Nếu input trống, đánh dấu để chuyển nhánh\n  if (!input || input.trim() === '') {\n    hasEmptyInput = true;\n    break; // chỉ cần 1 cái rỗng là đủ chuyển nhánh\n  }\n\n  if (code) {\n    results.push(`❌ Error Code: ${code}\\n📍 Destination: ${input}`);\n  }\n}\n\n// Trả kết quả để IF Node xử lý chuyển nhánh\nreturn [\n  {\n    json: {\n      message: results.length > 0 ? `🚨 Domain Error Report\\n\\n${results.join('\\n\\n')}` : '',\n      hasEmptyInput, // cờ cho IF node kiểm tra\n    },\n  },\n];\n"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1660,
        -300
      ],
      "id": "c919e7be-0636-4f32-93dd-259129f82b22",
      "name": "Code"
    },
    {
      "parameters": {
        "content": "# 2. Take and Split Domains\n\n## - SSH to server containing list Domains\n\n## - Parse list Domains to code\n\n## - Split domain to run Workflow",
        "height": 500,
        "width": 580,
        "color": 2
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        -900,
        -320
      ],
      "id": "6877e9fe-f380-460e-a6fb-2c4e8d3e0312",
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "content": "# 1. Cron Jobs \n\n## - Schedule to scan WordPress site",
        "height": 340,
        "width": 420
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        -1360,
        -160
      ],
      "id": "918ae366-e6d1-415a-b9aa-09dab2e81151",
      "name": "Sticky Note1"
    },
    {
      "parameters": {
        "content": "# 3. Checking Site Status \n\n## - Fetch HTML and get Status \n\n## - If Error(404) -> Notification on Status channel \n\n## - If Success -> Go to Check Images and IFrames ",
        "height": 560,
        "width": 440,
        "color": 3
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        -300,
        -380
      ],
      "id": "8dba4a50-af4c-4277-a60d-8304b2cb814d",
      "name": "Sticky Note2"
    },
    {
      "parameters": {
        "content": "# 4. Check Images and IFrames \n\n## - Extract All Images and IFrames on Website into array \n\n## - Merge into one \n\n## - Checking if both Array empty (Website default or only text), go to \"true\" branches -> Check the next website\n\n## - If Array not empty  -> Check images and iframes by HTTP Request Nodes ",
        "height": 960,
        "width": 1380,
        "color": 4
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        160,
        -780
      ],
      "id": "14cf1a9d-9cbe-41ab-99f4-9fb35e172d37",
      "name": "Sticky Note3"
    },
    {
      "parameters": {
        "content": "# 5. Notifications \n\n## - After Check by HTTP Request. If there is no error from both Images and IFrame - go to \"true\" branches to run the next domain.\n\n## - If there is an error -> Notify to Discord Channel Images IFrame.\n\n## - Node Code to merge all the Error in one - prevent many notifications for many files.",
        "height": 960,
        "width": 820,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1560,
        -780
      ],
      "id": "8cd2e329-985f-4d59-b125-8d6be16eb89a",
      "name": "Sticky Note4"
    },
    {
      "parameters": {
        "content": "# 6. Back to Split Batch to run next Domain \n## It's Done :)",
        "height": 180,
        "width": 380,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        2320,
        380
      ],
      "id": "492d5346-5d46-4920-b930-0d9765603997",
      "name": "Sticky Note5"
    },
    {
      "parameters": {
        "content": "# Additional \n\n# - This is notification for web status ",
        "height": 360,
        "width": 380,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        700,
        360
      ],
      "id": "1aeb9db7-52f5-48e2-9176-ff613512d120",
      "name": "Sticky Note6"
    },
    {
      "parameters": {
        "jsCode": "const raw = $node[\"Read Domain File\"].json[\"stdout\"];\nconst domains = raw.split(\"\\n\").filter(line => line.trim() !== \"\");\nreturn domains.map(domain => ({ json: { domain } }));\n"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        -680,
        0
      ],
      "id": "126b4c7c-7747-4a49-803a-dfbaf674d26c",
      "name": "Parse Domains"
    },
    {
      "parameters": {
        "operation": "extractHtmlContent",
        "extractionValues": {
          "values": [
            {
              "key": "image",
              "cssSelector": "img",
              "returnValue": "attribute",
              "attribute": "src",
              "returnArray": true
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.html",
      "typeVersion": 1.2,
      "position": [
        240,
        -320
      ],
      "id": "5edf5c6f-698d-4c06-b86e-c5277c6bbc4d",
      "name": "Extract Image"
    },
    {
      "parameters": {
        "operation": "extractHtmlContent",
        "extractionValues": {
          "values": [
            {
              "key": "iframe",
              "cssSelector": "iframe",
              "returnValue": "attribute",
              "attribute": "src",
              "returnArray": true
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.html",
      "typeVersion": 1.2,
      "position": [
        240,
        -20
      ],
      "id": "38e64749-68d7-406d-af12-7a425f2a9ebb",
      "name": "Extract IFrame"
    },
    {
      "parameters": {
        "url": "={{ $('Extract IFrame').item.json.iframe }}",
        "responseFormat": "string",
        "options": {
          "fullResponse": true,
          "followRedirect": true
        }
      },
      "name": "Check IFRAMES",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 1,
      "position": [
        1060,
        -200
      ],
      "id": "4fa16576-6018-4b48-a480-9960f1efb6c1",
      "onError": "continueRegularOutput"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 2
          },
          "conditions": [
            {
              "id": "f10f506f-6396-4a2a-a9f2-2e14858506a7",
              "leftValue": "={{ $json.hasEmptyInput }}",
              "rightValue": "",
              "operator": {
                "type": "boolean",
                "operation": "true",
                "singleValue": true
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.2,
      "position": [
        1880,
        -300
      ],
      "id": "97c5c905-fc81-44a5-b77b-a405eb8b6067",
      "name": "If"
    }
  ],
  "pinData": {},
  "connections": {
    "Continue Loop": {
      "main": [
        [
          {
            "node": "Split Domains",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Cron1": {
      "main": [
        [
          {
            "node": "Read Domain File",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Read Domain File": {
      "main": [
        [
          {
            "node": "Parse Domains",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Check IMAGES": {
      "main": [
        [
          {
            "node": "Check Error",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Log Images, IFrame": {
      "main": [
        [
          {
            "node": "Continue Loop",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Log Status": {
      "main": [
        [
          {
            "node": "Continue Loop",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Split Domains": {
      "main": [
        [
          {
            "node": "Fetch HTML",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Fetch HTML": {
      "main": [
        [
          {
            "node": "Extract Image",
            "type": "main",
            "index": 0
          },
          {
            "node": "Extract IFrame",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Log Status",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Check Error": {
      "main": [
        [
          {
            "node": "Continue Loop",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Code",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Merge": {
      "main": [
        [
          {
            "node": "Empty Array",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Empty Array": {
      "main": [
        [
          {
            "node": "Continue Loop",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Check IMAGES",
            "type": "main",
            "index": 0
          },
          {
            "node": "Check IFRAMES",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Code": {
      "main": [
        [
          {
            "node": "If",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Parse Domains": {
      "main": [
        [
          {
            "node": "Split Domains",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Extract Image": {
      "main": [
        [
          {
            "node": "Merge",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Extract IFrame": {
      "main": [
        [
          {
            "node": "Merge",
            "type": "main",
            "index": 1
          }
        ]
      ]
    },
    "Check IFRAMES": {
      "main": [
        [
          {
            "node": "Check Error",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If": {
      "main": [
        [
          {
            "node": "Continue Loop",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Log Images, IFrame",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "c0b0491f-1000-4f8f-b177-7095693c4d79",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "67d647721e03059cdf108441440a2d41ef4810359836c5d00eac2393b27716f0"
  },
  "id": "NXrP35anL7Rritku",
  "tags": [
    {
      "createdAt": "2025-06-10T07:12:51.230Z",
      "updatedAt": "2025-06-10T07:12:51.230Z",
      "id": "3qXahoQEupfzWWzu",
      "name": "WordPress with n8n"
    }
  ]
}
