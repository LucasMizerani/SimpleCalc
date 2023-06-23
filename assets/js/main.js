/*function criaCalc() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },   

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

       realizaConta(){
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
                
            } catch(e) {
                alert('Conta inválida');
                return;
            }
       },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                };
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                };
            });
        },
        
        btnParaDisplay(valor){
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalc();
calculadora.inicia();*/

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {

        this.capturaCliques();
        this.caputuraEnter();
        this.capturaEsc();
    };

    this.caputuraEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        })
    };

    this.capturaEsc = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 27) this.clear();
        })
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = el => this.display.value = '';
    this.del = el => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {

        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta
        } catch (e) {
            alert('Conta Inválida');
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.inicia();