﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DnD4e.LibraryHelper.Monster {
    public class AttackType {
        public string Action { get; set; }

        public List<AttackType> AfterEffects { get; set; }

        public List<Attack> Attacks { get; set; }

        public string Damage { get; set; }

        public string Description { get; set; }

        public List<AttackType> FailedSavingThrows { get; set; }

        public bool IsEmpty { get; set; }

        public string Name { get; set; }

        public List<AttackType> Sustains { get; set; }

    }
}
