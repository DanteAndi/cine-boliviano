import ActorCard from "../components/ActorCard";

function Principal() {
  return (
    <div className="d-flex justify-content-center">
      <ActorCard
        nombre="Christian Bale"
        imagen="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarvelcinematicuniverse.fandom.com%2Fes%2Fwiki%2FChristian_Bale&psig=AOvVaw3JAdBBB56BKFNNQ46mOqP8&ust=1750088014944000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODQs_7f840DFQAAAAAdAAAAABAe"
        descripcion="Actor famoso por interpretar a Batman y papeles dramáticos."
      />
      <ActorCard
        nombre="Vin Diesel"
        imagen="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FVin_Diesel&psig=AOvVaw2CkliFCTxBOdZiDtAAv3pF&ust=1750088670288000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCRiLfi840DFQAAAAAdAAAAABAE"
        descripcion="Actor famoso por interpretar a Toreto en Rapidos y Furiosos."
      />
      <ActorCard
        nombre="Paul Walker"
        imagen="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Flife%2Fpeople%2F2018%2F11%2F30%2Fpaul-walkers-mom-marks-5-years-since-fatal-crash%2F2163245002%2F&psig=AOvVaw3M2xMJKSteJts1x51tgSbE&ust=1750088735164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiFt9Xi840DFQAAAAAdAAAAABAL"
        descripcion="Actor famoso por interpretar a Brian O'conner y recordado ya que fallecio en el 2013."
      />
    </div>
  );
}
export default Principal;