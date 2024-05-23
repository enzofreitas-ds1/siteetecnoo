 document.getElementById('birthdate').addEventListener('change', function() {
        var birthdate = new Date(this.value);
        var year = birthdate.getFullYear();
        var courseSection = document.getElementById('courseSection');
        
        if (year === 2010) {
            courseSection.style.display = 'block';
        } else {
            courseSection.style.display = 'none';
        }
    });

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var errorDiv = document.getElementById('error');
        errorDiv.textContent = '';

        var name = document.getElementById('name').value.trim();
        var birthdate = document.getElementById('birthdate').value;
        var course = document.getElementById('course').value;

        if (name.length === 0) {
            errorDiv.textContent = 'Por favor, insira seu nome.';
            return;
        }

        if (name.length > 60) {
            errorDiv.textContent = 'O nome não pode exceder 60 caracteres.';
            return;
        }

        if (birthdate === '') {
            errorDiv.textContent = 'Por favor, insira sua data de nascimento.';
            return;
        }

        var birthYear = new Date(birthdate).getFullYear();
        if (birthYear !== 2010) {
            errorDiv.textContent = 'Somente alunos nascidos em 2010 podem fazer a inscrição na ETEC FHG para o ano de 2025.';
            return;
        }

        if (course === '') {
            errorDiv.textContent = 'Por favor, selecione um curso.';
            return;
        }

        alert('A inscrição do aluno(a) ' + name + ' para o curso de '+ course +' foi realizada com sucesso, compareça na ETEC FHG no dia 14/12/2024 as 10H para realizar a prova. Boa Sorte!!!');
    });


    function enviarAvaliacao() {
        const opiniao = document.getElementById('opiniao').value;
        if (opiniao.trim() !== "") {
            alert('Sua opnião/duvida foi enviada com sucesso!');
            document.getElementById('avaliacaoForm').reset();
        } else {
            alert('Por favor, preencha sua opinião/duvida antes de enviar.');
        }
    }

    function apagarAvaliacao() {
        document.getElementById('avaliacaoForm').reset();
    }