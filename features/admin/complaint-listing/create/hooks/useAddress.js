import { useCallback, useEffect } from 'react'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { useAppSelector, useAppDispatch } from '@/store/hooks'

const useAddress = (props) => {
  const { province, district, subDistrict, handlerChange, nameProvince, nameDistrict, nameSubDistrict, namePostalCode, nameAddressCode, fetchDistricts, fetchSubDistricts, fetchPostcode } = props
  const master = useAppSelector(state => state.master)
  const dispatch = useAppDispatch()

  const [funcDistrict, loadingDistrict, dataDistrict] = useGetAPI('none', {
    funcDispatch: fetchDistricts, reducerName: 'master', reducerKey: nameDistrict,
  })
  const [funcSubDistrict, loadingSubDistrict, dataSubDistrict] = useGetAPI('none', {
    funcDispatch: fetchSubDistricts, reducerName: 'master', reducerKey: nameSubDistrict,
  })

  useEffect(() => {
    if (province) {
      funcDistrict('/api/v1/master/district', { ...dataDistrict.search, province_id: province }, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province])

  useEffect(() => {
    if (province && district) {
      funcDistrict('/api/v1/master/district', { ...dataDistrict.search, province_id: province }, false)
      funcSubDistrict('/api/v1/master/subDistrict', { ...dataSubDistrict, search, province_id: province, district_id: district }, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province, district])

  const onChangeProvince = useCallback((name, value, otherValues = {}) => {
    if (typeof handlerChange === 'function') {
      handlerChange({
        [name]: value,
        [nameDistrict]: null,
        [nameSubDistrict]: null,
        ...otherValues
      });
    }
    dispatch(fetchDistricts({ data: null }))
    dispatch(fetchSubDistricts({ data: null }))
  }, [dispatch, fetchDistricts, fetchSubDistricts, handlerChange, nameDistrict, nameSubDistrict])

  const onChangeDistrict = useCallback((name, value, otherValues = {}) => {
    if (typeof handlerChange === 'function') {
      handlerChange({
        [name]: value,
        [nameSubDistrict]: null,
        ...otherValues
      });
    }
    dispatch(fetchSubDistricts({ data: null }))
  }, [dispatch, fetchSubDistricts, handlerChange, nameSubDistrict])

  return {
    dataProvinces: master.provinces,
    dataDistrict,
    dataSubDistrict,
    loadingDistrict,
    loadingSubDistrict,
    onChangeProvince,
    onChangeDistrict
  }
}

export default useAddress
