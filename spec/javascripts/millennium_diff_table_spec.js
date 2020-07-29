describe("Millennium Diff Table", function() {
  describe("#getConfiguration", function() {
    it("returns the correct configuration for Basic", function() {
      let config = [
        {
          type: "FinancialTransaction",
          interaction: [
            {
              code: "create"
            }
        ],
        notes: "FinancialTransaction is a custom resource implemented via extensions on the Basic resource."
        }
      ]

      expect(getConfiguration('Basic')).toEqual(config);
    });

    it("returns the correct configuration for non-Basic resources", function() {
      let config = {
        dstu2Resources: ["MedicationOrder", "MedicationStatement"],
        r4Resources: ["MedicationRequest"],
        notes: "Cerner's DSTU 2 implementations of MedicationOrder and MedicationStatement were shifted to MedicationRequest in R4."
      }

      expect(getConfiguration("MedicationStatement")).toEqual(config);
    });
  });
});