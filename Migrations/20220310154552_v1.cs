using Microsoft.EntityFrameworkCore.Migrations;

namespace GradjFirma.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Firma",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Adresa = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PIB = table.Column<int>(type: "int", nullable: false),
                    MB = table.Column<int>(type: "int", nullable: false),
                    Zastupnik = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Firma", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Masina",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tip = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    BrojRadnihSati = table.Column<int>(type: "int", nullable: false),
                    Godiste = table.Column<int>(type: "int", nullable: false),
                    Stanje = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    IdentifikacioniBroj = table.Column<int>(type: "int", nullable: false),
                    FirmaID = table.Column<int>(type: "int", nullable: true),
                    RadnikFK = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Masina", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Masina_Firma_FirmaID",
                        column: x => x.FirmaID,
                        principalTable: "Firma",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Projekat",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    BrojProjekta = table.Column<int>(type: "int", nullable: false),
                    Lokacija = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    TipProjekta = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    BrojRadnika = table.Column<int>(type: "int", nullable: false),
                    FirmaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projekat", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Projekat_Firma_FirmaID",
                        column: x => x.FirmaID,
                        principalTable: "Firma",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Radnik",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Jmbg = table.Column<int>(type: "int", nullable: false),
                    Profesija = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Masina = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IskustvoGod = table.Column<int>(type: "int", nullable: false),
                    BrojGodina = table.Column<int>(type: "int", nullable: false),
                    FirmaID = table.Column<int>(type: "int", nullable: true),
                    ProjekatID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radnik", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Radnik_Firma_FirmaID",
                        column: x => x.FirmaID,
                        principalTable: "Firma",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Radnik_Projekat_ProjekatID",
                        column: x => x.ProjekatID,
                        principalTable: "Projekat",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Masina_FirmaID",
                table: "Masina",
                column: "FirmaID");

            migrationBuilder.CreateIndex(
                name: "IX_Projekat_FirmaID",
                table: "Projekat",
                column: "FirmaID");

            migrationBuilder.CreateIndex(
                name: "IX_Radnik_FirmaID",
                table: "Radnik",
                column: "FirmaID");

            migrationBuilder.CreateIndex(
                name: "IX_Radnik_ProjekatID",
                table: "Radnik",
                column: "ProjekatID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Masina");

            migrationBuilder.DropTable(
                name: "Radnik");

            migrationBuilder.DropTable(
                name: "Projekat");

            migrationBuilder.DropTable(
                name: "Firma");
        }
    }
}
