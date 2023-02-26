import { armenianFlag, russianFlag, usaFlag } from '../../assets/svgs/index.svg'
import { useFlags } from './useFlags'
import './Flags.css'

export const Flags = () => {
    const { i18n, changer } = useFlags()

    return (
        <>
            <div className='images'>
                <img src={usaFlag} onClick={() => changer('en')} className={i18n.languages[0] === 'en' ? 'activa' : 'no-active'} />
                <img src={armenianFlag} onClick={() => changer('hy')} className={i18n.languages[0] === 'hy' ? 'activa' : 'no-active'} />
                <img src={russianFlag} onClick={() => changer('ru')} className={i18n.languages[0] === 'ru' ? 'activa' : 'no-active'} />
            </div>
        </>
    )
}
