    const frequentlyAsedQuestion = [{
        theQuestion: 'What services does LIYANA HEALTH CARE PLC (LHS) provide?',
        theAnswer: 'Outpatient department, Inpatient department, Emergency department, Various specialized surgical departments such as Vascular Surgery, Cardiothoracic, Surgery, Neurosurgery, Endocrine Surgery, and more, Gynecology & obstetrics, Health education and public service, Community health services, ENT services, Dermatology, Outsourced services, Advanced services such as ICU and Critical care unit, Dialysis center, Oncology department (chemotherapy), Advanced Laboratory services, Advanced Imaging and Radiology services, Hip Arthroplasty, Laparoscopic surgery, and Percutaneous nephrolithotomy (PCNL)'
    },{
        theQuestion: "Where are the branches of LIYANA HEALTH CARE PLC located?",
        theAnswer: '> Yanet Internal Medicine Specialty Center in Hawassa <br>  <br> > Yanet Trauma and Surgical Specialized Center in Hawassa <br> <br> > Yanet Hospital in Hawassa, Yanet Internal General Hospital in Addis Ababa <br> <br> > Yanet-Liyana College of Health Sciences in Hawassa <br> <br> > Yanet Medicine and Medical Supply Wholesale in Hawassa <br> <br> > Yanet Medicine and Medical Equipment Importer in Addis Ababa <br> <br> > LHC Health Consultancy Service in Addis Ababa <br> <br> > Yali Detergent Cosmetics and Chemical input Manufacturing in Addis Ababa'
    },{
        theQuestion: " What advanced imaging and radiology services are offered by LHS?",
        theAnswer: '> 128 Slice high-resolution CT scan <br> <br> > 1.5 Tesla MRI'
    },{
        theQuestion: "What specialized surgical services are available at LHS?",
        theAnswer: 'Vascular Surgery, Cardiothoracic Surgery, Neurosurgery, Endocrine Surgery, Arthroplasty Trauma & Orthopedic Surgery, Hepatopancreatic & Biliary Surgery, Pediatric Surgery, Pediatric Orthopedic Surgery, Colorectal Surgery, Plastic Surgery, Maxillofacial Surgery'
    },{
        theQuestion: "Who are the sister companies of LHS?",
        theAnswer: ' > Liyana-Oxy Medical and Industrial Oxygen and Nitrogen Manufacturing PLC in Bishan Guracha, Oromia <br> <br> > Three MAG Oncho-Pathology Cancer Diagnostic Center in Addis Ababa <br> <br> > Liyana Digital Healthcare Solutions PLC in Addis Ababa <br> <br> > Gedaliyan Trading PLC in Addis Ababa <br> <br> > Dream-Liyana Healthcare PLC/Orthopedic Trauma and Surgery Center in Addis Ababa '
    }];
    let askedQuestion = '';

    frequentlyAsedQuestion.forEach((faq)=>{  
        askedQuestion += `
        <div class="faq-item">
        <div class="faq-child">
            <h3 class="faq-question">${faq.theQuestion}</h3>
            <i class="fas fa-chevron-down"></i>
        </div>
        <p class="faq-answer">${faq.theAnswer}</p>
        </div>
        `; 
    });
    
    document.querySelector('.js-faq-container').innerHTML = askedQuestion;

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((faqItem) => {
    const question = faqItem.querySelector('.faq-child');
    const answer = faqItem.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
    });