﻿// michael
var debugJson = '{"Class":"Fighter","ClassFeatures":[{"Name":"Combat Challenge","ShortDescription":"Mark foes you attack. They get -2 to attacks not including you. Make basic melee attack against adjacent marked foe who shifts or makes attack not including you. Mark lasts until end of your next turn or marked by other.","Text":"In combat, it\'s dangerous to ignore a fighter. Every time you attack an enemy, whether the attack hits or misses, you can choose to mark that target. The mark lasts until the end of your next turn. While a target is marked, it takes a -2 penalty to attack rolls if its attack doesn\'t include you as a target. A creature can be subject to only one mark at a time. A new mark supersedes a mark that was already in place.###In addition, you gain the Combat Challenge power."},{"Name":"Combat Agility","ShortDescription":"","Text":"This class feature replaces the Combat Superiority class feature. You gain the power Combat Agility."},{"Name":"Fighter Talents","ShortDescription":"You gain a fighter talent","Text":"Choose one of the following fighter talents."},{"Name":"Two-handed Weapon Talent","ShortDescription":"+1 on attacks with two-handed weapons.","Text":"When using a two-handed weapon, you gain a +1 bonus to weapon attack rolls."}],"Feats":[{"Name":"Power Attack","ShortDescription":"+2 damage for -2 to attack","Text":"When making a melee attack, you can take a -2 penalty to the attack roll. If the attack hits, you gain a +2 bonus to the damage roll (or a +3 bonus to the damage roll with a two-handed weapon).### This extra damage increases by level, as shown on the table below, but the attack penalty remains the same.###<table>Level Extra Damage (Two-Handed Weapon)###1st-10th +2 (+3)###11th-20th +4 (+6)###21st-30th +6 (+9)</table>"},{"Name":"Heavy Blade Expertise","ShortDescription":"+1/+2/+3 (by tier) to weapon attacks with heavy blades; +2 to defenses against OAs when wielding heavy blade","Text":"You gain a +1 feat bonus to weapon attack rolls that you make with a heavy blade. This bonus increases to +2 at 11th level and +3 at 21st level.### In addition, while wielding a heavy blade, you gain a +2 bonus to all defenses against opportunity attacks."}],"Gender":"Male","HealingSurges":11,"PassiveInsight":10,"PassivePerception":10,"Powers":[{"Name":"Melee Basic Attack","Display":"Basic Attack","ActionType":"Standard action","Attack":"Strength vs. AC","AttackType":"Melee weapon","Effect":"","Flavor":"","Hit":"1[W] + Strength modifier damage.###Increase damage to 2[W] + Strength modifier damage at 21st level.","Keywords":["Weapon"],"PowerType":"","Target":"One creature","Text":"","Usage":"At-Will","Weapons":[{"Name":"Greatsword","AttackBonus":9,"AttackStat":"Strength","Conditions":["+3 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d10+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level.","+3 proficiency bonus.","+1 bonus - Two-handed Weapon Talent","+1 Feat bonus - Heavy Blade Expertise"]},{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":["+2 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d4+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level."]}]},{"Name":"Ranged Basic Attack","Display":"Basic Attack","ActionType":"Standard action","Attack":"Dexterity vs. AC","AttackType":"Ranged weapon","Effect":"","Flavor":"","Hit":"1[W] + Dexterity modifier damage.###Increase damage to 2[W] + Dexterity modifier damage at 21st level.","Keywords":["Weapon"],"PowerType":"","Target":"One creature","Text":"","Usage":"At-Will","Weapons":[{"Name":"Unarmed","AttackBonus":2,"AttackStat":"Dexterity","Conditions":[],"Damage":"1d4+2","DamageComponents":["+2 Dexterity modifier."],"DamageType":"","Defense":"AC","HitComponents":["+2 Dexterity modifier.","+0 half your level."]}]},{"Name":"Bull Rush Attack","Display":"Attack","ActionType":"Standard action","Attack":"Strength vs. Fortitude","AttackType":"Melee 1","Effect":"","Flavor":"","Hit":"You can push the target 1 square and then shift 1 square into the space it left.","Keywords":[],"PowerType":"","Target":"One creature","Text":"","Usage":"At-Will","Weapons":[{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":[],"Damage":null,"DamageComponents":[],"DamageType":"","Defense":"Fortitude","HitComponents":["+4 Strength modifier.","+0 half your level."]}]},{"Name":"Grab Attack","Display":"Attack","ActionType":"Standard action","Attack":"Strength vs. Reflex","AttackType":"Melee touch","Effect":"","Flavor":"","Hit":"You grab the target until the end of your next turn. You can end the grab as a free action.","Keywords":[],"PowerType":"","Target":"One creature that is no more than one size category larger than you","Text":"","Usage":"At-Will","Weapons":[{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":[],"Damage":null,"DamageComponents":[],"DamageType":"","Defense":"Reflex","HitComponents":["+4 Strength modifier.","+0 half your level."]}]},{"Name":"Opportunity Attack","Display":"Attack","ActionType":"Opportunity Action","Attack":"","AttackType":"Melee 1","Effect":"You make a melee basic attack against the target.","Flavor":"","Hit":"","Keywords":[],"PowerType":"","Target":"The triggering enemy","Text":"","Usage":"At-Will","Weapons":[]},{"Name":"Second Wind","Display":"Utility","ActionType":"Standard Action","Attack":"","AttackType":"Personal","Effect":"Spend a healing surge and gain a +2 bonus to all defenses until the start of your next turn.","Flavor":"","Hit":"","Keywords":[],"PowerType":"Utility","Target":"","Text":"","Usage":"Encounter","Weapons":[]},{"Name":"Sure Strike","Display":"Fighter Attack 1","ActionType":"Standard Action","Attack":"Strength + 2 vs. AC","AttackType":"Melee weapon","Effect":"","Flavor":"","Hit":"1[W] damage.###Level 21: 2[W] damage.","Keywords":["Martial","Weapon"],"PowerType":"Attack","Target":"One creature","Text":"","Usage":"At-Will","Weapons":[{"Name":"Greatsword","AttackBonus":11,"AttackStat":"Strength","Conditions":["+3 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d10+0","DamageComponents":[],"DamageType":"","Defense":"AC","HitComponents":["+2 power modifier.","+4 Strength modifier.","+0 half your level.","+3 proficiency bonus.","+1 bonus - Two-handed Weapon Talent","+1 Feat bonus - Heavy Blade Expertise"]},{"Name":"Unarmed","AttackBonus":6,"AttackStat":"Strength","Conditions":["+2 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d4+0","DamageComponents":[],"DamageType":"","Defense":"AC","HitComponents":["+2 power modifier.","+4 Strength modifier.","+0 half your level."]}]},{"Name":"Combat Challenge","Display":"Combat Challenge  Power","ActionType":"Immediate Interrupt","Attack":"","AttackType":"Melee","Effect":"Whenever an enemy marked by you is adjacent to you and shifts or makes an attack that does not include you, you can make a melee basic attack against that enemy.","Flavor":"","Hit":"","Keywords":["Martial","Weapon"],"PowerType":"","Target":"","Text":"","Usage":"At-Will","Weapons":[]},{"Name":"Combat Agility","Display":"Combat Agility  Power","ActionType":"Opportunity Action","Attack":"Strength vs. AC","AttackType":"Melee weapon","Effect":"After the triggering enemy completes the action, you shift a number of squares equal to your Dexterity modifier. You must end the shift closer to the target than you were when you began the shift. Then make the following attack.","Flavor":"","Hit":"1[W] + Strength modifier damage, and you knock the target prone.###Level 21: 2[W] + Strength modifier damage.","Keywords":["Martial","Weapon"],"PowerType":"","Target":"The triggering enemy","Text":"","Usage":"At-Will","Weapons":[]},{"Name":"Reaping Strike","Display":"Fighter Attack 1","ActionType":"Standard Action","Attack":"Strength vs. AC","AttackType":"Melee weapon","Effect":"","Flavor":"","Hit":"1[W] + Strength modifier damage.###Level 21: 2[W] + Strength modifier damage.","Keywords":["Martial","Weapon"],"PowerType":"Attack","Target":"One creature","Text":"","Usage":"At-Will","Weapons":[{"Name":"Greatsword","AttackBonus":9,"AttackStat":"Strength","Conditions":["+3 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d10+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level.","+3 proficiency bonus.","+1 bonus - Two-handed Weapon Talent","+1 Feat bonus - Heavy Blade Expertise"]},{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":["+2 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d4+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level."]}]},{"Name":"Cleave","Display":"Fighter Attack 1","ActionType":"Standard Action","Attack":"Strength vs. AC","AttackType":"Melee weapon","Effect":"","Flavor":"","Hit":"1[W] + Strength modifier damage, and an enemy adjacent to you other than the target takes damage equal to your Strength modifier.###Level 21: 2[W] + Strength modifier damage.","Keywords":["Martial","Weapon"],"PowerType":"Attack","Target":"","Text":"","Usage":"At-Will","Weapons":[{"Name":"Greatsword","AttackBonus":9,"AttackStat":"Strength","Conditions":["+3 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d10+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level.","+3 proficiency bonus.","+1 bonus - Two-handed Weapon Talent","+1 Feat bonus - Heavy Blade Expertise"]},{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":["+2 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"1d4+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level."]}]},{"Name":"Steel Serpent Strike","Display":"Fighter Attack 1","ActionType":"Standard Action","Attack":"Strength vs. AC","AttackType":"Melee weapon","Effect":"","Flavor":"","Hit":"2[W] + Strength modifier damage, and the target is slowed and cannot shift until end of your next turn.","Keywords":["Martial","Weapon"],"PowerType":"Attack","Target":"One creature","Text":"","Usage":"Encounter","Weapons":[{"Name":"Greatsword","AttackBonus":9,"AttackStat":"Strength","Conditions":["+3 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"2d10+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level.","+3 proficiency bonus.","+1 bonus - Two-handed Weapon Talent","+1 Feat bonus - Heavy Blade Expertise"]},{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":["+2 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"2d4+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level."]}]},{"Name":"Comeback Strike","Display":"Fighter Attack 1","ActionType":"Standard action","Attack":"Strength vs. AC","AttackType":"Melee weapon","Effect":"","Flavor":"","Hit":"2[W] + Strength modifier damage, and you can spend a healing surge.","Keywords":["Healing","Martial","Reliable","Weapon"],"PowerType":"Attack","Target":"One creature","Text":"","Usage":"Daily","Weapons":[{"Name":"Greatsword","AttackBonus":9,"AttackStat":"Strength","Conditions":["+3 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"2d10+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level.","+3 proficiency bonus.","+1 bonus - Two-handed Weapon Talent","+1 Feat bonus - Heavy Blade Expertise"]},{"Name":"Unarmed","AttackBonus":4,"AttackStat":"Strength","Conditions":["+2 to damage rolls if you take a -2 penalty to the attack roll - Power Attack."],"Damage":"2d4+4","DamageComponents":["+4 Strength modifier."],"DamageType":"","Defense":"AC","HitComponents":["+4 Strength modifier.","+0 half your level."]}]}],"PowerSource":"Martial","RacialTraits":[{"Name":"Bonus Feat","ShortDescription":"Gain extra feat at 1st level","Text":"You gain a bonus feat at 1st level. You must meet the feat\'s prerequisites."},{"Name":"Bonus Skill","ShortDescription":"Gain training in one additional class skill","Text":"You gain training in one additional skill from your class skills list."},{"Name":"Human Defense Bonuses","ShortDescription":"+1 to Fortitude, Reflex, and Will","Text":"You gain a +1 racial bonus to Fortitude, Reflex, and Will."},{"Name":"Human Power Selection","ShortDescription":"Choose an option for your human character.","Text":"Choose an option for your human character."},{"Name":"Bonus At-Will Power","ShortDescription":"Gain extra 1st-level at-will attack power from your class","Text":"You know one extra 1st level at-will attack power from your class."}],"Skills":{"Acrobatics":{"IsTrained":false,"Value":2},"Arcana":{"IsTrained":false,"Value":0},"Athletics":{"IsTrained":true,"Value":9},"Bluff":{"IsTrained":false,"Value":-1},"Diplomacy":{"IsTrained":false,"Value":-1},"Dungeoneering":{"IsTrained":false,"Value":0},"Endurance":{"IsTrained":true,"Value":7},"Heal":{"IsTrained":false,"Value":0},"History":{"IsTrained":false,"Value":0},"Insight":{"IsTrained":false,"Value":0},"Intimidate":{"IsTrained":true,"Value":4},"Nature":{"IsTrained":false,"Value":0},"Perception":{"IsTrained":false,"Value":0},"Religion":{"IsTrained":false,"Value":0},"Stealth":{"IsTrained":false,"Value":2},"Streetwise":{"IsTrained":true,"Value":4},"Thievery":{"IsTrained":false,"Value":2}},"Vision":"Normal","AbilityScores":{"Strength":19,"Constitution":14,"Dexterity":14,"Intelligence":10,"Wisdom":10,"Charisma":8},"ActionPoints":1,"Alignment":"Good","Defenses":{"AC":17,"Fortitude":17,"Reflex":13,"Will":11},"Experience":0,"Handle":"* William Patterson (Fighter1)","HitPoints":29,"Initiative":2,"Speed":5,"Languages":["Common","Giant"],"Level":1,"Name":"William Patterson","Race":"Human","Role":"Defender","Size":"Medium"}';

