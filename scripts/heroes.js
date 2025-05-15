const heroes = [
    {
        name: "Abomination",
        image: "images/heroes/abo_head.png",
        description: `The Abomination has two different sets (human and monster).
            You can transform into the beast only once. He suffers 6 stress per turn when in beast form.
            His debuff resistance and disease resistance suck. You can add him to any team comp.
            I recommend some stress reliever like <strong class="strong-yellow">Jester</strong> or
            <strong class="strong-yellow">Houndmaster</strong>.`,
        loadouts: [
            {
                role: "Frontline",
                description: "Transform in the first round and kill everything in your way.",
                skills: [
                    {
                        name: "Transform",
                        image: "images/spells/abomination/Transform.webp",
                        tooltip: `<strong class='strong-yellow'>Transform</strong><br>
                            Hero Skill<br>🟡🟡🟡🟡<br>Transforms into beast form.<br>
                            Other Heroes: Stress +8<br>+1-5 SPD (4 rds)<br>+20-30% Blight Resist (4 rds)<br>
                            +10-25% DMG (3 rds)<br>Heal 5-10 HP<br><strong class='strong-yellow'>Transforming back</strong><br>
                            Other Heroes: Stress -2<br>Self: -4 to 0 SPD (4 rds)`
                    },
                    {
                        name: "Absolution",
                        image: "images/spells/abomination/Absolution.webp",
                        tooltip: `<strong class='strong-yellow'>Absolution</strong><br>
                            Hero Skill<br>🟡🟡🟡🟡<br>Heal 3-5 HP<br>Reduce 7-10 stress`
                    },
                    {
                        name: "Rake",
                        image: "images/spells/abomination/Rake.webp",
                        tooltip: `<strong class='strong-yellow'>Rake</strong><br>
                            Hero Skill<br>⚫⚫🟡🟡 | 🔴-🔴⚫⚫<br>Damage -50%<br>Accuracy 90-110<br>
                            crit mod -3 to +1%<br>Self: +15-25% DMG (4 rds)`
                    },
                    {
                        name: "Rage",
                        image: "images/spells/abomination/Rage.webp",
                        tooltip: `<strong class='strong-yellow'>Rage</strong><br>
                            Hero Skill<br>⚫⚫🟡🟡 | 🔴🔴🔴⚫<br>Damage +0%<br>Accuracy 185-105<br>
                            crit mod 7.5% to 11.5%`
                    },
                    {
                        name: "Slam",
                        image: "images/spells/abomination/Slam.webp",
                        tooltip: `<strong class='strong-yellow'>Slam</strong><br>
                            Hero Skill<br>⚫🟡🟡🟡 | 🔴🔴⚫⚫<br>Damage -25<br>Accuracy 80-100<br>
                            crit mod 1%-5%<br>Effect: Knockback 2 (100–140% base)<br>
                            -10 to -20 Dodge (100–140% base, 4 rds)<br>-2 to -6 SPD (100–140% base, 4 rds)<br>Self: Forward 1`
                    },
                    {
                        name: "Anger Management",
                        image: "images/spells/abomination/Anger_Management.webp",
                        tooltip: `<strong class='strong-yellow'>Anger Management</strong><br>
                            Camping Skill<br>Time Cost: 3<br>Self: +20 Stress<br>All Companions: -10 Stress`
                    },
                    {
                        name: "Psych Up",
                        image: "images/spells/abomination/Psych_Up.webp",
                        tooltip: `<strong class='strong-yellow'>Psych Up</strong><br>
                            Camping Skill<br>Time Cost: 3<br>Self: +25% DMG (4 Battles)<br>
                            If not religious: +10 Stress<br>If religious: +20 Stress`
                    }
                ]
            },
            {
                role: "Backup Fighter",
                description: "Stay in human form and spam Manacles and Beast's Bile on non-resistant enemies.",
                skills: [
                    {
                        name: "Transform",
                        image: "images/spells/abomination/Transform.webp",
                        tooltip: "Same as above"
                    },
                    {
                        name: "Absolution",
                        image: "images/spells/abomination/Absolution.webp",
                        tooltip: "Same as above"
                    },
                    {
                        name: "Manacles",
                        image: "images/spells/abomination/Manacles.webp",
                        tooltip: `<strong class='strong-yellow'>Manacles</strong><br>
                            Hero Spell<br>⚫🟡🟡⚫ | 🔴🔴🔴⚫<br>Damage -60%<br>Accuracy 95-115<br>
                            crit mod 1%-5%<br>Stun (90-130% base)`
                    },
                    {
                        name: "Beast's Bile",
                        image: "images/spells/abomination/Beast's_Bile.webp",
                        tooltip: `<strong class='strong-yellow'>Beast's Bile</strong><br>
                            ⚫🟡🟡⚫ | ⚫🔴-🔴⚫<br>Damage -90%<br>Accuracy 95-115<br>crit mod 2%-6%<br>
                            Blight (100-140% base) 3-5 pts for 3 rds<br>
                            -20 to -33% Blight resist (110–140% base, 3 rds)`
                    },
                    {
                        name: "The Quickening",
                        image: "images/spells/abomination/The_Quickening.webp",
                        tooltip: "Increase speed and crit chance."
                    },
                    {
                        name: "Eldritch Blood",
                        image: "images/spells/abomination/Eldritch_Blood.webp",
                        tooltip: "A buff to damage and protection."
                    }
                ]
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", function () {
    renderHeroes();

    // Initialize Bootstrap tooltips after rendering is done
    setTimeout(() => {
        const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
        tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el, { html: true }));
    }, 0);
});

