import imgGroup from '../../assets/images/suits-principal-group.webp'

export default function Sinopse() {
  return (
    <div className="w-full h-full text-white flex flex-col items-center pt-16 ">
            <h2 className="uppercase text-4xl">Sinopse</h2>
            <div className="w-full pt-16 flex flex-col gap-5">
                <p className="">Suits (EN) ou Homens de Terno (PT-BR) é uma série de televisão de drama legal americano, criada e escrita por Aaron Korsh. A série se passa em Nova York, mais especificamente em um escritório de advocacia chamado Pearson Hardman.</p>
                <p className="">Mike Ross (Patrick J. Adams) é um garoto que abandonou a faculdade de direito mas, brilhante como é, consegue uma entrevista com o respeitado Harvey Specter (Gabriel Macht), um dos melhores advogados de Manhattan. Quando percebe o talento nato e a memória fotográfica do garoto, Harvey o contrata e, juntos, eles formam uma dupla imbatível. Mesmo sendo um gênio, Mike ainda tem muito a aprender sobre o Direito. </p>
                <p className="">E mesmo sendo um advogado tão competente, Harvey irá aprender com sua nova dupla a ver seus clientes de outra maneira. A princípio, ambos mentem para que Mike possa trabalhar na firma Pearson Hardman, um escritório de advocacia com uma política de aceitar apenas ex-alunos da Escola de Direito de Harvard. Além da parceria no âmbito profissional, Harvey e Mike criam um forte laço de amizade um com o outro à medida em que resolvem novos casos todos os dias. </p>
                <p className="">Na Pearson Hardman existem outros advogados como o Luis Litt (Rick Hoffman) e Jéssica Pearson (Gina Torres), além de Donna Paulsen (Sarah Rafferty) que é secretária e Rachel Zane (Meghan Markle), paralegal são os personagens principais.</p>
            </div>
            <img className='pt-20' src={imgGroup} alt="" />
    </div>
  )
}
