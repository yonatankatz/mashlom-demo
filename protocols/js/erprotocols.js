var app = angular.module("app", []);
  
app.controller("HyperkalemiaController", ['$scope', '$rootScope', '$http', '$timeout', function($scope, $rootScope, $http, $timeout) {
    const ctrl = this;
    window.ctrl = this;    
    ctrl.isExpanded = false;
    kabala_siudit =  ['הפשטה מלאה', 'ביצוע סימנים חיוניים וניטור', 'אקג', 'במידה ויש שינויים באקג - דפיברילטור', 'VL2 ולקיחת מעבדה הכוללת ס"ד, כימיה וגזים'];
    treatment = ['קלציום גלקונוט 10% 30 ml או קלציום כלוריד 10% 10 mL – מתן בפוש איטי דרך CL. ייתכן צורך במנות נוספות כחצי שעה לאחר מכן',
            'בולוס של אינסולין 10 U ב dextrose 50% 50 ml',
            'ונטולין 10 מ״ג באנהלציה מתמשכת',
            'סודיום ביקרבונט Nahco3  150 בתוך    ליטר D5W',
            'באנדקציה  של חמצת מטבולית קשה PH<7.1, בהחייאה, חסר כרוני של ביקרבונט במטופלים עם CKD',
            'דיאליזה'
        ];
    decisions = ['במידה ואשפוז – מטופל סימפטומטי, לא יציב, מטופל שדורש דיאליזה לאור היפרקלמי רפרקטורית, מחלת בסיס המצריכה אשפוז',
                ' יש צורך  לשקול אשפוז בט״נ או פנימית מוגבר לאחר ייצוב המטופל',
                'התוויות לשחרור : מטופל יציב, היפרקלמיה  קלה , מטופל א-תסמיני וללא שינויים באקג'];
    releaseNotes = ['מעקב מעבדתי – יש לחזור על ס״ד וכימיה חוזרת במסגרת הקופ״ח בעוד 3 ימים',
                    'דיאטת דלת אשלגן',
                    'מעקב רופא משפחה לצורך איזון טיפול תרופתי ומעקב אחר תרופות נפרוטוקסיות ותרופות אשר מעלות אשלגן',
                    'חולה דיאליזה –?'];
    onGoingTreatment = ['אקג חוזר לאחר טיפול ',
                        'גזים חוזרים פעם בשעה',
                        'קטטר במידת הצורך'];
    caseTypes = ['קל: 5.5-6',
    'בנוני: 6.1-6.9',
    'קשה: 6.9-7'];
    caseDecription = 'תלונות לא ספיציפיות, ייתכן א-סימפטומטי, עלול להתייצג עם חולשה. תסמיני GI  עד הפרעות קצב מסכנות חיים';
    riskFactors = 'מטופלי דיאליזה, CKD, תרופתי כגון: NSAIDS , דיגוקסין , סקולין, בטא בלוקרים, ספירונולקטון, איקקור.';
    ctrl.sections = [
        {'id': 1, 'displayName': 'תלונה', caseTypes, caseDecription, riskFactors},
        {'id': 2, 'displayName': 'קבלה סיעודית', listItems: kabala_siudit },
        {'id': 3, 'displayName': 'בירור', imageSource: 'assets/hyperkalemia-diagnose.png', imageDescription: 'שינויים באקג המתאימים להיפרקלמיה:' },
        {'id': 4, 'displayName': 'טיפול', listItems: treatment},
        {'id': 5, 'displayName': 'ניהול שוטף של המטופל', listItems: onGoingTreatment},
        {'id': 6, 'displayName':  'החלטה', listItems: decisions},
        {'id': 7, 'displayName':'המלצות בשחרור', listItems: releaseNotes}
        ];

        ctrl.toggleCollabse = function() {
            ctrl.isExpanded = !ctrl.isExpanded;            
            var accordionButtons = document.querySelectorAll('.accordion-button');            
            accordionButtons.forEach(function(button) {                
                if (button.getAttribute("aria-expanded") == 'true' && !ctrl.isExpanded) {
                    button.click();
                }
                else if (button.getAttribute("aria-expanded") == 'false' && ctrl.isExpanded) {
                    button.click(); 
                }                
            });
        };

}]);