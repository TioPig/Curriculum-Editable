// Funciones para manejar la imagen
function previewImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('imagePreview').src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function removeProfileImage() {
    document.getElementById('imagePreview').src = 'https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg?semt=ais_hybrid';
    document.getElementById('profileImage').value = '';
}

// Función para agregar competencia
function addSkill() {
    const container = document.getElementById('skillsContainer');
    const skillGroup = document.createElement('div');
    skillGroup.className = 'skill-input-group';
    skillGroup.innerHTML = `
        <select class="icon-select">
            <option value="fa-code">💻 Código</option>
            <option value="fa-database">🗄️ Base de datos</option>
            <option value="fa-globe">🌐 Web</option>
            <option value="fa-mobile">📱 Móvil</option>
            <option value="fa-cogs">⚙️ Herramientas</option>
        </select>
        <input type="text" placeholder="Nombre de la competencia">
        <button type="button" class="btn btn-remove" onclick="removeSkill(this)">
            <i class="fas fa-trash"></i>
        </button>
    `;
    container.appendChild(skillGroup);
}

function removeSkill(button) {
    button.parentElement.remove();
}
// Función para agregar experiencia
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const expGroup = document.createElement('div');
    expGroup.className = 'form-group experience-group';
    expGroup.innerHTML = `
        <input type="text" placeholder="Cargo" class="form-control">
        <input type="text" placeholder="Empresa" class="form-control">
        <div class="date-range">
            <input type="month" class="form-control">
            <span>hasta</span>
            <div class="end-date-group">
                <input type="month" class="form-control">
                <label class="current-checkbox">
                    <input type="checkbox" onchange="toggleCurrentDate(this)"> Actualidad
                </label>
            </div>
        </div>
        <textarea placeholder="Descripción de responsabilidades" class="form-control"></textarea>
        <div class="responsibilities-container">
            <div class="responsibility-item">
                <input type="text" placeholder="Logro o responsabilidad" class="form-control">
                <button type="button" class="btn btn-remove" onclick="removeResponsibility(this)">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
        <button type="button" class="btn btn-add" onclick="addResponsibility(this)">
            <i class="fas fa-plus"></i> Agregar Logro
        </button>
        <button type="button" class="btn btn-remove" onclick="removeExperience(this)">
            <i class="fas fa-trash"></i> Eliminar Experiencia
        </button>
    `;
    container.appendChild(expGroup);
}

function removeExperience(button) {
    button.closest('.experience-group').remove();
}

function addResponsibility(button) {
    const container = button.previousElementSibling;
    const responsibilityItem = document.createElement('div');
    responsibilityItem.className = 'responsibility-item';
    responsibilityItem.innerHTML = `
        <input type="text" placeholder="Logro o responsabilidad" class="form-control">
        <button type="button" class="btn btn-remove" onclick="removeResponsibility(this)">
            <i class="fas fa-minus"></i>
        </button>
    `;
    container.appendChild(responsibilityItem);
}

function removeResponsibility(button) {
    button.parentElement.remove();
}
// Función para agregar educación
function addEducation() {
    const container = document.getElementById('educationContainer');
    const eduGroup = document.createElement('div');
    eduGroup.className = 'form-group education-group';
    eduGroup.innerHTML = `
        <input type="text" placeholder="Título" class="form-control">
        <input type="text" placeholder="Institución" class="form-control">
        <div class="date-range">
            <input type="month" class="form-control">
            <span>hasta</span>
            <div class="end-date-group">
                <input type="month" class="form-control">
                <label class="current-checkbox">
                    <input type="checkbox" onchange="toggleCurrentDate(this)"> Actualidad
                </label>
            </div>
        </div>
        <textarea placeholder="Descripción o logros académicos" class="form-control"></textarea>
        <button type="button" class="btn btn-remove" onclick="removeEducation(this)">
            <i class="fas fa-trash"></i> Eliminar Formación
        </button>
    `;
    container.appendChild(eduGroup);
}

function removeEducation(button) {
    button.closest('.education-group').remove();
}

