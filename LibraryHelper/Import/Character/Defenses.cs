﻿using System;
using DnD4e.LibraryHelper.Import.Common;

namespace DnD4e.LibraryHelper.Import.Character
{
    public class Defenses
    {
        private Stats stats;

        public Defenses (Stats stats)
        {
            if (stats == null)
            {
                throw new ArgumentNullException("stats");
            }
            this.stats = stats;
        }

        public int ArmorClass { get { return this.stats["AC"]; } }

        public int FortitudeDefense { get { return this.stats["Fortitude Defense"]; } }

        public int ReflexDefense { get { return this.stats["Reflex Defense"]; } }

        public int WillDefense { get { return this.stats["Will Defense"]; } }

        public int this[Defense defense]
        {
            get
            {
                return this.stats[defense.ToString()];
            }
        }
    }
}
