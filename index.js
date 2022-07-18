const { createApp } = Vue

const app = createApp({
    data() {
        return {
            // generator
            cityObj: this.$cityObjList[0],
            gender: '1',
            gResult: '',
            // validator
            source: '',
            vResult: ''
        }
    },
    methods: {
        getCheckNum(id) {
            let checkNum = (10 - (id[0] * 1 + id[1] * 9 + id[2] * 8 + id[3] * 7 + id[4] * 6 + id[5] * 5 + id[6] * 4 + id[7] * 3 + id[8] * 2 + id[9] * 1) % 10) % 10;
            return checkNum;
        },
        generate() {
            let id = [this.cityObj.n1, this.cityObj.n2, parseInt(this.gender)];
            for (let i = 3; i < 10; i++) {
                id[i] = Math.floor(Math.random() * 10);
            }
            id[10] = this.getCheckNum(id);
            this.gResult = `${this.cityObj.code}${id[2]}${id[3]}${id[4]}${id[5]}${id[6]}${id[7]}${id[8]}${id[9]}${id[10]}`;
        },
        validate() {
            let id = [0, 0];
            this.$cityObjList.forEach(cityObj => {
                if (cityObj.code === this.source[0]) {
                    id = [cityObj.n1, cityObj.n2];
                }
            });
            for (let i = 1; i < 10; i++) {
                id.push(parseInt(this.source[i]));
            }
            let checkNum = this.getCheckNum(id);
            this.vResult = id[10] === checkNum ? '出現了，惡鬼滅殺！' : '未出現，繼續血戰！';
        }
    },
    mounted() {
        new ClipboardJS('.btn-secondary');
    }
});

app.config.globalProperties.$cityObjList = [
    { name: '臺北市(A)', code: 'A', n1: 1, n2: 0 },
    { name: '臺中市(B)', code: 'B', n1: 1, n2: 1 },
    { name: '基隆市(C)', code: 'C', n1: 1, n2: 2 },
    { name: '臺南市(D)', code: 'D', n1: 1, n2: 3 },
    { name: '高雄市(E)', code: 'E', n1: 1, n2: 4 },
    { name: '新北市(F)', code: 'F', n1: 1, n2: 5 },
    { name: '宜蘭縣(G)', code: 'G', n1: 1, n2: 6 },
    { name: '桃園市(H)', code: 'H', n1: 1, n2: 7 },
    { name: '嘉義市(I)', code: 'I', n1: 3, n2: 4 },
    { name: '新竹縣(J)', code: 'J', n1: 1, n2: 8 },
    { name: '苗栗縣(K)', code: 'K', n1: 1, n2: 9 },
    { name: '臺中縣(L)', code: 'L', n1: 2, n2: 0 },
    { name: '南投縣(M)', code: 'M', n1: 2, n2: 1 },
    { name: '彰化縣(N)', code: 'N', n1: 2, n2: 2 },
    { name: '新竹市(O)', code: 'O', n1: 3, n2: 5 },
    { name: '雲林縣(P)', code: 'P', n1: 2, n2: 3 },
    { name: '嘉義縣(Q)', code: 'Q', n1: 2, n2: 4 },
    { name: '臺南縣(R)', code: 'R', n1: 2, n2: 5 },
    { name: '高雄縣(S)', code: 'S', n1: 2, n2: 6 },
    { name: '屏東縣(T)', code: 'T', n1: 2, n2: 7 },
    { name: '花蓮縣(U)', code: 'U', n1: 2, n2: 8 },
    { name: '臺東縣(V)', code: 'V', n1: 2, n2: 9 },
    { name: '金門縣(W)', code: 'W', n1: 3, n2: 2 },
    { name: '澎湖縣(X)', code: 'X', n1: 3, n2: 0 },
    { name: '陽明山管理局(Y)', code: 'Y', n1: 3, n2: 1 },
    { name: '連江縣(Z)', code: 'Z', n1: 3, n2: 3 }
];

app.mount('#app');