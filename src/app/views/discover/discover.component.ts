import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../shared/services/data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  recommended = this.dataService.recommended;

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) { }

  title = 'decision-tree';
  currentQuestion = [
    [
      { title: "BUSINESS", id: 0, targets: [4, 5, 6, 7, 8, 9, 10], apps: [] },
      { title: "AUDIENCE", id: 1, targets: [11], apps: [] },
      { title: "OPTIMISATION", id: 2, targets: [12, 13, 14, 15], apps: [] },
      { title: "MEASUREMENT", id: 3, targets: [16, 17, 18], apps: [] },

    ]
  ]

  columns = '';

  apps;

  currentApps = [];

  questions = [
    { title: "BUSINESS", id: 0, targets: [4, 5, 6, 7, 8, 9, 10], apps: [] },
    { title: "AUDIENCE", id: 1, targets: [11], apps: [] },
    { title: "OPTIMISATION", id: 2, targets: [12, 13, 14, 15], apps: [] },
    { title: "MEASUREMENT", id: 3, targets: [16, 17, 18], apps: [] },
    { title: "I need to know about the category", id: 4, targets: [19, 20, 43], apps: [] },
    { title: "I need to know about my brand's competitors", id: 5, targets: [21, 22, 23, 24, 25, 26, 44], apps: [] },
    { title: "I need to know how to grow the brand ", id: 6, targets: [27, 28, 29, 30], apps: [] },
    { title: "I need to know about my current audience", id: 7, targets: [31, 32, 33], apps: [] },
    { title: "What is the right budget for my KPIs?", id: 8, targets: [34, 35], apps: [] },
    { title: "I want help with Insights?", id: 9, targets: [36, 37], apps: [] },
    { title: "I need to know about my companies strategy?", id: 10, targets: [45, 46, 47], apps: [] },
    { title: "How are you analysing or segmenting your audience?", id: 11, targets: [48, 49, 50, 51, 52, 53, 54, 55], apps: [] },
    { title: "I want to optimise my media across channels", id: 12, targets: [56, 57, 58, 59, 60, 61, 62], apps: [] },
    { title: "I want to optimise my media within a channel", id: 13, targets: [63, 64, 65], apps: [] },
    { title: "I want to find out how to use data to optimise audience delivery", id: 14, targets: [66, 67, 68], apps: [] },
    { title: "I want to predict the impact of my campaign", id: 15, targets: [69, 70, 71, 72], apps: [] },
    { title: "I want to measure overall campaign success", id: 16, targets: [73, 74, 75, 76, 77, 78, 79, 80], apps: [] },
    { title: "I want to quantify how different elements / components of my media plan are performing", id: 17, targets: [], apps: [45] },
    { title: "I want to explore options for advanced analytics", id: 18, targets: [81, 82], apps: [] },
    { title: "What are the trends in paid, owned and earned marketing channels for my category?", id: 19, targets: [], apps: [0] },
    { title: "What are the consumer trends impacting behaviour in my category?", id: 20, targets: [], apps: [1] },
    { title: "Who are my brand's key competitors?", id: 21, targets: [], apps: [2] },
    { title: "What are my competitors spending on media?", id: 22, targets: [], apps: [3] },
    { title: "What are my competitors saying in creative?", id: 23, targets: [], apps: [4] },
    { title: "What is my brand's market share vs. key competitors and how has this changed?", id: 24, targets: [], apps: [2] },
    { title: "How do people view my brand versus my competitors?", id: 25, targets: [], apps: [5] },
    { title: "What are the competitive strengths and weaknesses of my brand versus competitors in each contact point?", id: 26, targets: [], apps: [6] },
    { title: "Should we grow by stealing competitor share or should we grow the category?", id: 27, targets: [], apps: [7] },
    { title: "Should we grow by increasing penetration or frequency of purchase?", id: 28, targets: [], apps: [7] },
    { title: "What are the key brand metrics we need to shift in order to drive sales?", id: 29, targets: [], apps: [8] },
    { title: "Who are the most valuable audiences and what is the potential to drive brand growth?", id: 30, targets: [], apps: [9] },
    { title: "Who visits my websites?", id: 31, targets: [], apps: [10] },
    { title: "Who engages with my media?", id: 32, targets: [], apps: [11] },
    { title: "What does brand consumer look like?", id: 33, targets: [], apps: [12] },
    { title: "What level of media investment is required to reach sales goals?", id: 34, targets: [], apps: [13] },
    { title: "What level of media investment is required to reach key brand metric goals?", id: 35, targets: [], apps: [14] },
    { title: "What are the key insights to learn to help drive growth?", id: 36, targets: [], apps: [15] },
    { title: "What are the key insights to learn to help drive change?", id: 37, targets: [], apps: [15] },
    { title: "I would like to know how my companies industry is performing?", id: 38, targets: [], apps: [16] },
    { title: "I want to differentiate my brand from my competitors?", id: 39, targets: [], apps: [17] },
    { title: "I want to create focus groups to get an understanding of where my company sits in the market?", id: 40, targets: [], apps: [15] },
    { title: "I want to create focus groups to get an understanding of where my competitors sit in the market?", id: 41, targets: [], apps: [15] },
    { title: "I would like to see key statistics about my competitors?", id: 42, targets: [], apps: [7] },
    { title: "How has Coronavirus affected my Category and Industry?", id: 43, targets: [], apps: [7] },
    { title: "How has Coronavirus affected my competitors?", id: 44, targets: [], apps: [7] },
    { title: "What should my media strategy be during the Coronavirus pandemic?", id: 45, targets: [], apps: [7] },
    { title: "What would happen if the is another unexpected global crisis?", id: 46, targets: [], apps: [18] },
    { title: "What should my media strategy be during an economic downturn?", id: 47, targets: [], apps: [18] },
    { title: "I want to understand the attitudes and opinions of my audience", id: 48, targets: [], apps: [19] },
    { title: "How can I identify specific audiences?", id: 49, targets: [], apps: [19] },
    { title: "How can I target a specific audience?", id: 50, targets: [], apps: [19] },
    { title: "By brand journey i.e. brand purchase or affinity", id: 51, targets: [83, 84, 85, 86, 87], apps: [] },
    { title: "By broad attitudes and motivations ", id: 52, targets: [88, 89, 90, 91], apps: [] },
    { title: "By path-to-purchase or conversion", id: 53, targets: [92, 93, 94, 95], apps: [] },
    { title: "By location or proximity ", id: 54, targets: [96, 97, 98, 99], apps: [] },
    { title: "I just want general themes or trends for audience behaviour in my category", id: 55, targets: [], apps: [1] },
    { title: "How can I optimise my budget investment across channels to achieve reach goals?", id: 56, targets: [], apps: [29] },
    { title: "How can I optimise my budget investment across channels to achieve sales response goals?", id: 57, targets: [], apps: [29] },
    { title: "How can I optimise my budget investment across channels to achieve brand metric goals?", id: 58, targets: [], apps: [29] },
    { title: "How can I optimise my budget investment across channels to achieve other campaign goals?", id: 59, targets: [], apps: [30] },
    { title: "How can I optimise my media investment across a number of brands in my portfolio?", id: 60, targets: [], apps: [29] },
    { title: "How can I optimise my media investment across markets / territories?", id: 61, targets: [], apps: [29] },
    { title: "How can I optimise my media flighting to deliver increased awareness and consideration for the same budget?", id: 62, targets: [], apps: [14] },
    { title: "How can I optimise my AV media investment to drive incremental coverage?", id: 63, targets: [], apps: [31] },
    { title: "How can I optimise my TV activity by sales point, channel and daypart?", id: 64, targets: [], apps: [32] },
    { title: "What is the optimum frequency for my media activity?", id: 65, targets: [], apps: [33] },
    { title: "What data can we use to target more efficiently/ effectively?", id: 66, targets: [], apps: [34] },
    { title: "Can I use data to target lookalike audiences?", id: 67, targets: [], apps: [35] },
    { title: "How can I target purchaser audiences on TV?", id: 68, targets: [], apps: [36] },
    { title: "Do I have enough budget to make a meaningful impact on brand metrics or sales?", id: 69, targets: [], apps: [13] },
    { title: "Can I accurately forecast how my planned campaign will deliver to traffic, footfall or modelled proxy for sales data?", id: 70, targets: [], apps: [37] },
    { title: "How scalable is my campaign?", id: 71, targets: [], apps: [38] },
    { title: "Can I accurately forecast how my planned campaign will deliver awareness and consideration using past tracking data?", id: 72, targets: [], apps: [14] },
    { title: "How do we determine what KPI's and goals we should focus upon?", id: 73, targets: [], apps: [7] },
    { title: "What was the outcome of my past campaigns?", id: 74, targets: [], apps: [39] },
    { title: "What are the main learnings of my past campaigns?", id: 75, targets: [], apps: [39] },
    { title: "What is my total campaign reach?", id: 76, targets: [], apps: [40] },
    { title: "How do we determine what metrics we should focus upon?", id: 77, targets: [], apps: [41] },
    { title: "How do we track overall success and delivery of KPIs?", id: 78, targets: [], apps: [42] },
    { title: "If we don’t have access to sales (or other end-point metric) how can we evaluate performance with competitive context too?", id: 79, targets: [], apps: [43] },
    { title: "What is my total campaign impact on brand metrics?", id: 80, targets: [], apps: [44] },
    { title: "Which touchpoints are best to drive sales / penetration / brand outcomes?", id: 81, targets: [], apps: [39] },
    { title: "Which brand attributes are the key drivers of sales / penetration growth?", id: 82, targets: [], apps: [8] },
    { title: "How can I identify buyer/ non-buyers of my brand/ competitor brands?", id: 83, targets: [], apps: [20] },
    { title: "Who are the most valuable (and vulnerable) purchaser/affinity segments?", id: 84, targets: [], apps: [21] },
    { title: "What characteristics do purchaser/affinity segments have - attitudes, behaviour, demographics?", id: 85, targets: [], apps: [21] },
    { title: "Which contact points are best to reach and engage with purchaser/affinity segment(s)?", id: 86, targets: [], apps: [6] },
    { title: "How do we monitor and measure performance of communications against purchaser/affinity segments?", id: 87, targets: [], apps: [19] },
    { title: "Which segments have the highest propensity to purchase your brand?", id: 88, targets: [], apps: [22] },
    { title: "What is the potential value to the brand?", id: 89, targets: [], apps: [22] },
    { title: "Which contact points are best to reach and engage with the segment(s)?", id: 90, targets: [], apps: [22] },
    { title: "How do we monitor and measure performance of communications?", id: 91, targets: [], apps: [23] },
    { title: "What are the barriers and drivers for brand choice in the category?", id: 92, targets: [], apps: [24] },
    { title: "What are the decision making process stages for brand choice in the category?", id: 93, targets: [], apps: [25] },
    { title: "What is the role for contact points / influencers at different stages in the decision making process?", id: 94, targets: [], apps: [26] },
    { title: "Where does my brand perform well and where is improvement required on the path-to-purchase?", id: 95, targets: [], apps: [25] },
    { title: "How can audiences in proximity to my stores be defined and segmented?", id: 96, targets: [], apps: [27] },
    { title: "What characteristics do proximity segments have - attitudes, behaviour, demographics?", id: 97, targets: [], apps: [28] },
    { title: "How do we monitor and measure performance of communications against proximity segments?", id: 98, targets: [], apps: [27] },
    { title: "Does proximity to product affect likelihood of purchase? (Should Boots bother reaching a person who lives next to a Superdrug?)", id: 99, targets: [], apps: [20] },
  ]

  questionHeaders = [
    'What do you want to do?',
    'How are you analysing or segmenting your audience?',
    'What do you want to find?'
  ]

  ngOnInit(): void {
    this.dataService.recommended = [];
    this.recommended = this.dataService.recommended;
    this.apps = this.dataService.apps;

    const users = [{
      user: 'Harry',
      access: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153
      ],
      installed: []
    }]

    // this.dataService.sendData(users, 'users');
  }

  cardClick(i, q, h) {
    if ((h < this.currentQuestion.length - 1)) {
      for (let index = h; index < this.currentQuestion.length; index++) {
        this.currentQuestion[index].forEach(q => {
          q['selected'] = false;
        });
      }
      this.currentQuestion = this.currentQuestion.slice(0, h + 1);
    }
    let nextQ = []
    q['selected'] = true;
    this.questions[i].targets.forEach(target => {
      nextQ.push(this.questions[target]);
    })
    this.currentQuestion.push(nextQ);
  }

  getApps(apps) {
    apps.forEach(id => {
      this.recommended.push(this.apps.all[id]);
    });
    this.router.navigate(['recommended']);
  }

  backClick() {
    this.currentQuestion[this.currentQuestion.length - 1].forEach(q => {
      q['selected'] = false;
    });
    this.currentQuestion.pop()
    this.currentQuestion[this.currentQuestion.length - 1].forEach(q => {
      q['selected'] = false;
    });
  }

}
