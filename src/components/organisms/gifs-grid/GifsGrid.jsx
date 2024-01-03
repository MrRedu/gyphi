import ProTypes from 'prop-types'

import styles from './GifsGrid.module.css'

import { Loader } from '@/components/atoms/loader/Loader'
import { Gif } from '@/components/atoms/gif/Gif'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { ChevronRight } from 'lucide-react'
import { rightChevron } from '@/libs/lucide'
import { NoStringFound } from '@/components/molecules/no-string-found/NoStringFound'

export const GifsGrid = ({ category, gifs, loading }) => {
  return (
    <>
      <div className={styles.container}>
        <CategoryTitle>
          <CategoryTitle.LinkComponent to={`/category/${category}`}>
            <CategoryTitle.Title>{category}</CategoryTitle.Title>
          </CategoryTitle.LinkComponent>
          <CategoryTitle.LinkComponent to={`/category/${category}`}>
            <CategoryTitle.SecondaryText>
              All the GIFs
              <ChevronRight
                size={rightChevron.size}
                strokeWidth={rightChevron.strokeWidth}
              />
            </CategoryTitle.SecondaryText>
          </CategoryTitle.LinkComponent>
        </CategoryTitle>

        <div className={styles['gifs-container']}>
          {loading && <Loader />}
          {gifs.length < 1 && !loading && (
            <NoStringFound>
              <NoStringFound.PrincipalText>
                No GIFs found
              </NoStringFound.PrincipalText>
              <NoStringFound.SecondaryText>
                Try with another category
              </NoStringFound.SecondaryText>
            </NoStringFound>
          )}
          {gifs &&
            gifs.map(({ url, title, id, image }) => {
              return (
                <Gif key={id} url={url} title={title} id={id} image={image} />
              )
            })}
        </div>
      </div>
    </>
  )
}

GifsGrid.propTypes = {
  category: ProTypes.string.isRequired,
  gifs: ProTypes.array.isRequired,
  loading: ProTypes.bool,
}
