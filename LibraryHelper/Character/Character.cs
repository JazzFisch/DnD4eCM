﻿using System;
using System.Diagnostics;
using System.IO;
using System.Xml;
using System.Xml.Serialization;
using DnD4e.LibraryHelper.Common;
using DnD4e.LibraryHelper.Import.ExtensionMethods;
using ImportCharacter = DnD4e.LibraryHelper.Import.Character.Character;

namespace DnD4e.LibraryHelper.Character {
    public class Character : Combatant {
        /////////////////////////////////////////////////////////////////////
        // character details
        //public int HealingSurges { get { return this.sheet.Stats["Healing Surges"]; } }

        //public List<Item> Items { get { return this.sheet.Items; } }

        //public int PassiveInsight { get; set; }

        //public int PassivePerception { get; set; }

        //public List<Power> Powers { get { return this.sheet.Powers; } }

        public string Class { get; set; }

        public int HealingSurges { get; set; }

        public string Vision { get; set; }

        public Character () {
            // TODO: construct all collections
        }

        public static bool TryCreateFromFile (string filename, out Character character) {
            character = null;
            try {
                string xmlString;
                using (var text = File.OpenText(filename)) {
                    xmlString = text.ReadToEnd();
                }

                // cleanup campaign settings
                int start = xmlString.IndexOf("<D20CampaignSetting");
                int end = xmlString.IndexOf("</D20CampaignSetting>");
                if (start != -1 && end != -1 && start < end) {
                    xmlString = xmlString.Remove(start, end - start + 1);
                }

                using (var reader = new StringReader(xmlString)) {
                    using (var xml = new XmlTextReader(reader)) {
                        XmlSerializer serializer = new XmlSerializer(typeof(ImportCharacter));
                        if (serializer.CanDeserialize(xml)) {
                            var import = serializer.Deserialize(xml) as ImportCharacter;
                            character = import.ToCharacter();
                            return true;
                        }
                    }
                }
            }
            catch (System.Exception ex) {
                Trace.WriteLine(ex);
                System.Diagnostics.Debugger.Break();
            }

            return false;
        }
    }
}