// Función para manejar el checkbox de "Actualidad"
function toggleCurrentDate(checkbox) {
    const dateInput = checkbox.parentElement.previousElementSibling;
    if (checkbox.checked) {
        dateInput.value = '';
        dateInput.disabled = true;
        dateInput.dataset.current = 'true';
    } else {
        dateInput.disabled = false;
        dateInput.dataset.current = 'false';
    }
}

// Función para agregar referencia
function addReference() {
    const container = document.getElementById('referencesContainer');
    const refGroup = document.createElement('div');
    refGroup.className = 'form-group reference-group';
    refGroup.innerHTML = `
        <input type="text" placeholder="Nombre completo" class="form-control">
        <input type="text" placeholder="Cargo" class="form-control">
        <input type="text" placeholder="Empresa" class="form-control">
        <input type="tel" placeholder="Teléfono" class="form-control">
        <input type="email" placeholder="Email" class="form-control">
        <button type="button" class="btn btn-remove" onclick="removeReference(this)">
            <i class="fas fa-trash"></i> Eliminar Referencia
        </button>
    `;
    container.appendChild(refGroup);
}

function removeReference(button) {
    button.closest('.reference-group').remove();
}
// Función para vista previa del CV
function previewCV() {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const previewContainer = document.createElement('div');
    previewContainer.className = 'modal-content';

    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.onclick = () => modal.remove();

    const content = `
        <div class="header">
            ${document.getElementById('imagePreview').src !== 'https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg?semt=ais_hybrid' ? 
                `<img src="${document.getElementById('imagePreview').src}" alt="Foto de perfil" class="profile-img">` : 
                ''
            }
            <div>
                <div class="name-title">
                    <h1>${document.getElementById('fullName').value}</h1>
                    ${document.getElementById('jobTitle').value ? 
                        `<p>${document.getElementById('jobTitle').value}</p>` : 
                        ''
                    }
                </div>
                <div class="contact-info">
                    <p><i class="fas fa-map-marker-alt"></i> ${document.getElementById('address').value}</p>
                    <p><i class="fas fa-phone"></i> ${document.getElementById('phone').value}</p>
                    <p><i class="fas fa-envelope"></i> ${document.getElementById('email').value}</p>
                    ${document.getElementById('linkedin').value ? 
                        `<p><i class="fab fa-linkedin"></i> ${document.getElementById('linkedin').value}</p>` : 
                        ''
                    }
                </div>
            </div>
        </div>

        <section>
            <h2><i class="fas fa-user-circle"></i> Perfil Profesional</h2>
            <p>${document.getElementById('profile').value}</p>
        </section>

        <section>
            <h2><i class="fas fa-laptop-code"></i> Competencias Técnicas</h2>
            <div class="skills">
                ${Array.from(document.querySelectorAll('#skillsContainer .skill-input-group')).map(skill => 
                    `<span class="skill-tag">
                        <i class="fas ${skill.querySelector('select').value}"></i>
                        ${skill.querySelector('input').value}
                    </span>`
                ).join('')}
            </div>
        </section>

        <section>
            <h2><i class="fas fa-briefcase"></i> Experiencia Profesional</h2>
            ${Array.from(document.querySelectorAll('#experienceContainer .experience-group')).map(exp => {
                const startDate = exp.querySelector('.date-range input[type="month"]:first-child')?.value || '';
                const endDateInput = exp.querySelector('.date-range .end-date-group input[type="month"]');
                const isCurrently = endDateInput.dataset.current === 'true';
                const endDate = isCurrently ? 'Actualidad' : (endDateInput?.value || '');
                return `
                    <div class="experience-item">
                        <h3>${exp.querySelector('input[placeholder="Cargo"]').value}</h3>
                        <p class="company">${exp.querySelector('input[placeholder="Empresa"]').value}</p>
                        <p class="date">
                            <i class="far fa-calendar-alt"></i>
                            ${startDate} - ${endDate}
                        </p>
                        <p>${exp.querySelector('textarea').value}</p>
                        <ul>
                            ${Array.from(exp.querySelectorAll('.responsibility-item input')).map(resp => 
                                `<li><i class="fas fa-check"></i> ${resp.value}</li>`
                            ).join('')}
                        </ul>
                    </div>
                `;
            }).join('')}
        </section>
    `;

    previewContainer.innerHTML = content;
    previewContainer.appendChild(closeButton);
    modal.appendChild(previewContainer);
    document.body.appendChild(modal);
}
// Función para exportar a PDF

