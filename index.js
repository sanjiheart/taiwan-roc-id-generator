const { createApp } = Vue

const app = createApp({
    data() {
        return {
            // generator
            cityCode: 'A10',
            gender: '1',
            gResult: '',
            // validator
            source: '',
            vResult: ''
        }
    },
    methods: {
        generate() {
            let cityCodeNum = this.cityCode.split('');
            let n1 = parseInt(cityCodeNum[1]);
            let n2 = parseInt(cityCodeNum[2]);
            let n3 = parseInt(this.gender);
            let n4 = Math.floor(Math.random() * 9) + 1;
            let n5 = Math.floor(Math.random() * 9) + 1;
            let n6 = Math.floor(Math.random() * 9) + 1;
            let n7 = Math.floor(Math.random() * 9) + 1;
            let n8 = Math.floor(Math.random() * 9) + 1;
            let n9 = Math.floor(Math.random() * 9) + 1;
            let n10 = Math.floor(Math.random() * 9) + 1;
            // mod 10 to get units digit
            let n11 = (10 - (n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1) % 10) % 10;
            this.gResult = cityCodeNum[0] + String(n3) + String(n4) + String(n5) + String(n6) + String(n7) + String(n8) + String(n9) + String(n10) + String(n11);
        },
        validate() {
            if (!!this.source) {
                if (this.source.length === 10) {
                    let n1 = 0;
                    let n2 = 0;
                    this.$cityCodeObjList.forEach(cityCodeObj => {
                        if (cityCodeObj.code.includes(this.source[0])) {
                            let cityCodeNum = cityCodeObj.code.split('');
                            n1 = parseInt(cityCodeNum[1]);
                            n2 = parseInt(cityCodeNum[2]);
                        }
                    });
                    let n3 = parseInt(this.source[1]);
                    let n4 = parseInt(this.source[2]);
                    let n5 = parseInt(this.source[3]);
                    let n6 = parseInt(this.source[4]);
                    let n7 = parseInt(this.source[5]);
                    let n8 = parseInt(this.source[6]);
                    let n9 = parseInt(this.source[7]);
                    let n10 = parseInt(this.source[8]);
                    let n11 = parseInt(this.source[9]);
                    let checkNum = (10 - (n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1) % 10) % 10;
                    this.vResult = n11 === checkNum ? '出現了，惡鬼滅殺！' : '未出現，繼續奮戰！';
                } else {
                    this.vResult = '長度不足，吸吸失敗！';
                }
            }
        }
    },
    mounted() {
        new ClipboardJS('.btn-secondary');
    }
});

app.config.globalProperties.$cityCodeObjList = [
    { name: '臺北市(A)', code: 'A10' },
    { name: '臺中市(B)', code: 'B11' },
    { name: '基隆市(C)', code: 'C12' },
    { name: '臺南市(D)', code: 'D13' },
    { name: '高雄市(E)', code: 'E14' },
    { name: '新北市(F)', code: 'F15' },
    { name: '宜蘭縣(G)', code: 'G16' },
    { name: '桃園市(H)', code: 'H17' },
    { name: '嘉義市(I)', code: 'I34' },
    { name: '新竹縣(J)', code: 'J18' },
    { name: '苗栗縣(K)', code: 'K19' },
    { name: '臺中縣(L)', code: 'L20' },
    { name: '南投縣(M)', code: 'M21' },
    { name: '彰化縣(N)', code: 'N22' },
    { name: '新竹市(O)', code: 'O35' },
    { name: '雲林縣(P)', code: 'P23' },
    { name: '嘉義縣(Q)', code: 'Q24' },
    { name: '臺南縣(R)', code: 'R25' },
    { name: '高雄縣(S)', code: 'S26' },
    { name: '屏東縣(T)', code: 'T27' },
    { name: '花蓮縣(U)', code: 'U28' },
    { name: '臺東縣(V)', code: 'V29' },
    { name: '金門縣(W)', code: 'W32' },
    { name: '澎湖縣(X)', code: 'X30' },
    { name: '陽明山管理局(Y)', code: 'Y31' },
    { name: '連江縣(Z)', code: 'Z33' }
]

app.mount('#app');