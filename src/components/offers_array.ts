import therapy from "../image-offers/terapy.png";
import ortho from "../image-offers/ortho.png";
import opedy from "../image-offers/opedy.png";
import hiryr from "../image-offers/hiryr.png";
import impl from "../image-offers/impl.png";
import anestes from "../image-offers/anestes.png";
import profil from "../image-offers/profil.png";
import diagnos from "../image-offers/diagnos.png";

import vectorProfil from "../vectors/vector-offers/profil.png";
import vectorBrackets from "../vectors/vector-offers/brackets.png";
import vectorChair from "../vectors/vector-offers/chair.png";
import vectorJawsRentgen from "../vectors/vector-offers/jaws-rentgen.png";
import vectorImplant from "../vectors/vector-offers/implant.png";
import vectorJaws from "../vectors/vector-offers/jaws.png";
import vectorHealing from "../vectors/vector-offers/healing.png";
import vectorCheckup from "../vectors/vector-offers/checkup.png";

export const offers = [
    {
        id: 1,
        title: "Терапия",
        description: "Терапия – это методы лечения зубов без хирургического вмешательства, восстановление здоровья зубов. Самая частая процедура в терапии – это лечение кариеса.",
        image: therapy,
        vector: vectorProfil,
        whenNeeded: "Терапия необходима, когда зубы подвергаются поражению из-за кариеса, воспалений, или других заболеваний, требующих вмешательства для сохранения их здоровья."
    },
    {
        id: 2,
        title: "Ортодонтия",
        description: "Врач-ортодонт исправляет нарушения прикуса и положение отдельных искривленных зубов, используя специальные корректирующие аппараты.",
        image: ortho,
        vector: vectorBrackets,
        whenNeeded: "Ортодонтические вмешательства требуются, когда есть проблемы с прикусом, скученностью зубов или иными дефектами зубного ряда."
    },
    {
        id: 3,
        title: "Ортопедия",
        description: "Ортопедия является завершающей стадией имплантации: на имплантат устанавливается коронка или протез.",
        image: opedy,
        vector: vectorChair,
        whenNeeded: "Ортопедия необходима после имплантации для восстановления нормальной функции зуба с помощью коронки или протеза."
    },
    {
        id: 4,
        title: "Хирургия",
        description: "Оперативные вмешательства позволяют врачу проводить удаление зубов, а также делать разрезы при воспалительных процессах и любые операции в челюстно-лицевой области.",
        image: hiryr,
        vector: vectorJawsRentgen,
        whenNeeded: "Хирургия требуется при сложных заболеваниях, таких как зубные инфекции, необходимость удаления зубов или другие хирургические вмешательства."
    },
    {
        id: 5,
        title: "Имплантация",
        description: "Наиболее прогрессивной процедурой по восстановлению целостности зубного ряда является имплантация зубов. Она безопасна и позволяет полностью решить проблему.",
        image: impl,
        vector: vectorImplant,
        whenNeeded: "Имплантация нужна, когда зубы утрачены или сильно повреждены и требуют полноценной замены для восстановления функции и эстетики."
    },
    {
        id: 6,
        title: "Анестезиология",
        description: "Анестезия используется для обеспечения максимального комфорта для пациента во время процедуры, в то время как врач мог провести весь необходимый объем лечения.",
        image: anestes,
        vector: vectorJaws,
        whenNeeded: "Анестезия необходима для предотвращения болевых ощущений и обеспечения комфортного проведения стоматологических процедур."
    },
    {
        id: 7,
        title: "Профилактика",
        description: "Профессиональная чистка зубов – это действенный способ в борьбе со многими заболеваниями ротовой полости.",
        image: profil,
        vector: vectorHealing,
        whenNeeded: "Профилактика необходима для предотвращения заболеваний зубов и десен, таких как кариес и воспаления. Регулярная чистка помогает сохранить здоровье на долгие годы."
    },
    {
        id: 8,
        title: "Диагностика",
        description: "Диагностика помогает стоматологу составить план лечения, определить необходимые процедуры и выбрать оптимальные методы лечения.",
        image: diagnos,
        vector: vectorCheckup,
        whenNeeded: "Диагностика требуется для точного выявления заболеваний, определения стадии развития проблемы и выбора наилучшего метода лечения."
    }
];