function exportToPDF() {
    // Primero generamos el contenido usando previewCV
    previewCV();
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>CV - ${document.getElementById('fullName').value}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                :root {
                    --harvard-crimson: #A51C30;
                    --harvard-gray: #8996A0;
                }
                body {
                    font-family: 'Calibri', 'Arial', sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: white;
                    color: #333;
                    line-height: 1.6;
                }
                .modal-content {
                    max-width: 1000px;
                    margin: auto;
                    background: white;
                    padding: 40px;
                }
                .header {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 30px;
                    margin-bottom: 30px;
                }
                .profile-img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 3px solid var(--harvard-crimson);
                }
                .name-title {
                    border-bottom: 3px solid var(--harvard-crimson);
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                h1, h2, h3 {
                    color: var(--harvard-crimson);
                    margin-bottom: 20px;
                }
                h1 {
                    font-size: 2.5em;
                    margin: 0;
                }
                h2 {
                    font-size: 1.8em;
                    border-bottom: 2px solid var(--harvard-gray);
                    padding-bottom: 5px;
                    margin-top: 30px;
                }
                .contact-info {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                }
                .skills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin: 15px 0;
                }
                .skill-tag {
                    background-color: #f0f0f0;
                    padding: 5px 15px;
                    border-radius: 15px;
                    font-size: 0.9em;
                }
                .experience-item {
                    margin-bottom: 20px;
                }
                .date {
                    color: var(--harvard-gray);
                    font-weight: bold;
                }
                ul {
                    margin-top: 10px;
                    padding-left: 20px;
                }
                li {
                    margin-bottom: 5px;
                }
                @media print {
                    body { -webkit-print-color-adjust: exact; }
                    .modal-content { box-shadow: none; }
                }
                .close-button {
                    display: none;
                }
            </style>
        </head>
        <body>
            <div class="modal-content">
                ${document.querySelector('.modal-content').innerHTML}
            </div>
        </body>
        </html>
    `);
    
    // Limpiamos el modal de vista previa
    document.querySelector('.modal').remove();
    
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 500);
}


// Función para guardar el CV
function saveCV() {
    const cvData = {
        personalInfo: {
            fullName: document.getElementById('fullName').value,
            jobTitle: document.getElementById('jobTitle').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            linkedin: document.getElementById('linkedin').value,
            profileImage: document.getElementById('imagePreview').src
        },
        profile: document.getElementById('profile').value,
        skills: Array.from(document.querySelectorAll('#skillsContainer .skill-input-group')).map(skill => ({
            icon: skill.querySelector('select').value,
            name: skill.querySelector('input').value
        })),
        experience: Array.from(document.querySelectorAll('#experienceContainer .experience-group')).map(exp => ({
            position: exp.querySelector('input[placeholder="Cargo"]').value,
            company: exp.querySelector('input[placeholder="Empresa"]').value,
            startDate: exp.querySelector('.date-range input:first-child').value,
            endDate: exp.querySelector('.date-range .end-date-group input[type="month"]').value,
            isCurrent: exp.querySelector('.date-range .end-date-group input[type="month"]').dataset.current === 'true',
            description: exp.querySelector('textarea').value,
            responsibilities: Array.from(exp.querySelectorAll('.responsibility-item input')).map(r => r.value)
        })),
        education: Array.from(document.querySelectorAll('#educationContainer .education-group')).map(edu => ({
            degree: edu.querySelector('input[placeholder="Título"]').value,
            institution: edu.querySelector('input[placeholder="Institución"]').value,
            startDate: edu.querySelector('.date-range input:first-child').value,
            endDate: edu.querySelector('.date-range .end-date-group input[type="month"]').value,
            isCurrent: edu.querySelector('.date-range .end-date-group input[type="month"]').dataset.current === 'true',
            description: edu.querySelector('textarea').value
        })),
        references: Array.from(document.querySelectorAll('#referencesContainer .reference-group')).map(ref => ({
            name: ref.querySelector('input[placeholder="Nombre completo"]').value,
            position: ref.querySelector('input[placeholder="Cargo"]').value,
            company: ref.querySelector('input[placeholder="Empresa"]').value,
            phone: ref.querySelector('input[placeholder="Teléfono"]').value,
            email: ref.querySelector('input[placeholder="Email"]').value
        }))
    };

    localStorage.setItem('cvData', JSON.stringify(cvData));
}

// Función para cargar el CV guardado
function loadCV() {
    const savedCV = localStorage.getItem('cvData');
    if (savedCV) {
        const cvData = JSON.parse(savedCV);
        
        // Cargar información personal
        document.getElementById('fullName').value = cvData.personalInfo.fullName;
        document.getElementById('jobTitle').value = cvData.personalInfo.jobTitle;
        document.getElementById('address').value = cvData.personalInfo.address;
        document.getElementById('phone').value = cvData.personalInfo.phone;
        document.getElementById('email').value = cvData.personalInfo.email;
        document.getElementById('linkedin').value = cvData.personalInfo.linkedin;
        document.getElementById('imagePreview').src = cvData.personalInfo.profileImage;
        document.getElementById('profile').value = cvData.profile;

        // Cargar competencias
        document.getElementById('skillsContainer').innerHTML = '';
        cvData.skills.forEach(skill => {
            addSkill();
            const lastSkill = document.querySelector('#skillsContainer .skill-input-group:last-child');
            lastSkill.querySelector('select').value = skill.icon;
            lastSkill.querySelector('input').value = skill.name;
        });

        // Cargar experiencia
        document.getElementById('experienceContainer').innerHTML = '';
        cvData.experience.forEach(exp => {
            addExperience();
            const lastExp = document.querySelector('#experienceContainer .experience-group:last-child');
            lastExp.querySelector('input[placeholder="Cargo"]').value = exp.position;
            lastExp.querySelector('input[placeholder="Empresa"]').value = exp.company;
            lastExp.querySelector('.date-range input:first-child').value = exp.startDate;
            const endDateInput = lastExp.querySelector('.date-range .end-date-group input[type="month"]');
            if (exp.isCurrent) {
                endDateInput.dataset.current = 'true';
                endDateInput.disabled = true;
                lastExp.querySelector('.current-checkbox input').checked = true;
            } else {
                endDateInput.value = exp.endDate;
            }
            lastExp.querySelector('textarea').value = exp.description;
            
            const respContainer = lastExp.querySelector('.responsibilities-container');
            respContainer.innerHTML = '';
            exp.responsibilities.forEach(resp => {
                addResponsibility(lastExp.querySelector('.btn-add'));
                const lastResp = respContainer.querySelector('.responsibility-item:last-child input');
                lastResp.value = resp;
            });
        });

        // Cargar educación
        document.getElementById('educationContainer').innerHTML = '';
        cvData.education.forEach(edu => {
            addEducation();
            const lastEdu = document.querySelector('#educationContainer .education-group:last-child');
            lastEdu.querySelector('input[placeholder="Título"]').value = edu.degree;
            lastEdu.querySelector('input[placeholder="Institución"]').value = edu.institution;
            lastEdu.querySelector('.date-range input:first-child').value = edu.startDate;
            const endDateInput = lastEdu.querySelector('.date-range .end-date-group input[type="month"]');
            if (edu.isCurrent) {
                endDateInput.dataset.current = 'true';
                endDateInput.disabled = true;
                lastEdu.querySelector('.current-checkbox input').checked = true;
            } else {
                endDateInput.value = edu.endDate;
            }
            lastEdu.querySelector('textarea').value = edu.description;
        });

        // Cargar referencias
        document.getElementById('referencesContainer').innerHTML = '';
        cvData.references.forEach(ref => {
            addReference();
            const lastRef = document.querySelector('#referencesContainer .reference-group:last-child');
            lastRef.querySelector('input[placeholder="Nombre completo"]').value = ref.name;
            lastRef.querySelector('input[placeholder="Cargo"]').value = ref.position;
            lastRef.querySelector('input[placeholder="Empresa"]').value = ref.company;
            lastRef.querySelector('input[placeholder="Teléfono"]').value = ref.phone;
            lastRef.querySelector('input[placeholder="Email"]').value = ref.email;
        });
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', loadCV);
// Guardar automáticamente cuando hay cambios
document.getElementById('cvForm').addEventListener('input', saveCV);
