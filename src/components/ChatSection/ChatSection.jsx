import React from "react";
import ChatNavabar from "./ChatNavabar";
import { MdEmojiObjects } from "react-icons/md";
import { BsEmojiAngryFill } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";
import { BiMicrophone } from "react-icons/bi";
import { IconContext } from "react-icons";

export function BottomInput() {
  return (
    <IconContext.Provider value={{ className: "text-xl" }}>
      <div className="w-full fixed bottom-0 bg-slate-800 px-4 py-2.5 h-[50px] space-x-3 inline-flex items-center md:w-[65vw] md:h-12 md:py-2">
        <button>
          <BsEmojiAngryFill />
        </button>
        <input
          className="w-full bg-transparent border-none active:border-none md:text-sm md:h-full"
          type="text"
          placeholder="Message"
        />
        <button>
          <CgAttachment />
        </button>
        <button>
          <BiMicrophone />
        </button>
      </div>
    </IconContext.Provider>
  );
}

function ChatSection() {
  return (
    <div className="min-h-screen">
      <ChatNavabar />
      <div className="w-full pl-7 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius et id
        quidem at quaerat fugiat asperiores facere suscipit illo, quasi ns
        nulla. ? Repudiandae ab doloremque, deleniti molestias laboriosam
        repellat sequi inventore eius eveniet, delectus necessitatibus voluptas,
        animi perspiciatis nam expedita maxime recusandae. Beatae dolorem
        mollitia ad vitae harum ipsum quos fuga illo magnam expedita nobis
        impedit a veritatis error, tempora sed omnis ea. Id, quasi? Quae maiores
        eum, vero perspiciatis ducimus, illo incidunt consectetur corporis,
        voluptatem suscipit doloremque doloribus repudiandae. Tenetur eaque
        molestiae necessitatibus fuga aut suscipit quisquam sit consequuntur,
        aliquid impedit harum cum delectus quae itaque ullam. Velit magni quo
        sit. Eos alias aut saepe enim dolorum ducimus iusto placeat,
        necessitatibus modi rerum cumque, culpa voluptatum quae nihil unde
        doloremque similique voluptatem blanditiis tempore quisquam dolor!
        Inventore, culpa veniam suscipit voluptas ullam dignissimos dicta
        aliquam quasi! Sed perferendis illo iusto dolore.lorem300 Lorem ipsum
        dolor sit amet consectetur adipisicing elit. A dolorem optio dicta
        obcaecati pariatur esse eligendi alias molestias sunt voluptatem?
        Corrupti iusto doloremque nobis commodi ad accusantium! Commodi a,
        maxime doloribus magnam debitis, quasi omnis quibusdam nihil distinctio
        sequi necessitatibus inventore veniam odit perferendis ex, alias laborum
        voluptate non eaque! Aspernatur, omnis hic deserunt a in recusandae
        repellendus, sunt sapiente adipisci natus voluptas doloribus. Ipsum ipsa
        nobis maxime, harum sapiente vel repellat nihil similique, voluptatem
        doloremque provident tenetur tempore in minima! Aperiam suscipit
        doloremque porro, rerum ex itaque enim eum quidem consequuntur fugiat.
        Debitis sunt sapiente quaerat necessitatibus quibusdam doloremque hic,
        itaque dolorum quasi perspiciatis nihil, tempore repellat ea, aliquam
        tenetur labore. Autem tempore molestiae, itaque ipsam maiores sed id
        assumenda at officiis sequi? Amet natus, rerum distinctio quos ad vel
        dolorem vero nostrum a ipsam ea reiciendis reprehenderit sint voluptate,
        consequatur illo pariatur laboriosam modi quod deserunt. At ea magni
        quasi voluptatem adipisci consequatur laboriosam illum veniam nostrum
        quam. Qui libero tempore totam. Voluptatum molestiae soluta pariatur
        culpa harum ratione repudiandae dicta numquam perferendis quasi eveniet
        labore earum nihil velit animi cum, ducimus eaque. Magni enim
        consequuntur dolore, veniam unde totam incidunt quisquam obcaecati
        perferendis ab voluptas laboriosam quos hic dignissimos doloribus
        repudiandae autem fuga neque placeat. Sint consequatur quaerat vel quod.
        Maxime, asperiores! Veniam eius quam quis doloremque. Quo inventore,
        praesentium sint laudantium hic quam, expedita voluptates dolore
        pariatur earum consequuntur illo! Quae ea perspiciatis animi dolorum
        optio facilis veritatis nisi quod minus eveniet, ab quos cupiditate fuga
        fugit non tempora dolores voluptas vel consequuntur perferendis id
        impedit a rem quo. Laudantium architecto tempora voluptatem
        exercitationem perferendis fugit corporis pariatur ullam nisi quidem
        natus nobis eius doloremque quo aliquid minus quaerat quae qui
        dignissimos, ratione atque deleniti neque. Eum commodi quibusdam
        voluptate maxime earum, eius autem illo laborum? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatem amet facilis, iure nisi
        consequatur quidem dignissimos illum veniam adipisci incidunt laboriosam
        ad ex atque perspiciatis dolor, in eius sapiente deleniti laborum omnis?
        Dicta, iure. Dolore, enim maiores? Optio quas doloribus accusantium
        corrupti et dolor culpa facilis dolorem assumenda, reprehenderit quia?
        Minus eveniet, assumenda nulla quasi voluptatum aliquid ut, saepe
        reprehenderit nisi fugit voluptate quo corrupti cupiditate! Rerum
        molestias fugiat mollitia possimus laborum. Quo assumenda aliquid fugit
        ducimus non possimus architecto dolore. Ipsa, in eum officia dicta sit
        quod earum. Deserunt veniam quis explicabo nostrum harum, atque quos
        eveniet sed doloribus, cupiditate, quo alias voluptatem qui omnis
        labore! Pariatur qui, iste optio debitis asperiores eligendi aperiam
        unde molestiae consectetur expedita ab exercitationem magni sint vero
        sapiente, saepe veritatis. Incidunt quis, dolorum reprehenderit aliquid
        itaque molestias? Dicta, quam? Quas nobis facilis modi quo. Adipisci
        tempora eveniet vel nulla, voluptas excepturi perspiciatis at aliquam
        consequuntur ullam nemo quas quisquam. Natus eius delectus distinctio
        rerum eum. Accusantium quibusdam excepturi quis corrupti ut. Fugiat
        obcaecati sapiente ipsam vero repellat harum eum ab quibusdam veniam
        praesentium eos quod blanditiis, velit magnam rerum eaque voluptas, ea
        facere nostrum reiciendis accusamus et labore. Repellat facere a dicta
        earum obcaecati vitae magnam quos debitis id, quas quod hic deleniti
        minima reprehenderit blanditiis quidem harum suscipit molestias quasi?
        Ab accusamus tenetur molestias! Obcaecati nam deleniti repellendus vitae
        nostrum, magni sapiente odit maxime natus voluptas eius consectetur quis
        voluptatem maiores veniam. Non dolores sit veniam necessitatibus amet
        voluptatum repellendus deserunt eligendi repellat, quae sunt consequatur
        cumque omnis voluptates aperiam quas distinctio eius natus reiciendis
        maxime explicabo quod quasi assumenda! Voluptatem non assumenda maxime
        ratione distinctio praesentium accusantium facilis blanditiis.
        Temporibus animi blanditiis odio laborum voluptate aperiam, quisquam,
        sequi dignissimos libero distinctio nam ullam ipsa eius, quasi vel iste
        voluptates repudiandae ut vitae cumque tenetur qui aliquam soluta
        accusamus? Sunt ex, minus, iste quia fuga delectus sed odio quisquam,
        autem similique dolor ab unde nam saepe excepturi facere et? Voluptate
        esse, beatae ipsa aliquid harum laborum dolore asperiores adipisci
        libero fugit tempora amet sint eos ducimus vero architecto iure cumque
        ad quasi omnis obcaecati quis expedita. Facere, dolore molestiae at id
        eveniet non perferendis voluptatem esse excepturi, neque ea fugit
        tempora ut et aliquid nostrum eius ad, hic sequi recusandae fuga illo
        distinctio explicabo dolores. Maxime iure reprehenderit esse recusandae
        reiciendis sed praesentium placeat inventore adipisci distinctio tempora
        magnam, nisi delectus natus molestias. Optio repudiandae tempore
        perspiciatis earum dolores dolore sapiente veritatis, aut, ab aperiam
        inventore, quaerat officia. Voluptate hic minus, explicabo nulla quidem
        blanditiis earum nihil architecto molestias excepturi cupiditate
        accusantium voluptas saepe quas necessitatibus delectus tempore repellat
        pariatur laborum iste! Doloremque vero ad pariatur. Beatae unde quisquam
        autem quas, id exercitationem aspernatur at accusamus, facere veniam
        adipisci quis. Nemo, aliquid dicta consequatur facere obcaecati sed
        ratione deleniti incidunt eaque nihil omnis. Possimus et iste, quisquam
        illum ab rem incidunt id porro aperiam nulla illo exercitationem nobis
        quam mollitia eum commodi. Commodi sunt, non velit consequatur eligendi
        doloremque aliquid eius accusantium facilis vitae odio recusandae ad,
        porro tempore possimus sapiente veniam quo quod odit quasi expedita?
        Atque cumque provident beatae, sit, necessitatibus nobis delectus
        officia porro nesciunt explicabo voluptatem molestias neque repellendus
        quidem quaerat quis numquam minima quia sequi! Repellat vitae sed ipsam
        corrupti veniam tempora suscipit, molestias porro! Distinctio earum
        voluptatem voluptates cupiditate quo ducimus nesciunt eveniet obcaecati,
        incidunt molestiae temporibus sequi, saepe autem natus fugiat.
        Exercitationem tempore harum placeat nam iste ipsum aliquid. Nemo quae
        enim harum iusto. Ipsam, perspiciatis. Ipsa rem hic vel corrupti quidem,
        nam molestiae labore architecto dolor commodi quis eius, expedita
        excepturi earum? Neque iusto ipsum et non, recusandae placeat laudantium
        minus ea magnam repellendus quis nulla dolorem dicta inventore fuga
        assumenda quia, qui iste autem cumque voluptatibus. Nesciunt
        exercitationem aperiam doloribus iste harum ullam quo facere. Minima
        autem dignissimos, harum, vero nisi quas maxime alias quibusdam enim, ad
        delectus! Quod laborum illo rerum quis sapiente minima delectus vero qui
        iste sint est reiciendis corrupti quam quisquam, quos voluptate ex quasi
        in magnam magni voluptatem eum vitae itaque fugit. Recusandae sunt
        labore officia mollitia excepturi laboriosam necessitatibus perferendis
        suscipit expedita atque possimus, corrupti non fugit aspernatur, rem
        quaerat id, blanditiis dicta dolores autem voluptatem amet consequuntur
        modi architecto! Ipsum vero ut et omnis sed recusandae atque quasi
        inventore a nisi, molestias dolorem officia, voluptas quae
        necessitatibus totam quibusdam blanditiis consectetur nulla itaque.
        Laborum quae alias architecto quo quaerat, vel minima reprehenderit
        repellendus ab cum quisquam quidem iure maiores consequatur dolore,
        itaque minus odio similique? Cumque neque nemo excepturi accusamus quod
        iste sit dignissimos a ab odit cupiditate labore reiciendis eum pariatur
        unde, corrupti laboriosam molestias eos dolor amet officia! Tenetur in
        expedita labore sapiente rerum aliquam dicta, ratione perferendis
        ducimus accusamus voluptatem doloremque error, nostrum esse aperiam
        alias saepe hic et inventore enim? At, ratione consequatur recusandae
        maiores adipisci dolore perferendis quam tempore, voluptates veniam ipsa
        reiciendis corrupti corporis itaque modi minima velit sapiente! Iste
        error natus adipisci nesciunt eius quas tempore odio cum corrupti
        repellat! Neque amet culpa voluptates eius ad adipisci dolor quis omnis.
        Sunt sequi eaque inventore quae magnam molestias quis dignissimos ab
        iusto minima delectus quidem, aspernatur id. Odit laborum vel modi
        laboriosam eos odio placeat accusamus iure non, consectetur reiciendis
        velit dicta magni quidem similique doloribus reprehenderit corporis.
        Laboriosam quasi debitis molestiae eaque non est. Praesentium accusamus,
        temporibus veniam vel veritatis enim hic deserunt nulla rerum sunt
        tempora amet quod quo, quam, fugiat ea vero architecto? Distinctio
        blanditiis hic minus totam quod! Voluptatem cumque, modi explicabo vitae
        esse nemo corporis molestiae perspiciatis doloremque? Cumque autem nisi
        dicta, numquam architecto reprehenderit illum impedit quasi, illo
        aperiam laborum iusto neque quisquam accusamus nam dolorum blanditiis
        corrupti recusandae tempora quae odit! Magnam aliquam ex laudantium
        tempore deleniti sequi, praesentium nesciunt, odio maiores eaque, quas
        quae magni dolorem debitis. Numquam aperiam laborum debitis velit rem
        facere eligendi consequuntur totam, veritatis sunt quod veniam
        perferendis. Incidunt deleniti itaque iure hic laudantium. Quidem et
        provident, aut praesentium accusantium quod a nesciunt minus hic
        suscipit facere dolores!
      </div>
      <BottomInput />
    </div>
  );
}

export default ChatSection;