function ViewModel() {
    var self = this;

    this.Bound = false;

    this.Character = ko.observable();

    this.Alignment = function () {
        var regex = /(?!^)(?=[A-Z])/;
        return self.Character().Alignment.replace(regex, " ");
    };
    this.Bloodied = function () {
        return (self.Character().HitPoints / 2).toFixed(0);
    };
    this.LevelString = function () {
        var parts = [];

        parts.push('Level');
        parts.push(self.Character().Level);
        parts.push(self.Character().PowerSource);
        parts.push(self.Character().Role);
        return parts.join(' ');
    };
    this.TraitsString = function () {
        var parts = [];

        parts.push(self.Character().Gender);
        parts.push(self.Character().Race);
        parts.push(self.Character().Class);
        return parts.join(' ');
    };
    this.XPString = function () {
        return 'XP ' + toCommaNum(self.Character().Experience);
    };
}

// transform the ViewModel so that we can map our data to
// it each time renderStatBlock is called
window.vm = new ViewModel();
ko.bindingProvider.instance = new StringInterpolatingBindingProvider();

// externally invoked method to render a new StatBlock
function renderStatBlock(json) {
    try {
        var data = ko.utils.parseJson(json);
        window.vm.Character(data);
        if (!vm.Bound) {
            vm.Bound = true;
            ko.applyBindings(window.vm);
        }
    }
    catch (e) {
        alert(e.toString());
    }
}

//$(document).ready(function () {
//   renderStatBlock(debugJson);
//});