function renderHeroes() {
    const container = document.getElementById("hero-loadouts");
    heroes.forEach(hero => {
        const heroCard = document.createElement("div");
        heroCard.classList.add("hero-card");

        const heroHeader = document.createElement("div");
        heroHeader.classList.add("hero-header");

        const heroImage = document.createElement("img");
        heroImage.src = hero.image;
        heroImage.alt = hero.name;
        heroImage.classList.add("hero-img");

        const heroName = document.createElement("h3");
        heroName.classList.add("hero-name");
        heroName.innerText = hero.name;

        heroHeader.appendChild(heroImage);
        heroHeader.appendChild(heroName);

        const heroDesc = document.createElement("p");
        heroDesc.innerHTML = hero.description;

        const loadoutsSection = document.createElement("div");
        hero.loadouts.forEach(loadout => {
            const loadoutCard = document.createElement("div");
            loadoutCard.classList.add("loadout");

            const roleTitle = document.createElement("h4");
            roleTitle.classList.add("role-title");
            roleTitle.innerText = loadout.role;
            roleTitle.dataset.bsToggle = "tooltip";
            roleTitle.dataset.bsHtml = "true";
            roleTitle.dataset.bsTitle = loadout.description;

            const roleDesc = document.createElement("p");
            roleDesc.innerText = loadout.description;

            const skillsList = document.createElement("div");
            skillsList.classList.add("skills");

            loadout.skills.forEach(skill => {
                const skillDiv = document.createElement("div");
                skillDiv.classList.add("skill");

                const skillImg = document.createElement("img");
                skillImg.src = skill.image;
                skillImg.alt = skill.name;
                skillImg.dataset.bsToggle = "tooltip";
                skillImg.dataset.bsHtml = "true";
                skillImg.dataset.bsTitle = skill.tooltip;

                const skillName = document.createElement("span");
                skillName.innerText = skill.name;

                skillDiv.appendChild(skillImg);
                skillDiv.appendChild(skillName);
                skillsList.appendChild(skillDiv);
            });

            loadoutCard.appendChild(roleTitle);
            loadoutCard.appendChild(roleDesc);
            loadoutCard.appendChild(skillsList);
            loadoutsSection.appendChild(loadoutCard);
            loadoutsSection.appendChild(document.createElement("hr"));
        });

        heroCard.appendChild(heroHeader);
        heroCard.appendChild(heroDesc);
        heroCard.appendChild(loadoutsSection);

        container.appendChild(heroCard);
    });
}
